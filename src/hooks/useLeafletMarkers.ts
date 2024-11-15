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
}

const markers:MyMapMarker[]|CustomerMarker[] = [
  {
    type: 'customer',
    place: 'Geff, IL',
    dog: 'Tiny Tim',
    position: [38.4426, -88.4036],
    icon: '',
  }, {
    type: 'customer',
    place: 'Sellersburg, IN',
    dog: 'Gloria',
    position: [ 38.3981, -85.7550 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Maple',
    place: 'Nazareth, PA',
    position: [ 40.7404, -75.3096 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Buddy and Darla',
    place: 'Portsmouth, VA',
    position: [ 36.8354, -76.2983 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Jingle',
    place: 'Murphysboro, IL',
    position: [ 37.7645, -89.3351 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Licorice',
    place: 'Ava, IL',
    position: [ 37.8884, -89.4948 ],
    icon: '',
  }, {
    type: 'customer',
    place: 'Clarksville, TN',
    dog: 'Cherry',
    position: [ 36.5298, -87.3595 ],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Cedar',
    place: 'Bloomington, IL',
    position: [40.4842, -88.9937],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Oak',
    place: 'Joliet, IL',
    position: [41.5250, -88.0817],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Aspen',
    place: 'Fenton, MO',
    position: [38.5126, -90.4430],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Hazel',
    place: 'St. Louis, MO',
    position: [38.6270, -90.1994],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Ivy',
    place: 'Decatur, IL',
    position: [39.8403, -88.9548],
    icon: '',
  }, {
    type: 'customer',
    dog: 'Spruce',
    place: 'Cisne, IL',
    position: [38.5159, -88.4375],
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