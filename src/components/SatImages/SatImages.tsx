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
console.log(process.env.REACT_APP_AGRO_API_KEY)

interface Props {
  data: SatImagesQuery;
  
}

const SatImages: React.FC<Props> = ({ data }) => {
  
  /*shallow copy of data before reversing it*/
  const cloneData = [...data?.images as any]

  const [result, setResult] = useState(cloneData.reverse())
  const [option, setOption] = useState((result as any)[0].image?.ndvi)

  const [url, setUrl] = useState((result as any)[0].image?.ndvi)
  const [imageId, setImageId] = useState(url.split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', ''))
  const [image, setImage] = useState(`http://api.agromonitoring.com/image/1.0/${imageId}?appid=${API_KEY}&paletteid=4`)
  //const [imageType, setImageType] = useState((result as any)[0]?.image?.ndvi)
  
  useEffect(() => {
    setImageId((url as any).split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', ''))
    setImage(`http://api.agromonitoring.com/image/1.0/${imageId}?appid=${API_KEY}&paletteid=4`)
  }, [image, imageId, url])
  console.log(image)

  



  return (
    <>
      <ContentWrapper>
        <select value={option} onChange={( e: React.ChangeEvent<HTMLSelectElement>): void => { 
          setOption(e.target.value)
        }} >
         {!!result &&
          result.map((img, idx) => (
            <option key={idx} value={img?.dt} >
              { new Date(img?.dt!* 1000).toLocaleDateString([], {day: 'numeric', month: 'short', year: 'numeric'}) }
            </option>
          ))

         }
          

        </select>
      </ContentWrapper>
      <ContentWrapper>
        <NdviImageContainer>
         {/*   <select value={imageType}>
            <option value={(result as any)[0].image?.ndvi}>NDVI</option>
            <option value={(result as any)[0].image?.evi}>EVI</option>
            <option value="C">Truecolor</option>
            <option value="D">Falsecolor</option>
           </select> */}
          <LayerContextProvider>
            <LeafletMap image={image} />
          </LayerContextProvider>
        </NdviImageContainer>
      </ContentWrapper>
      <Line/>
      <ContentWrapper>
        {!!result &&
          result.map((img, idx) => (
            <Card key={idx}>
              <CardBody  onClick={() => setUrl(img?.image?.ndvi)}>
                <CardText>
                  { new Date(img?.dt!* 1000).toLocaleDateString([], {day: 'numeric', month: 'short', year: 'numeric'}) }
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



