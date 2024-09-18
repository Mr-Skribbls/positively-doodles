import { FC, ReactNode } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

interface MyMapProps {
  children: ReactNode
}

const MyMap:FC<MyMapProps> = ({ children }) => {
  return (
    <MapContainer
      style={{ height: "500px" }}
      center={[39.8283, -98.5795]}
      zoom={4}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  )
}

export default MyMap