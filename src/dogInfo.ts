enum BreedType {
  Poodle = 'Poodle',
  Bernese = 'Bernese',
  Bernedoodle = 'Bernedoodle',
  Cavapoo = 'Cavapoo',
  KingCharlesCavalier = 'KingCharlesCavalier',
}

enum BreedClass {
  AKC = 'AKC',
  Multigeneration = 'Multigeneration',
  F1 = 'F1',
  F2 = 'F2',
  F1B = 'F1B',
  F2B = 'F2B',
}

enum BreedSize {
  Standard = 'Standard',
  MediumStandard = 'Medium Standard',
  SmallStandard = 'Small Standard',
  Medium = 'Medium',
  Moyan = 'Moyan',
  Mini = 'Mini',
  MicroMini = 'Micro Mini'
}

enum CoatType {
  Straight = 'Straight',
  Wavy = 'Wavy',
  Curly = 'Curly',
}

enum CoatColorPatterns {
  Sable = 'Sable',
  Phantom = 'Phantom',
  ApricotSable = 'Apricot Sable',
  TraditionalTriColor = 'Traditional Tri-color',
  TriColorWithSable = 'Tri-color with Sable',
  BlackTanPoints = 'Black with Tan Points',
  Red = 'Red',
}

export enum DogState {
  Puppy = 'Puppy',
  Breeder = 'Breeder',
  Retired = 'Retired',
  Sold = 'Sold',
}

export enum LitterState {
  Expected = 'Expected',
  Puppy = 'Puppy',
  HomeBound = 'Home Bound',
  Complete = 'Complete',
}

export enum PuppyStatus {
  Available = 'Available',
  Reserved = 'Reserved',
  Sold = 'Found Forever Home',
}

export interface Breed {
  class: BreedClass,
  size?: BreedSize,
  type: BreedType,
}

export interface LitterBreed {
  class: BreedClass,
  expectedSizes: BreedSize[],
  type: BreedType,
}

export interface DogImages {
  main: string,
  gallery: string[],
}

export interface StudService {
  price: number,
  pickOfLitter?: 'or' | 'and',
}

export interface OFADocuments {
  ofaPreliminaryId?: number
  ofaId?: number,
  canineHealth?: string,
  elbows?: string,
  eyes?: string,
  hips?: string,
  heart?: string,
  thyroid?: string,
  patellas?: string,
}

export interface DogTesting {
  OFA?: OFADocuments,
  genetics?: {
    results?: string,
    path: string,
    company: string,
  },
}

export interface Dog {
  id: string,
  name: string,
  gender: 'M' | 'F',
  description: string,
  isInternal: boolean,
  state: DogState,
  weight: number,
  breed: Breed,
  images: DogImages,
  testing?: DogTesting,

  additionalInformation?: string[],
  studService?: StudService, // [future use] for internal studs
  link?: string,
}

export interface Puppy {
  id: string,
  name: string
  status: PuppyStatus
  gender: 'M' | 'F'
  description: string
  imageName: string
  priceAboveStarting: number
}

export interface LitterInfo {
  // id: the id is the compound of dam sire and hyphenated dueDate with _ separator
  id: string,
  dam: Dog, // composite key
  sire: Dog, // composite key
  preBirthDescription?: string,
  dueDate: Date, // composite key
  birthDate?: Date,
  goHomeDate?: Date,
  size: number, // number of puppies
  expectedPuppySize: string, // expected size the puppies should get
  state: LitterState,
  puppyBreed: LitterBreed,
  expectedCoatTypes: CoatType[],
  expectedColors: CoatColorPatterns[],
  startingPrice: number,
  reservationFee: number,
  puppies?: Puppy[]
}

