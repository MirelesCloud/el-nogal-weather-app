import gql from 'graphql-tag'

export const QUERY_MAP_DATES = gql`
  query MapDates {
    mapDates {
     date
     dateurl
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
`