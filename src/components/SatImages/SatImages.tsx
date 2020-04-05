import * as React from 'react'
import { useState, useEffect } from 'react'
import { SatImagesQuery } from '../../generated/graphql'
import { LayerContextProvider } from './LayerContext'
import LeafletMap from './LeafletMap'
import {
  ContentWrapper,
  Card,
  NdviImageContainer,
  CardBody,
  CardText,
  Line
  } from "../../Styles"

const API_KEY = process.env.REACT_APP_AGRO_API_KEY

interface Props {
  data: SatImagesQuery;
}

const SatImages: React.FC<Props> = ({ data }) => {
  const [image, setImage] = useState("")
  const [imageId, setImageId] = useState("")
  const [url, setUrl] = useState((data?.images as any)[0].image?.ndvi)
  const result = data?.images?.reverse()
  
  useEffect(() => {
    setImageId((url as any).split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', ''))
    setImage(`http://api.agromonitoring.com/image/1.0/${imageId}?appid=${API_KEY}&paletteid=4`)
  }, [image, imageId, url])
  return (
    <>
      <ContentWrapper>
        <NdviImageContainer>
          <LayerContextProvider>
            <LeafletMap image={image} />
          </LayerContextProvider>
        </NdviImageContainer>
      </ContentWrapper>
      <Line/>
      
      <ContentWrapper>
        {!!result &&
          result.map((img) => 
          !!image && (
            <Card key={img?.dt!}>
              <CardBody  onClick={() => setUrl(img?.image?.ndvi)}>
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



