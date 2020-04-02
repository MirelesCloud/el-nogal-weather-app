import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import { SatImagesQuery } from '../../generated/graphql'
import { Map, Marker, Popup, TileLayer, LayerGroup, Polygon } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import {
  
  ContentWrapper,
  Card,
  NdviImageContainer,
  NdviImage,
  CardBody,
  CardText,
  Line
  
} from "../../Styles"
import { LayerContext, LayerContextProvider } from './LayerContext'

const API_KEY = process.env.REACT_APP_AGRO_API_KEY

interface Props {
  data: SatImagesQuery;
}

const SatImages: React.FC<Props> = ({ data }) => {
  const [image, setImage] = useState("")
  const [imageId, setImageId] = useState("")
  const [url, setUrl] = useState((data?.images as any)[0].image?.ndvi)
  
  useEffect(() => {
    setImageId((url as any).split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', ''))
    setImage(`http://api.agromonitoring.com/image/1.0/${imageId}?appid=${API_KEY}&paletteid=4`)
  }, [image, imageId, url])
  return (
    <>
      <ContentWrapper>
        <NdviImageContainer>
          <LayerContextProvider>
            <LeafletMap/>
          </LayerContextProvider>
          
         

        </NdviImageContainer>

      </ContentWrapper>
      <Line/>
      <ContentWrapper>
        {!!data.images &&
          data.images.map((img) => 
          !!image && (
            <Card key={img?.dt!}>
              <CardBody  onClick={() => setUrl(img?.image?.truecolor!)}>
                <CardText>
                {new Date(img?.dt!* 1000).toLocaleDateString([], {day: 'numeric', month: 'short', year: 'numeric'})}
                </CardText>
              </CardBody>
            </Card>
          ))
        }
       
        
      </ContentWrapper>
    
    </>
    
  )
}

export default SatImages


const defaultLatLng: LatLngTuple = [36.375999, -119.646236]
const zoom: number = 16

const LeafletMap: React.FC = () => {

  const { point } = useContext(LayerContext)
  return (
    <Map
      style={{height: "50vh", width: "100vw"}}
      center={defaultLatLng}
      zoom={zoom}
    >
      <LayerGroup>
        {point}

      </LayerGroup>
      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
      </TileLayer>

    </Map>
  )
}

