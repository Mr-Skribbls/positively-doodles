import { FC, ReactNode } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

interface MyMapProps {
  children: ReactNode
}

const MyMap:FC<MyMapProps> = ({ children }) => {
  return (
    <MapContainer
      style={{ height: "500px" }}
      center={[38.8283, -82.5795]}
      zoom={5.25}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  )
}

export default MyMap