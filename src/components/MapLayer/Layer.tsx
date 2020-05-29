import * as React from 'react'
import { useState, useEffect } from 'react'
import { MapImageQuery  } from '../../generated/graphql'
import { Map, TileLayer, LayerGroup, Polygon, ImageOverlay } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import { 
  ContentWrapper,
  
  } from '../../Styles'

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
  data: MapImageQuery;
}
const Layer: React.FC<Props> = ( { data } ) => {
 
  const token = (data?.mapImage as any)[0].token
  const mapid = (data?.mapImage as any)[0].mapid
  const url = [`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {mapid}].join(`/?token=${token}`)

 

  return (
   <Map
    style={{ height: "50vh", width: "50vh" }}
    center={defaultLatLng}
    zoom={zoom}
   >
     <LayerGroup>
      <ImageOverlay
        bounds={polygon as any}
        url={url}
      />
    </LayerGroup>
     <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>
   </Map>
  )
}

export default Layer