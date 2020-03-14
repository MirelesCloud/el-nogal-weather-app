import gql from 'graphql-tag'

export const QUERY_CURRENT_WEATHER = gql`
  query CurrentWeather {
    weather {
      dt
      main {
        temp 
        temp_min
        temp_max
        pressure
        humidity
      } 
      wind {
        speed
        deg
      }
      clouds {
        all
      }
    }
  }
`