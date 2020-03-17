import * as React from 'react'
import { useState, useMemo } from 'react'
import { SatImagesQuery } from '../../generated/graphql'
import {
  
  ContentWrapper,
  Card,
  
} from "../../Styles"

const API_KEY = process.env.REACT_APP_AGRO_API_KEY

interface Props {
  data: SatImagesQuery;
}

const SatImages: React.FC<Props> = ({ data }) => {
  const [image, setImage] = useState("")
  let result = [] as any
  result = data.images?.map((image) => (image?.image?.ndvi as any).split('http://api.agromonitoring.com/image/1.0/').pop().replace('?appid=7ec34029dcc8c6b56df9631773cbe5c7', ''))
  const url = result?.pop()
  useMemo(() => {
      setImage(`http://api.agromonitoring.com/image/1.0/${url}?appid=${API_KEY}&paletteid=4`)
      return image
  }, [image])

  console.log(image)

  return (
    <ContentWrapper>
      <Card>
        <img src={image} style={{width: "100%", height: "auto"}}/>
      </Card>
    </ContentWrapper>
  )
}

export default SatImages