const findDog = (name: string, dictionary: Dog[]): Dog => {
  const dog = dictionary.find((dog: Dog) => dog.name === name) || {
    id: '',
    name: '',
    gender: 'F',
    description: '',
    isInternal: false,
    state: DogState.Sold,
    weight: 0,
    breed: {
      class: BreedClass.AKC,
      size: BreedSize.Mini,
      type: BreedType.Poodle,
    },
    images: {
      main: 'liberty001',
      gallery: [],
    },
    testing: {
      OFA: {
        elbows: 'Incomplete',
        eyes: 'Incomplete',
        hips: 'Incomplete',
        patellas: 'Incomplete',
        heart: 'Incomplete',
        thyroid: 'Incomplete',
      },
    },
  };
  return dog;
};

export const dogs:Dog[] = [
  {    // Libby
    id: 'f9392faa-8f0c-44f7-9477-bb32ce7a8bc9',
    name: 'Liberty',
    gender: 'F',
    description: 'Liberty is the start of our breeding business! She is a beautiful apricot sable, standard AKC Poodle. She\'s a 40-pound bundle of intelligence and affection, with all the classic traits that make Poodles such a beloved breed. She is gentle and intuitive, sweet and sassy. Libby is always eager to be close and involved in whatever we\'re doing whether we\'re watching a movie or playing outside. Her smaller standard size makes her easy to manage, but she still has plenty of energy for play and adventure.',
    isInternal: true,
    state: DogState.Breeder,
    link: '/dog/Liberty',
    weight: 40,
    breed: {
      type: BreedType.Poodle,
      size: BreedSize.SmallStandard,
      class: BreedClass.AKC,
    },
    images: {
      main: 'Liberty_sitting_handkerchief_2',
      gallery: [
        'Liberty_sitting_handkerchief_2',
        'Liberty_sitting_handkerchief_1',
        'Liberty_sitting_pretty',
      ],
    },
    testing: {
      OFA: {
        ofaId: 2473538,
        canineHealth: '/documents/liberty/compressed/LADY LIBERTY XXII-CANINE HEALTH-2023-10-16.pdf',
        elbows: '/documents/liberty/compressed/LADY LIBERTY XXII-ELBOW-2023-07-13.pdf',
        eyes: '/documents/liberty/compressed/LADY LIBERTY XXII-EYES-2023-10-12.pdf',
        hips: '/documents/liberty/compressed/LADY LIBERTY XXII-HIPS-2023-07-13.pdf',
        heart: '/documents/liberty/compressed/LADY LIBERTY XXII-BASIC CARDIAC-2023-09-28.pdf',
        thyroid: '/documents/liberty/compressed/LADY LIBERTY XXII-THYROID-2023-10-09.pdf',
      },
      genetics: {
        results: 'Genetically clear through Embark and parentage.',
        path: '/documents/liberty/compressed/Liberty Embark Test Results.pdf',
        company: 'embark',
      },
    },
  }, { // King Kong
    id: 'cb3fe85e-c1e7-49c8-af69-61b335b7a322',
    name: 'King Kong',
    gender: 'M',
    description: 'King Kong is an outside stud from Sun Valley Doodles',
    isInternal: false,
    state: DogState.Breeder,
    weight: 30,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.Mini,
      class: BreedClass.F2,
    },
    images: {
      main: 'king_kong',
      gallery: [],
    },
    testing: {
      OFA: {
        hips: '/documents/king kong/King Kong Pennhip.pdf',
        eyes: '/documents/king kong/KK eyes.pdf',
        heart: '/documents/king kong/KK Heart.pdf',
        patellas: '/documents/king kong/KK Patellas.pdf',
      },
      genetics: {
        path: '/documents/king kong/King Kong Genetic Testing.pdf',
        company: 'Animal Genetics',
      },
    },
    additionalInformation: [
      'King Kong is an outside stud from Sun Valley Doodles',
      'King Kong is fully furnished with no curl',
      'He is 100% clear of all genetic diseases with Animal Genetics and Embark.',
      'His OFA\'s are completed and normal.',
    ],
  }, { // Holly
    id: '0e7a755e-9773-4b11-9cae-6f4c16babff3',
    name: 'Holly',
    gender: 'F',
    description: 'AKC Registered Moyan Poodle',
    isInternal: true,
    state: DogState.Breeder,
    weight: 18,
    breed: {
      type: BreedType.Poodle,
      size: BreedSize.Moyan,
      class: BreedClass.AKC,
    },
    images: {
      main: 'holly_sitting_chair',
      gallery: [],
    },
  }, { // Luna
    id: '73c2bfee-83d2-47d1-9bf5-7e78613d6f89',
    name: 'Luna',
    gender: 'F',
    description: 'Luna is a mini tri-chocolate parti multi-generational bernedoodle.',
    isInternal: true,
    state: DogState.Breeder,
    weight: 45,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.Mini,
      class: BreedClass.Multigeneration,
    },
    images: {
      main: 'Luna_fluffy_cut',
      gallery: [
        'Luna_fluffy_cut',
        'Luna_laying_floor',
      ],
    },
    testing: {
      OFA: {
        ofaPreliminaryId: 2537502,
        ofaId: 2585205,
      },
      genetics: {
        results: 'Genetically clear through Embark and parentage.',
        path: '',
        company: 'Embark',
      }
    },
  }, { // Twiggy
    id: '9641d81b-7806-42b3-9f9d-b4c876e01aca',
    name: 'Twiggy',
    gender: 'M',
    description: 'Twiggy is an outside stud. He is a tri-colored F1 Bernedoodle. He is a micro mini at only 20 lbs.',
    isInternal: false,
    state: DogState.Breeder,
    weight: 20,
    breed: {
      type: BreedType.Bernedoodle,
      size: BreedSize.MicroMini,
      class: BreedClass.F1,
    },
    images: {
      main: 'Twiggy',
      gallery: ['Twiggy'],
    }
  }
];

