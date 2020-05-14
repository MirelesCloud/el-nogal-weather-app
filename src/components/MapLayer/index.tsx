import * as React from 'react'
import { useMapDatesQuery } from '../../generated/graphql'
import MapLayer from './MapLayer'
import Spinner from '../../Spinner'
import { LoadContainer } from '../../Styles'

const IrriSatContainer = () => {
  const { data, error, loading } = useMapDatesQuery();
  if (loading) {
    return <LoadContainer><Spinner/></LoadContainer>
  }

  if (error || !data) {
    return <LoadContainer>Error!!</LoadContainer>
  }

  return <MapLayer data={data} />
}

export default IrriSatContainer