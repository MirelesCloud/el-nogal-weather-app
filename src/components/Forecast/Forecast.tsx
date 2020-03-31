import * as React from 'react'
import { ForecastDataQuery } from '../../generated/graphql'
import {
  ContentWrapper,
  PageHeader,
  PageTitle,
  SingleColumn,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  TableImage
  
} from "../../Styles"

interface Props {
  data: ForecastDataQuery;
}

const Forecast: React.FC<Props> = ({ data }) => {
  
  return (
    <ContentWrapper>
      <PageHeader>
        <PageTitle>Forecast</PageTitle>
      </PageHeader>
       <SingleColumn>
       {!!data.forecast &&
        data.forecast.map((day) => 
        !!day && (
          <Table key={day.dt!}>
            <TableBody>
            <TableRow>
              <TableHeader>{new Date(day.dt!* 1000).toLocaleDateString([], {weekday: 'short'})}</TableHeader>
              <TableHeader>{new Date(day.dt!* 1000).toLocaleDateString([], {month: 'short', day: '2-digit'})}</TableHeader>
              <TableHeader></TableHeader>
              <TableHeader></TableHeader>
              <TableHeader></TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
            <TableRow>
              <TableCell><TableImage src={`http://openweathermap.org/img/wn/${day.weather?.icon}@2x.png`} alt={day.weather?.main!}/></TableCell>
              <TableCell>{((((day.main?.temp!) - 273.15) * 9/5) + 32).toFixed(0)} F</TableCell>
              <TableCell>{day.weather?.description}</TableCell>
              <TableCell>Wind: {((day.wind?.speed!) * 2.237).toFixed(0)} Mph</TableCell>
              <TableCell>Clouds: {day.clouds?.all!} %</TableCell>
              <TableCell>{new Date(day.dt!* 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</TableCell>
            </TableRow>
            </TableBody>
          </Table>
        )
        )
       }
      </SingleColumn>
    </ContentWrapper>
  )
}

export default Forecast