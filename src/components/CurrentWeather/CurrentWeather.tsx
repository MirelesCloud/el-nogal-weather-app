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
   
  const currentWeather: Array<any> = [
    {
      id: '',
      data: <img src={`http://openweathermap.org/img/wn/${data?.weather?.weather?.icon!}@2x.png`} alt='icon'/>
    },
    {
      id: 'Current',
      data: (Math.round((((data?.weather?.main?.temp!) - 273.15) * (9/5) + 32)* 1e0)/1e0) + ' F'
    },
    {
      id: 'High',
      data: Math.round((((data?.weather?.main?.temp_max!) - 273.15) * (9/5) + 32)* 1e0)/1e0 + ' F'
    },
    {
      id: 'Low',
      data:  Math.round((((data?.weather?.main?.temp_min!) - 273.15) * (9/5) + 32) * 1e0)/1e0 + ' F'
    },
    {
      id: 'Wind Speed',
      data: Math.round((data?.weather?.wind?.speed! * 2.237)* 1e0)/1e0 + ' Mph'
    },
    {
      id: 'Humidity',
      data: data?.weather?.main?.humidity! + ' %'
    },
    {
      id: 'Pressure',
      data: Math.round((data?.weather?.main?.pressure!/1000)* 1e2)/1e2 + ' hPa'
    },
    { 
      id: 'Clouds',
      data: data?.weather?.clouds?.all! + ' %'
    },
    {
      id: 'UV Index',
      data: data?.uvi?.uvi!
    }
  ]

  const currentSoil: Array<any> = [
    {
      id: 'Time',
      data: new Date((data?.soil?.dt!) * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    },
    {
      id: 'Moisture',
      data: Math.round((data?.soil?.moisture! * 27)) + ' Cu. FT/Cu. Yard'
    },
    {
      id: 'Surface Temp',
      data: Math.round((((data?.soil?.t0!) - 273.15) * (9/5) + 32)* 1e0)/1e0 + ' F'
    }

  ] 

  return (
    <>
      <ContentWrapper>
          <ContainerDetails>
              <ContainerLeft>
                <ContainerImage src={feature} />
              </ContainerLeft>
              <ContainerRight>
                <ContainerHeader>
                  {new Date(data?.weather?.dt!* 1000).toLocaleTimeString([], {weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'})}
                </ContainerHeader>
                  <ContainerList>
                    {!!currentWeather &&
                      currentWeather.map(data => (
                        <ListItem key={data.id}><strong>{data.id} </strong>{data.data}</ListItem>
                      ))
                    }
                  </ContainerList>
                  <hr/>
                  <ContainerHeader>Current Soil Condition</ContainerHeader>
                  <ContainerList>
                    {!!currentSoil && 
                      currentSoil.map(data => (
                        <ListItem key={data.id}><strong>{data.id}</strong> {data.data}</ListItem>
                      ))
                    }
                  </ContainerList>
              </ContainerRight>
            </ContainerDetails>
        </ContentWrapper>
    </>
  )
}

export default CurrentWeather