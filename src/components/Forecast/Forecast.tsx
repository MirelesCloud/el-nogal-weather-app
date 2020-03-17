import * as React from 'react'
import { ForecastDataQuery } from '../../generated/graphql'
import {
  
  ContentWrapper,
  Card,
  CardBody,
  CardText,
  
} from "../../Styles"

interface Props {
  data: ForecastDataQuery;
}

const Forecast: React.FC<Props> = ({ data }) => {
  console.log(data.forecast)
  return (
    <ContentWrapper>
      {!!data.forecast &&
          data.forecast.map((day) => 
          !!day && (
            <Card key={day.dt!}>
              <CardBody>
                <CardText>{new Date(day.dt!* 1000).toLocaleTimeString([], {weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</CardText>
                <CardText>Temp: {((((day.main?.temp!) - 273.15) * 9/5) + 32).toFixed(0)} F</CardText>
                <CardText>Wind: {((day.wind?.speed!) * 2.237).toFixed(0)} Mph</CardText>
                <CardText>Clouds: {day.clouds?.all!} %</CardText>
              </CardBody>
            </Card>
          )
          )}

    </ContentWrapper>
  )
}

export default Forecast