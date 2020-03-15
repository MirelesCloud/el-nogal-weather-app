import * as React from 'react'
import { NdviDataQuery } from '../../generated/graphql'
import {
  
  ContentWrapper,
  
} from "../../Styles"

interface Props {
  data: NdviDataQuery;
}



const NdviData: React.FC<Props> = ({ data }) => {
  return (
    <ContentWrapper>

    </ContentWrapper>

  )
}

export default NdviData