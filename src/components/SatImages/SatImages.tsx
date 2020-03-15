import * as React from 'react'
import { useState, useMemo } from 'react'
import { SatImagesQuery } from '../../generated/graphql'
import {
  MainContainer,
  ContainerDetails,
  ContainerLeft,
  ContainerRight,
  ContainerHeader,
  ContainerText,
  ContentWrapper,
  Card,
  CardBody, 
  CardImage,
  CardText,
  CardFooter, 
} from "../../Styles"

const API_KEY = process.env.REACT_APP_AGRO_API_KEY

interface Props {
  data: SatImagesQuery;
}

const SatImages: React.FC<Props> = ({ data }) => {
  const [image, setImage] = useState()
  console.log(data)
  const result = data.images?.map(image => (image?.image?.ndvi as any).split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', ''))
  console.log(result)
  const url = result?.pop()
  useMemo(() => {
      setImage(`http://api.agromonitoring.com/image/1.0/${result}?appid=${API_KEY}&paletteid=4`)
      return image
  }, [image])

  console.log(image)

  return (
    <ContentWrapper>
      {!!data.images &&
          data.images.map((image, i) => 
          !!image && (
            <Card key={i}>
              
              
            </Card>
          )
          )}
          <Card>
            <img src={image} style={{width: "100%", height: "auto"}}/>
           
          </Card>

    </ContentWrapper>

  )
}

export default SatImages