import gql from 'graphql-tag'

export const FORECAST_DATA = gql`
  query ForecastData {
    forecast {
      dt 
      weather {
        id
        main
        description
      }
      main {
        temp
        pressure
        humidity
        temp_min
        temp_max
        sea_level
        grnd_level
        temp_kf
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