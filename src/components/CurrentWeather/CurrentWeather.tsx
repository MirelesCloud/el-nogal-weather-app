import * as React from 'react'
import { CurrentWeatherQuery } from '../../generated/graphql'
import {
  MainContainer,
  ContainerDetails,
  ContainerLeft,
  ContainerRight,
  ContainerHeader,
  ContainerText
} from "../../Styles"


interface Props {
  data: CurrentWeatherQuery;                       
}

const CurrentWeather: React.FC<Props> = ({ data }) => {
  console.log(data)

  let time = new Date(data.weather?.dt!*1000)
  let current = (((data.weather?.main?.temp!) - 273.15) * (9/5) + 32).toFixed(0);
  let high = (((data.weather?.main?.temp_max!) - 273.15) * (9/5) + 32).toFixed(0);
  let low = (((data.weather?.main?.temp_min!) - 273.15) * (9/5) + 32).toFixed(0);
  let windSpeed = (data.weather?.wind?.speed! * 2.237).toFixed(0);
  let pressure = (data.weather?.main?.pressure!/1000).toFixed(2);
  let moisture = (data.soil?.moisture!).toFixed(2)
  let surfaceTemp = (((data.soil?.t0!) - 273.15) * (9/5) + 32).toFixed(0);

  return (
    <MainContainer>
      <ContainerDetails>
        <ContainerLeft>
        <h1>Current Conditions</h1>


        </ContainerLeft>
        <ContainerRight>
          <ContainerText>
         
          </ContainerText>
          <ContainerText>
            <strong>Current Temperature: </strong>{current}{" "}F
          </ContainerText>
          <ContainerText>
           <strong>High: </strong>{high}{" "}F
          </ContainerText>
          <ContainerText>
           <strong>Low: </strong>{low}{" "}F
          </ContainerText>
          <ContainerText>
           <strong>Pressure: </strong>{pressure}{" "}Bar
          </ContainerText>
          <ContainerText>
           <strong>Humidity: </strong>{data.weather?.main?.humidity} {" "}%
          </ContainerText>
          <ContainerText>
           <strong>Wind Speed: </strong>{windSpeed}{" "}Mph
          </ContainerText>
          <ContainerText>
           <strong>Clouds: </strong>{data.weather?.clouds?.all!}{" "}%
          </ContainerText>
          <ContainerText>
             <strong>Soil Moisture: </strong>{moisture}{" "}m3/m3
          </ContainerText>
          <ContainerText>
             <strong>Surface Temperature: </strong>{surfaceTemp}{" "}F
          </ContainerText>
          <ContainerText>
             <strong>UV Index: </strong>{data.uvi?.uvi!}
          </ContainerText>

        </ContainerRight>
      </ContainerDetails>
     
    </MainContainer>
  )
}

export default CurrentWeather