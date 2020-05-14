import * as React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { MapDatesQuery } from '../../generated/graphql'
import { 
  ContentWrapper,
  
} from '../../Styles'
import { MAP_LAYER } from './query'
import gql from 'graphql-tag'


interface Props {
  data: MapDatesQuery;
}

const GET_MAP = gql`
  query GetMap {
    map
  }
`
const MapLayer: React.FC<Props> = ({ data }) => {
  console.log(data)
  const [option, setOption] = useState((data?.mapDates as any)[0].date!)
  const [getLayer]: any = useMutation(
    MAP_LAYER,
    {
      update(cache, {data: { getLayer } }) {
        const { map }: any = cache.readQuery({ query: GET_MAP })
        cache.writeQuery({
          query: GET_MAP,
          data: { map: map.concat([getLayer])}
        })
      }
    }
    )

  return (
    <ContentWrapper>
       <select value={option} onChange={( e: React.ChangeEvent<HTMLSelectElement>): void => {
          setOption(e.target.value); 
          getLayer({ variables: { date: e.target.value } })
        }}>
        {data?.mapDates?.slice(0,52).map(res => 
          <option key={res?.date!} value={res?.date!}>{res?.date}</option>
          )
        }
      </select>
    </ContentWrapper>
  )
}

export default MapLayer