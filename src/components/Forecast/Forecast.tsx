import * as React from 'react'
import { ForecastDataQuery } from '../../generated/graphql'
import {
  
  ContentWrapper,
  Card,
  CardBody,
  CardText,
  ContainerList,
  ListItem,
  
} from "../../Styles"

interface Props {
  data: ForecastDataQuery;
}

const Forecast: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <ContentWrapper>
      {!!data.forecast &&
          data.forecast.map((day) => 
          !!day && (
            <Card key={day.dt!}>
              <CardBody>
                <CardText>
                  <ContainerList>
                    <ListItem>{new Date(day.dt!* 1000).toLocaleTimeString([], {weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'})}</ListItem>
                    <ListItem><img src={`http://openweathermap.org/img/wn/${day.weather?.icon}@2x.png`}/></ListItem>
                    <ListItem>Temp: {((((day.main?.temp!) - 273.15) * 9/5) + 32).toFixed(0)} F</ListItem>
                    <ListItem>Condition: {day.weather?.description}</ListItem>
                    <ListItem>Wind: {((day.wind?.speed!) * 2.237).toFixed(0)} Mph</ListItem>
                    <ListItem>Clouds: {day.clouds?.all!} %</ListItem>
                    
                  </ContainerList>
                </CardText>
              </CardBody>
            </Card>
          )
          )}
    </ContentWrapper>
  )
}

export default Forecast