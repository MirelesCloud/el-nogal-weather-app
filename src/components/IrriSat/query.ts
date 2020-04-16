import gql from 'graphql-tag'

export const QUERY_IRR_SAT = gql`
 query IrriSat {
   daily {
     date
     et0
     description
     icon
     precipitation
   }

   mapsDates {
     date
     dateurl
   }


 }
`