from PIL import Image, ImageOps
import os, json

# ----- Expected Output -----

# Directory structure
# (dir)resize results
#   (dir)[file_type_1]
#     (dir)[size_1_x]x[size_1_y]
#       (file)[filename_1]-[size_1_x]x[size_1_y].[file_type_1]
#       (file)[filename_2]-[size_1_x]x[size_1_y].[file_type_1]
#       ...
#     (dir)[size_2_x]x[size_2_y]
#       (file)[filename_1]-[size_2_x]x[size_2_y].[file_type_1]
#       (file)[filename_2]-[size_2_x]x[size_2_y].[file_type_1]
#       ...
#     ...
#   (dir)[file_type_2]
#     (dir)[size_1_x]x[size_1_y]
#       (file)[filename_1]-[size_1_x]x[size_1_y].[file_type_2]
#       (file)[filename_2]-[size_1_x]x[size_1_y].[file_type_2]
#       ...
#     (dir)[size_2_x]x[size_2_y]
#       (file)[filename_1]-[size_2_x]x[size_2_y].[file_type_2]
#       (file)[filename_2]-[size_2_x]x[size_2_y].[file_type_2]
#       ...
#     ...

# JSON
# [
#   {
#     "name": "{file name without extension}"
#     "alt": "",
#     "classes": [],
#     "centerOfFocus": {
#       "x": 50,
#       "y": 50
#     },
#     "defaultPath": "{path of last image set}",
#     "imageSet": [
#       {
#         "path": "^directory path^/{type}/{size}/{file name with extension}",
#         "type": "{type}",
#         "width": {image width},
#         "height": {image height}
#       }, ... one for each image type and size
#     ]
#   }, ... one for each original image
# ]

def filename_stem(path):
  base = os.path.basename(path)
  return os.path.splitext(base)[0]

def file_ext(path):
  base = os.path.basename(path)
  return os.path.splitext(base)[1]

def create_directory(parent, dir_name):
  path = os.path.join(parent, dir_name)
  if os.path.isdir(path):
    return
  os.mkdir(path)

def resize_dimensions(m, width , height):
  max_dim = max(width, height)
  if(m >= max_dim): return width, height
  r = m / max_dim
  return int(r*width), int(r*height)

def save_resized_image(source_dir, type, size, filename):
  new_size = None
  new_img_name = None

  if not filename.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.bmp', '.gif', '.webp')):
    return new_size, new_img_name

  with Image.open(os.path.join(source_dir, filename)) as source_img:
    width, height = source_img.size
    new_size = resize_dimensions(size, width, height)
    with source_img.resize(new_size) as new_img:
      ImageOps.exif_transpose(new_img, in_place=True)
      new_img_name = f'{filename_stem(filename)}.{type}'
      new_img_path = os.path.join(source_dir, type, str(size), new_img_name)
      if(('.' + type) == file_ext(filename)):
        new_img.save(new_img_path)
      else:
        new_img.save(new_img_path, format=type)
  
  return new_size, new_img_name

def process(source_dir, file_types, sizes):
  if not os.path.isdir(source_dir):
    print('Source Directory must be a directory.')
    return
  
  supported_file_types = [
    'webp',
    'tiff',
    'bmp',
    'gif',
    'jpg', 
    'jpeg',
    'png',
  ]

  ordered_sizes = sorted(sizes, reverse=True)

  images_json = []

  for type in supported_file_types:
    if(type not in file_types):
      continue

    create_directory(source_dir, type)
    for size in ordered_sizes:
      create_directory(os.path.join(source_dir, type), str(size))
      for filename in os.listdir(source_dir):
        new_size, new_img_name = save_resized_image(source_dir, type, size, filename)

        if new_size == None:
          continue

        image_json_name = filename_stem(filename)
        image_json = next((d for d in images_json if d['name'] == image_json_name), None)

        if image_json == None:
          image_json = {
            'name': image_json_name,
            'alt': '',
            'classes': [],
            'centerOfFocus': {
              'x': 50,
              'y': 50
            },
            'defaultPath': '',
            'imageSet': []
          }
          images_json.append(image_json)

        image_json['imageSet'].append({
          'path': f'^directory path^/{type}/{size}/{new_img_name}',
          'type': type,
          'width': new_size[0],
          'height': new_size[1]
        })

  for image_json in images_json:
    image_json['defaultPath'] = image_json['imageSet'][len(image_json['imageSet'])-1]['path']

  with open(os.path.join(source_dir, 'imagesJson.json'), 'w', encoding='utf-8') as f:
    json.dump(images_json, f, ensure_ascii=False, indent=2)

source = input('Source Directory: ').strip()
types = [s.strip() for s in input('File types ( , delimited list ): ').strip().split(',')]
sizes = [int(s.strip()) for s in input('Sizes ( , delimited list ): ').strip().split(',')] # , separated list of sizes

process(source, types, sizes)