export const puppies: Puppy[] = [
  {    // Tiny Tim
    id: '1f4d856a-0413-4ed2-a76a-f91d4c5b1184',
    name: 'Tiny Tim',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: 'Tiny Tim is super sweet.  He loves to play and loves to cuddle.  He has a wavy coat and will be between 30-35 lbs. fully grown. ',
    imageName: 'Liberty_KingKong_TinyTim_6weeks',
    priceAboveStarting: 0,
  }, { // Gloria
    id: '931256d9-4dc0-4c61-98f3-9263073a2204',
    name: 'Gloria',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: 'Gloria is spunky and loves to be around those she knows.  She will be perfect for someone who will be with her all day long.',
    imageName: 'Liberty_KingKong_Gloria_6weeks_2',
    priceAboveStarting: 0,
  }, { // Maple
    id: '61558fdd-f10d-4b04-95b9-790862fd3ac4',
    name: 'Maple',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: 'She is super smart.  Already, at only 4 weeks old, she is already going to the potty box to go to the bathroom.  She is very mellow and super sweet.',
    imageName: 'Liberty_KingKong_Maple_6weeks',
    priceAboveStarting: 0,
  }, { // Licorice
    id: '53d125b6-8f70-4b9d-aaba-6c9de02ca92a',
    name: 'Licorice',
    status: PuppyStatus.Reserved,
    gender: 'M',
    description: 'Licorice is very quiet and very mellow.  He sometimes will just sit back and watch his siblings play and other times is the one trying to get another to wrestle with him.  He is very sweet and loves to give lots of kisses.  He is charting to be around 30 pounds.',
    imageName: 'Liberty_KingKong_Licorice_6weeks',
    priceAboveStarting: 0,
  }, { // Jingle
    id: 'd9f15140-5f60-4404-89b7-f724c2729e5c',
    name: 'Jingle',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: 'Jingle is the biggest of the litter.  He is one of the first to alert when someone walks in the room.  He loves to give puppy kisses and cuddles, but he also loves to romp around with his litter mates.',
    imageName: 'Liberty_KingKong_Jingle_6weeks',
    priceAboveStarting: 0,
  }, { // Buddy
    id: '624d3910-7cdb-4e03-8c5b-0f78cde56264',
    name: 'Buddy',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: 'Buddy is a beautiful tri-color Sable.  He is almost always the first to go try and explore something new.  He is charting to be about 35 pounds.',
    imageName: 'Liberty_KingKong_Buddy_6weeks',
    priceAboveStarting: 0,
  }, { // Hazel
    id: 'c5633b99-8011-4101-a187-b71980ac9851',
    name: 'Hazel',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Hazel_5weeks',
    priceAboveStarting: 0,
  }, { // Cherry
    id: 'aac8147f-5e91-49d4-b420-652ab6285f69',
    name: 'Cherry',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Cherry_5weeks',
    priceAboveStarting: 0,
  }, { // Ivy
    id: 'c2e1e218-4c2f-43a9-a8e2-6fdde8c4b3a5',
    name: 'Ivy',
    status: PuppyStatus.Sold,
    gender: 'F',
    description: '',
    imageName: 'Liberty_KingKong_Ivy_5weeks',
    priceAboveStarting: 0,
  }, { // Birch
    id: '2f5f5d49-e380-4077-910a-cc575540483d',
    name: 'Birch',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Birch_16weeks',
    priceAboveStarting: 0,
  }, { // Oak
    id: 'ed68364f-c5e3-4f78-ab84-9815a00058af',
    name: 'Oak',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Oak_5weeks',
    priceAboveStarting: 0,
  }, { // Spruce
    id: '3b8ef45b-cb87-49e6-aead-875240e0c89f',
    name: 'Spruce',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Spruce_5weeks',
    priceAboveStarting: -1000,
  }, { // Cedar
    id: 'e1527389-0329-47c3-887e-0c97825490e0',
    name: 'Cedar',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Cedar_5weeks',
    priceAboveStarting: 0,
  }, { // Aspen
    id: '803c9d34-6573-4885-9ff8-e3325003899f',
    name: 'Aspen',
    status: PuppyStatus.Sold,
    gender: 'M',
    description: '',
    imageName: 'Liberty_KingKong_Aspen_5weeks',
    priceAboveStarting: 0,
  }, { // Acorn
    id: 'e868ec72-0326-47f5-89ac-681ac8b4368b',
    name: 'Acorn',
    status: PuppyStatus.Available,
    gender: 'M',
    description: 'Acorn is our only sable-colored little squash in this little bunch, and he’s truly one of a kind. As of this morning, he weighed in at 1 pound and 5 ounces, making him the second smallest in the group at the moment. Despite his petite size, Acorn is doing wonderfully and continues to grow steadily each day. What stands out most about Acorn is his incredibly mellow personality. During his daily Early Neurological Stimulation (ENS) sessions, he remains calm and relaxed, taking everything in stride with a gentle and peaceful demeanor. He’s a sweet and easygoing little one who already seems wise beyond his weeks. We\'re loving watching him develop and can\'t wait to see how his temperament continues to unfold as he grows.',
    imageName: 'Acorn',
    priceAboveStarting: 0,
  }, { // Buttercup
    id: '6fe814aa-b1bf-49f6-aa77-8c95330e5d02',
    name: 'Buttercup',
    status: PuppyStatus.Available,
    gender: 'F',
    description: 'Buttercup is our biggest squash, and we are absolutely smitten with her! At just two weeks old, she weighed in at 2 lbs. and 14 oz.— the chunkiest of the batch from day one. She\'s got the most beautiful phantom markings that make her stand out, and her little face is just so squishy, it\'s almost too much cuteness to handle.',
    imageName: 'Buttercup',
    priceAboveStarting: 0,
  }, { // Hubbard
    id: '517ce702-80e7-4fcf-b264-6ed806e854cd',
    name: 'Hubbard',
    status: PuppyStatus.Available,
    gender: 'M',
    description: 'Hubbard weighed in at 2 lbs 1 oz this morning! Our sweet  phantom abstract squash is growing beautifully and hitting all his little milestones. His coat is beginning to show signs of being wavy to curly, giving him that irresistibly soft and fluffy look we all adore. And the most exciting news — his little peepers are just starting to open! It\'s always such a special moment when their eyes begin to peek out at the world for the first time. We can’t wait to see his personality shine through in the coming days!',
    imageName: 'Hubbard',
    priceAboveStarting: 0,
  }, { // Pumpkin
    id: '3c3fbd7b-b245-47b1-abc2-dd972cc70b5a',
    name: 'Pumpkin',
    status: PuppyStatus.Available,
    gender: 'M',
    description: 'Pumpkin is a stunning phantom puppy with a sleek, straight coat that shimmers in the light. His markings are developing nicely, and he already has such a sweet, gentle presence. Watching him snuggle up with his siblings or stretch out in contentment is such a joy. We can’t wait to see how his personality continues to blossom as he grows!',
    imageName: 'Pumpkin',
    priceAboveStarting: 0,
  }, { // Sugar
    id: '47992bac-392d-4d02-adfe-6e740694e36a',
    name: 'Sugar',
    status: PuppyStatus.Available,
    gender: 'F',
    description: 'Sugar is our tiniest little squash, and truly the sweetest little thing. Today she weighed in at just 1 pound and 5.5 ounces—such a delicate little bundle! She’s still so small that she fits perfectly in one of my hands, like a warm, sleepy puff of joy. It’s amazing how something so tiny can already have such a big impact on us all. Her coat is starting to come in more fully now, and you can see the gentle waves beginning to form, giving her that soft, tousled look that’s just irresistible. And those copper points—wow. They’re coming in beautifully, adding such a rich contrast to her black fur and making her little face even more expressive and striking. Watching her grow and change each day is such a joy. Even though she’s still so small, Sugar is already leaving a big impression on our hearts.',
    imageName: 'Sugar',
    priceAboveStarting: 0,
  }, { // Sweetmeat
    id: 'b44cb0b7-61fd-4bd3-9c98-a545c19940ec',
    name: 'Sweetmeat',
    status: PuppyStatus.Available,
    gender: 'F',
    description: 'Sweetmeat is our other beautiful phantom abstract little squash, and she’s truly a sight to behold. Her sleek, smooth coat gleams in the light, showcasing a rich blend of colors that make her stand out among the rest. She has stunning copper points that highlight her features perfectly, adding a warm, radiant glow to her appearance. A touch of white graces her delicate chin and chest, and you can spot little hints of it on a few of her tiny toes—just enough to make her extra charming. She’s already full of quiet sweetness, but I know there’s so much more to her than meets the eye. I look forward to watching her personality emerge with each passing day—to see the little quirks, preferences, and playfulness that will make her uniquely Sweetmeat. Whether she turns out to be bold and adventurous or gentle and reserved, I can’t wait to get to know the heart behind those beautiful eyes.',
    imageName: 'Sweetmeat',
    priceAboveStarting: 0,
  },
];

