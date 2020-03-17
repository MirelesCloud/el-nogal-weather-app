import * as React from 'react'
import { NdviDataQuery } from '../../generated/graphql'
import { LineChart, Line } from 'recharts';
import {
  
  ContentWrapper,
  
} from "../../Styles"

interface Props {
  data: NdviDataQuery;
}



const NdviData: React.FC<Props> = ({ data }) => {
  console.log(data)
  const result = data.ndvi
  return (
    <ContentWrapper>
      <LineChart width={400} height={400} data={result as any}>
        <Line type="monotone" dataKey="cl" stroke="#8884d8"/>
      </LineChart>
    </ContentWrapper>
  )
}

export default NdviData