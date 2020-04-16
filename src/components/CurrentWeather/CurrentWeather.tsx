import * as React from 'react'
import { CurrentWeatherQuery } from '../../generated/graphql'
import {
  ContentWrapper,
  ContainerDetails,
  ContainerLeft,
  ContainerRight,
  ContainerImage,
  ContainerHeader,
  ContainerList,
  ListItem,

} from "../../Styles"

const feature = require('./IMG_2169.png')

interface Props {
  data: CurrentWeatherQuery;                       
}

const CurrentWeather: React.FC<Props> = ({ data }) => {
  console.log(data)

  let current = (((data.weather?.main?.temp!) - 273.15) * (9/5) + 32).toFixed(0);
  let high = (((data.weather?.main?.temp_max!) - 273.15) * (9/5) + 32).toFixed(0);
  let low = (((data.weather?.main?.temp_min!) - 273.15) * (9/5) + 32).toFixed(0);
  let windSpeed = (data.weather?.wind?.speed! * 2.237).toFixed(0);
  let pressure = (data.weather?.main?.pressure!/1000).toFixed(2);
  //let moisture = (data.soil?.moisture!).toFixed(2)
  //let surfaceTemp = (((data.soil?.t0!) - 273.15) * (9/5) + 32).toFixed(0);
  let icon = `http://openweathermap.org/img/wn/${data.weather?.weather?.icon}@2x.png`

 
  return (
  <>
  <ContentWrapper>
        <ContainerDetails>
          <ContainerLeft>
            <ContainerImage src={feature} />
          </ContainerLeft>
          <ContainerRight>
            <ContainerHeader>
              {new Date(data.weather?.dt!* 1000).toLocaleTimeString([], {weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'})}
            </ContainerHeader>
              <ContainerList>
                <ListItem> <img src={icon} style={{width: "50px"}} alt="icon"/></ListItem>
                <ListItem>  <strong>Current Temperature: </strong>{current}{" "}F</ListItem>
                <ListItem> <strong>High: </strong>{high}{" "}F</ListItem>
                <ListItem> <strong>Low: </strong>{low}{" "}F</ListItem>
                <ListItem> <strong>Condition: </strong>{data.weather?.weather?.description}</ListItem>
                <hr/>
                <ListItem> <strong>Pressure: </strong>{pressure}{" "}Bar</ListItem>
                <ListItem> <strong>Humidity: </strong>{data.weather?.main?.humidity} {" "}%</ListItem>
                <ListItem>  <strong>Wind Speed: </strong>{windSpeed}{" "}Mph</ListItem>
                <ListItem><strong>Clouds: </strong>{data.weather?.clouds?.all!}{" "}%</ListItem>
                {/* <ListItem> <strong>Soil Moisture: </strong>{moisture}{" "}m3/m3</ListItem>
                <ListItem><strong>Surface Temperature: </strong>{surfaceTemp}{" "}F</ListItem> */}
                <ListItem><strong>UV Index: </strong>{data.uvi?.uvi!}</ListItem>
              </ContainerList>
          </ContainerRight>
        </ContainerDetails>
    </ContentWrapper>
  </>
  )
}

export default CurrentWeather