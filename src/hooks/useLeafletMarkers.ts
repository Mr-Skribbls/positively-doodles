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