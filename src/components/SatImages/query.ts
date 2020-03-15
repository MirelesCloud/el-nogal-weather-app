import gql from 'graphql-tag'

export const QUERY_IMAGES = gql`
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
     data {
      truecolor
       falsecolor
       ndvi
       evi
     }
   }
  }
`