import * as React from 'react'
import { useState, useEffect } from 'react'
import { MapDatesQuery, useMapImageQuery } from '../../generated/graphql'
import Layer from './Layer'
import Spinner from '../../Spinner'
import { 
  ContentWrapper,
  LoadContainer
  
  } from '../../Styles'


interface Props {
  dates: MapDatesQuery;
}

/* const GET_MAP = gql`
  query GetMap {
    map
  }
` */
const MapLayer: React.FC<Props> = ({ dates }) => {
  const { data, loading, error } = useMapImageQuery()

  const [option, setOption] = useState((dates.mapDates as any)[0].date!)
  /* const [getLayer]: any = useMutation(
    MAP_LAYER,
    {
      update(cache, {data: { getLayer } }) {
        const { map }: any = cache.readQuery({ query: QUERY_MAP_LAYERS })
        cache.writeQuery({
          query: QUERY_MAP_LAYERS,
          data: { map: map.concat([getLayer])}
        })
      }
    }
    ) */

    if (loading) {
      return <LoadContainer><Spinner/></LoadContainer>
    }
  
    if (error || !data) {
      return <LoadContainer>Error!!</LoadContainer>
    }

 
  return (
    <ContentWrapper>
       <select value={option} onChange={( e: React.ChangeEvent<HTMLSelectElement>): void => {
          setOption(e.target.value); 
          /* getLayer({ variables: { date: e.target.value } }) */
        }}>
        {dates.mapDates?.map(res => 
          <option key={res?.date!} value={res?.date!}>{res?.date}</option>
          )
        }
      </select>
      <Layer data={data as any}/>
      
      
    </ContentWrapper>
  )
}

export default MapLayer