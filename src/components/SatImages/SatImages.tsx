import * as React from 'react'
import { useState, useMemo } from 'react'
import { SatImagesQuery } from '../../generated/graphql'
import {
  
  ContentWrapper,
  Card,
  CardBody,
  CardText,
  
} from "../../Styles"

const API_KEY = process.env.REACT_APP_AGRO_API_KEY

interface Props {
  data: SatImagesQuery;
}

const SatImages: React.FC<Props> = ({ data }) => {
  const [image, setImage] = useState("")
  const [imageId, setImageId] = useState("")
  const [url, setUrl] = useState("")
  
 
  console.log(data.images)
  
  /* useMemo(() => {
    let result = [] as any
    result = data.images?.map((image) => (image?.image?.ndvi as any).split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', ''))
    const url = result?.pop()
 
    
      setImage(`http://api.agromonitoring.com/image/1.0/${url}?appid=${API_KEY}&paletteid=4`)
      return image
  }, [])
  console.log(image) */
  console.log(url)
  useMemo(() => {
    //setImageId(url?.split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', ''))

    
    //const result = imageId?.split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', '')
    //result = (imageId as any).split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', '')
    setImage(`http://api.agromonitoring.com/image/1.0/${imageId}?appid=${API_KEY}&paletteid=4`)
    return image
  }, [])
  console.log(image)

  return (
    <ContentWrapper>
      {!!data.images &&
        data.images.map((img) => 
        !!image && (
          <Card key={img?.dt!}>
            <CardBody  onClick={() => setUrl(img?.image?.truecolor!)}>
              <CardText>
              {new Date(img?.dt!* 1000).toLocaleDateString([], {weekday: 'short', month: 'short', year: 'numeric'})}
              <div>{url}</div>
              </CardText>
            </CardBody>
          </Card>
        ))
      }
      
    </ContentWrapper>
  )
}

export default SatImages