import * as React from 'react'
import { NdviDataQuery } from '../../generated/graphql'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
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
        <Line type="monotone" dataKey="data.median" stroke="#8884d8"/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
        <XAxis dataKey="dt"/>
        <YAxis/>
      </LineChart>
    </ContentWrapper>
  )
}

export default NdviData