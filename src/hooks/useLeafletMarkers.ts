import { LatLngExpression } from 'leaflet'

interface MyMapMarker {
  type: string
  place: string
  position: LatLngExpression
  icon: string
}

interface CustomerMarker extends MyMapMarker {
  type: 'customer'
  dog: string
  litter: string
}

const markers:MyMapMarker[]|CustomerMarker[] = [
  {
    type: 'customer',
    place: 'Geff, IL',
    dog: 'Tiny Tim',
    litter: 'Liberty | King Kong | 1st',
    position: [38.4426, -88.4036],
    icon: '',
  }, {
    type: 'customer',
    place: 'Sellersburg, IN',
    dog: 'Gloria',
    litter: 'Liberty | King Kong | 1st',
    position: [ 38.3981, -85.7550 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Maple',
    litter: 'Liberty | King Kong | 1st',
    place: 'Nazareth, PA',
    position: [ 40.7404, -75.3096 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Buddy and Darla',
    litter: 'Liberty | King Kong | 1st',
    place: 'Portsmouth, VA',
    position: [ 36.8354, -76.2983 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Jingle',
    litter: 'Liberty | King Kong | 1st',
    place: 'Murphysboro, IL',
    position: [ 37.7645, -89.3351 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Licorice',
    litter: 'Liberty | King Kong | 1st',
    place: 'Ava, IL',
    position: [ 37.8884, -89.4948 ],
    icon: '',
  }, {
    type: 'customer',
    place: 'Clarksville, TN',
    dog: 'Cherry',
    litter: 'Liberty | King Kong | 1st',
    position: [ 36.5298, -87.3595 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Cedar',
    litter: 'Liberty | King Kong | 2nd',
    place: 'Nashville, TN',
    position: [36.1627, -86.7816],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Oak',
    litter: 'Liberty | King Kong | 2nd',
    place: 'Joliet, IL',
    position: [41.5250, -88.0817],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Aspen',
    litter: 'Liberty | King Kong | 2nd',
    place: 'Fenton, MO',
    position: [38.5126, -90.4430],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Hazel',
    litter: 'Liberty | King Kong | 2nd',
    place: 'St. Louis, MO',
    position: [38.6270, -90.1994],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Ivy',
    litter: 'Liberty | King Kong | 2nd',
    place: 'Decatur, IL',
    position: [39.8403, -88.9548],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Spruce',
    litter: 'Liberty | King Kong | 2nd',
    place: 'Cisne, IL',
    position: [38.5159, -88.4375],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Birch',
    litter: 'Liberty | King Kong | 2nd',
    place: 'Joliet, IL',
    position: [41.5244, -88.0855],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Acorn',
    litter: 'Liberty | Twiggy',
    place: 'Cincinnati, OH',
    position: [39.1031, -84.5120],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Hubbard',
    litter: 'Liberty | Twiggy',
    place: 'Bellville, IL',
    position: [38.5201, -89.9840],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Sweetmeat',
    litter: 'Liberty | Twiggy',
    place: 'Clementon, NJ',
    position: [39.8056, -74.9904],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Pumpkin',
    litter: 'Liberty | Twiggy',
    place: 'Mt Juliet, TN',
    position: [36.2001, -86.5186],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Ember',
    litter: 'Flair | Creed',
    place: 'Hiawatha, IA',
    position: [42.04890670516113, -91.68524911996987],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Fudge',
    litter: 'Flair | Creed',
    place: 'Shorewood, IL',
    position: [41.519702136382215, -88.20384055478912],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Coal',
    litter: 'Flair | Creed',
    place: 'Wingo, KY',
    position: [36.641757532661586, -88.73799890672244],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Ice Cream',
    litter: 'Flair | Creed',
    place: 'Kirkland, IL',
    position: [42.09233971783899, -88.85056626166079],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Chocolate Chip',
    litter: 'Luna | Meeko',
    place: 'Springfield, MO',
    position: [37.2060854047707, -93.302633282705],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Kit Kat',
    litter: 'Luna | Meeko',
    place: 'St Charles, MO',
    position: [38.78221417863532, -90.4879846540589],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Heath',
    litter: 'Luna | Meeko',
    place: 'Henrico, VA',
    position: [37.63153366102175, -77.54067570418408],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Rolo',
    litter: 'Luna | Meeko',
    place: 'Aviston, IL',
    position: [38.60662837769518, -89.60752148446558],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Almond Joy',
    litter: 'Luna | Meeko',
    place: 'Colorado Springs, CO',
    position: [38.8363889906631, -104.81958811766953],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Reese',
    litter: 'Luna | Meeko',
    place: 'Henderson, KY',
    position: [37.83839637662548, -87.58784192619311],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Baby Ruth',
    litter: 'Luna | Meeko',
    place: 'Bolingbrook, IL',
    position: [41.69685417075409, -88.07522967370676],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Sugar',
    litter: 'Liberty | Twiggy',
    place: 'Brooklyn, NY',
    position: [40.67681061412533, -73.94944983597141],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Buttercup',
    litter: 'Liberty | Twiggy',
    place: 'Boonville, IN',
    position: [38.04824959668053, -87.27665326251399],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Iris',
    litter: 'Holly | Bullet',
    place: 'Belle Rive, IL',
    position: [38.23265418638047, -88.7402465050132],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Peony',
    litter: 'Holly | Bullet',
    place: 'Evansville, IN',
    position: [37.9690323581042, -87.564583377317],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Rose',
    litter: 'Holly | Bullet',
    place: 'Chicago, IL',
    position: [41.874422844689995, -87.63819738456263],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Lavender',
    litter: 'Holly | Bullet',
    place: 'Tennyson, IN',
    position: [38.0821235178992, -87.11820697778015],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Cosmo',
    litter: 'Holly | Bullet',
    place: 'Vincennes, IN',
    position: [38.67677774365427, -87.52903067330702],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Liberty',
    litter: '',
    place: 'Chattanooga, TN',
    position: [35.04253588855909, -85.3183457207051],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Holly',
    litter: '',
    place: 'O`Fallon, IL',
    position: [38.59114890862259, -89.91064197150466],
    icon: '',
  }
]

const getMarkersByType = (type: string) => {
  return markers.filter((marker) => marker.type === type)
}

const useLeafletMarkers = () => {
  return {
    getMarkersByType,
  }
}

export default useLeafletMarkers