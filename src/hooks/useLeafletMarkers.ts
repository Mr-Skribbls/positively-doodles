import { LatLngExpression } from "leaflet"

interface MyMapMarker {
  type: string
  position: LatLngExpression
  icon: string
}

const markers:MyMapMarker[] = [
  {
    type: "customer",
    position: [ 38.3981, -85.7550 ],
    icon: "",
  }, {
    type: "customer",
    position: [ 40.7404, -75.3096 ],
    icon: "",
  }, {
    type: "customer",
    position: [ 36.8354, -76.2983 ],
    icon: "",
  }, {
    type: "customer",
    position: [ 35.9251, -86.8689 ],
    icon: "",
  }, {
    type: "customer",
    position: [ 37.7645, -89.3351 ],
    icon: "",
  }, {
    type: "customer",
    position: [ 37.8884, -89.4948 ],
    icon: "",
  }, {
    type: "customer",
    position: [ 36.5298, -87.3595 ],
    icon: "",
  },
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