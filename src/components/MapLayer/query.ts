import gql from 'graphql-tag'

export const QUERY_MAP_DATES = gql`
  query MapDates {
    mapDates {
     date
     dateurl
   }
  }
`

export const QUERY_MAP_IMAGE = gql`
  query MapImage {
    mapImage {
      token
      mapid
      name
    }
  }
`

/* export const QUERY_MAP_LAYERS = gql`
  query MapLayers($date: String!) {
    mapLayers(date: $date) {
      token
      mapid
      name
    }
  }
`


export const MAP_LAYER = gql`
  mutation MapLayer($date: String!) {
     mapDate(date: $date) {
       token
       mapid
       name
     }
   }
` */