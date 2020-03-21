import * as React from 'react'
import { NdviDataQuery } from '../../generated/graphql'
import moment from 'moment'
import * as V from 'victory'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import {
  
  ContentWrapper,
  
} from "../../Styles"

interface Props {
  data: NdviDataQuery;
}



const NdviData: React.FC<Props> = ({ data }) => {
  console.log(data)
  const result = data.ndvi
  const date = data?.ndvi!.map(date => new Date(date?.dt!*1000).toLocaleDateString())
  console.log(date)
  return (
    <ContentWrapper>
      <ResponsiveContainer width={900} height={400}>
        <LineChart data={result as any}>
          <Line type="monotone" dataKey="data.max" stroke="#8884d8"/>
          <Line type="monotone" dataKey="data.mean" stroke="#82ca9d" />
          <Line type="monotone" dataKey="data.min" stroke="#8884e1"/>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
          <Tooltip />
          <Legend/>
          <XAxis dataKey="dt" domain={['auto', 'auto']} tickFormatter={unixTime => moment(unixTime*1000).format('MMM DD YYYY')}/>
          <YAxis/>
        </LineChart>
      </ResponsiveContainer>
    </ContentWrapper>
  )
}

export default NdviData