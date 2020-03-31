import gql from 'graphql-tag'

export const QUERY_NDVI_DATA = gql`
  query NdviData {
    ndvi {
      dt 
      source
      zoom
      dc
      cl
      data {
        p75
        min
        max
        median
        p25
        num
        mean
      }
    }
   
  }
`