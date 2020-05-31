import gql from 'graphql-tag'

export const QUERY_CURRENT_WEATHER = gql`
  query CurrentWeather {
    weather {
      dt
      weather {
        id
        main
        description
        icon
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
    uvi {
      uvi
    }
    soil {
      dt 
      d10
      moisture
      t0
    }
    forecast {
      dt 
      weather {
        id
        main
        description
        icon
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