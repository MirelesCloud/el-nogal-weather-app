import * as React from 'react'
import { NdviDataQuery } from '../../generated/graphql'
import moment from 'moment'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import {
  ContentWrapper,
  SingleColumn
} from "../../Styles"

interface Props {
  data: NdviDataQuery;
}

const NdviData: React.FC<Props> = ({ data }) => {

  return (
    <>
      <ContentWrapper style={{ height: "300px", width: "auto"}}>
        <h3>NDVI History</h3>
        <ResponsiveContainer>
        <LineChart data={data.ndvi as any}>
            <Line type="monotone" dataKey="data.max" stroke="#009933" name="max"/>
            <Line type="monotone" dataKey="data.mean" stroke="#0066ff" name="mean" />
            <Line type="monotone" dataKey="data.min" stroke="#ff6666" name="min"/>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
            <Tooltip formatter={(value: any) => value.toFixed(2)} labelFormatter={(name: any) => new Date(name * 1000).toLocaleDateString()}/>
            <Legend/>
            <XAxis dataKey="dt" domain={['auto', 'auto']} tickFormatter={unixTime => moment(unixTime*1000).format('MMM DD YYYY')}/>
            <YAxis label={{ value: "Index", angle: -90, position: 'insideLeft'}}/>
          </LineChart>
        </ResponsiveContainer>
      </ContentWrapper>
      <ContentWrapper>
        <SingleColumn>
            NDVI (Normalised Difference Vegetation Index), a common remote sensing measurement, 
            describing the difference between visible and near-infrared reflectance of vegetation cover. 
            The NDVI values range from -1 to 1. Zero and below correspond to non-plant surfaces, 
            thus focusing us solely at values 0-1, which correspond to vegetation areas. The higher the NDVI value the greater plants density and health.
        </SingleColumn>
      </ContentWrapper>
    </>
    
  )
}


export default NdviData