export const litters:LitterInfo[] = [
  {
    id: '832fd26e-0a4d-45e3-b1fe-714c8edff83a',
    dam: findDog('Liberty', dogs),
    sire: findDog('King Kong', dogs),
    dueDate: new Date(2023, 11, 26),
    birthDate: new Date(2023, 11, 25),
    goHomeDate: new Date(2024, 1, 14),
    size: 6,
    expectedPuppySize: '30 to 45 lbs',
    state: LitterState.Complete,
    puppyBreed: {
      type: BreedType.Bernedoodle,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.F2B,
    },
    expectedCoatTypes: [
      CoatType.Wavy,
    ],
    expectedColors: [
      CoatColorPatterns.ApricotSable,
      CoatColorPatterns.TraditionalTriColor,
      CoatColorPatterns.TriColorWithSable,
    ],
    startingPrice: 1500,
    reservationFee: 500,
    puppies: puppies.filter((puppy) => [
      '1f4d856a-0413-4ed2-a76a-f91d4c5b1184',
      '931256d9-4dc0-4c61-98f3-9263073a2204',
      '61558fdd-f10d-4b04-95b9-790862fd3ac4',
      '53d125b6-8f70-4b9d-aaba-6c9de02ca92a',
      'd9f15140-5f60-4404-89b7-f724c2729e5c',
      '624d3910-7cdb-4e03-8c5b-0f78cde56264',
    ].includes(puppy.id)),
  }, {
    id: '6fe7617e-9f6f-40c1-b00d-2a444a9b6370',
    dam: findDog('Liberty', dogs),
    sire: findDog('King Kong', dogs),
    dueDate: new Date(2024, 6, 19),
    birthDate: new Date(2024, 6, 17),
    goHomeDate: new Date(2024, 8, 11),
    size: 8,
    expectedPuppySize: '30 to 45 lbs',
    state: LitterState.Complete,
    puppyBreed: {
      type: BreedType.Bernedoodle,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.F2B,
    },
    expectedCoatTypes: [
      CoatType.Wavy,
    ],
    expectedColors: [
      CoatColorPatterns.ApricotSable,
      CoatColorPatterns.TraditionalTriColor,
      CoatColorPatterns.TriColorWithSable,
    ],
    startingPrice: 2000,
    reservationFee: 500,
    puppies: puppies.filter((puppy) => [
      'c5633b99-8011-4101-a187-b71980ac9851',
      'aac8147f-5e91-49d4-b420-652ab6285f69',
      'c2e1e218-4c2f-43a9-a8e2-6fdde8c4b3a5',
      '2f5f5d49-e380-4077-910a-cc575540483d',
      'ed68364f-c5e3-4f78-ab84-9815a00058af',
      '3b8ef45b-cb87-49e6-aead-875240e0c89f',
      'e1527389-0329-47c3-887e-0c97825490e0',
      '803c9d34-6573-4885-9ff8-e3325003899f',
    ].includes(puppy.id)),
  }, {
    id: '0ca167c1-b62d-45d9-a074-4c0d085ed45d',
    dam: findDog('Liberty', dogs),
    sire: findDog('Twiggy', dogs),
    // preBirthDescription: 'We\'re expecting F1B Mini Bernedoodles in the fall of this year. They should range between 20 and 45 lbs in weight as adults. We should get traditional tri color, phantom, and sable puppies. They could have curly, wavy, or straight coats.',
    preBirthDescription: 'We welcomed 6 adorable Mini Bernedoodle puppies on Tue Sep 09 2025. Liberty and Twiggy had 3 beautiful girls and 3 handsome boys. These cute pups will be ready to go to their new loving homes Tue Nov 04 2025. Pictures will be coming soon.',
    dueDate: new Date(2025, 8, 10),
    expectedPuppySize: '20 to 45 lbs',
    state: LitterState.Puppy,
    size: 6,
    puppyBreed: {
      type: BreedType.Bernedoodle,
      expectedSizes: [
        BreedSize.Mini,
      ],
      class: BreedClass.F1B
    },
    expectedCoatTypes: [
      CoatType.Curly,
      CoatType.Wavy,
      CoatType.Straight,
    ],
    expectedColors: [
      CoatColorPatterns.Sable,
      CoatColorPatterns.TraditionalTriColor,
      CoatColorPatterns.Phantom,
    ],
    startingPrice: 2000,
    reservationFee: 500, // this is part of the final price not in addition.
    birthDate: new Date(2025, 8, 9),
    goHomeDate: new Date(2025, 10, 4),
    puppies: puppies.filter((puppy) => [
      'e868ec72-0326-47f5-89ac-681ac8b4368b',
      '6fe814aa-b1bf-49f6-aa77-8c95330e5d02',
      '517ce702-80e7-4fcf-b264-6ed806e854cd',
      '3c3fbd7b-b245-47b1-abc2-dd972cc70b5a',
      '47992bac-392d-4d02-adfe-6e740694e36a',
      'b44cb0b7-61fd-4bd3-9c98-a545c19940ec',
    ].includes(puppy.id)),
  }
];