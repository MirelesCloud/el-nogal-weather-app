import React from 'react'
import { Map, TileLayer, LayerGroup, Polygon, ImageOverlay } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'

const defaultLatLng: LatLngTuple = [36.375999, -119.646236]
const zoom: number = 16
const polygon: Array<number>[] = [
  [36.372017, -119.648216],
  [36.378081, -119.648216],
  [36.378141, -119.647111],
  [36.379126, -119.646993],
  [36.379118, -119.644654],
  [36.378694, -119.644557],
  [36.378651, -119.643881],
  [36.373805, -119.643892],
  [36.373779, -119.646081],
  [36.372034, -119.646091]
]

interface Props {
  image?: string
}

const LeafletMap: React.FC<Props> = ({ image }) => {

  return (
    <Map
      style={{height: "75vh", width: "100vw"}}
      center={defaultLatLng}
      zoom={zoom}
    >
      <LayerGroup>
        <ImageOverlay
          bounds={polygon as any}
          url={image as any}
        />
      </LayerGroup>
      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>
      <Polygon color="blue" positions={polygon as any}/>

    </Map>
  )
}

export default LeafletMap
