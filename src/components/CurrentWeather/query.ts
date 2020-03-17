import gql from 'graphql-tag'

export const QUERY_CURRENT_WEATHER = gql`
  query CurrentWeather {
    weather {
      dt
      weather {
        id
        main
        description
      }
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
    soil {
      d10
      moisture
      t0
    }
    uvi {
      uvi
    }

  }
`