import gql from 'graphql-tag'

export const QUERY_SAT_IMAGES = gql`
  query SatImages {
    images {
      dt 
      type
      dc
      cl
      sun {
        azimuth
        elevation
      }
      image {
        truecolor
        falsecolor
        ndvi
        evi
      }
      tile {
        truecolor
        falsecolor
        ndvi
        evi
      }
      stats {
        ndvi
        evi
      }
      data {
        truecolor
        falsecolor
        ndvi
        evi
      }
    }
  }
`