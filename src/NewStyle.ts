import styled from '@emotion/styled'

export const MasterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media(min-width: 1140px) {
    width: 1120px;
    margin: 16px auto;
    font-size: 1.1rem;
  }
`

export const Today = styled.div`
  width: 100%;

`

export const TodayHeader = styled.h1`
  margin: 0;
  font-size: 2em;
  font-weight: 600
`



export const CurrentTemperature = styled.div`
  width: 100%;
  
  @media(min-width: 768px) {
    width: 50%;
  }
`

export const CurrentTemperatureContent = styled.div`
  flex-grow: 1;
  text-align: center;
`

export const CurrentTemperatureIconContainer = styled.div`
  flex-grow: 1.25;
  text-align: center;
`
export const CurrentTemperatureIcon = styled.div`
 width: 10.5em;
`

export const CurrentTemperatureValue = styled.div`
  font-size: 5.25em;
`

export const CurrentTemperatureSummary = styled.div`
  margin-top: -0.5em;
  margin-left: -0.6em;
  font-size: 1.125em;
`
export const CurrentStats = styled.div`
  width: 100%;
  

  @media(min-width: 768px) {
    width: 50%;
  }
`

export const CurrentStatsValue = styled.div`
  margin-top: 1em;
  font-size: 1.44em;
`

export const CurrentStatsLabel = styled.div`
  color: rgba(255,255,255,0.6);
`
export const HourlyWeather = styled.div`
  display: none;
  width: 100%;
  

  @media(min-width: 768px) {
    display: block;
  }
`

export const HourlyWeatherContainer = styled.div`
  display: flex;
  justify-content: space-between,
  flex-wrap: wrap;
  
`

export const HourlyWeatherHeader = styled.h2`
  color: rgba(255,255,255,0.8);
  font-size: 1em;
  font-weight: normal;

  @media(min-width: 768px) {
    font-size: 1.125em;
  }
`

export const HourlyWeatherItem = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(25% -5px);
  margin: 5px;
  
  
  border-radius: 5px;
  background-color: rgba(0,0,0,0.15);
  font-size: 1em;
  text-align: center;
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

  @media(min-width: 880px) {
    width: 6.05em;
  }

  @media (max-width: 992px) {
    flex-basis: calc( 15% - 20px);
  }

  @media (max-width: 600px) {
    flex-basis: calc(25% - 20px)
  }


`

export const HourlyWeatherHour = styled.div`
  margin-bottom: 0.5em;
`

export const Next5Days = styled.div`
  witdth: 100%;
  border: 3px solid yellow;
`