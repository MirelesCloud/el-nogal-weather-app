import * as React from 'react'
import { useNdviDataQuery } from '../../generated/graphql'
import NdviData from './NDVIData'
import { LoadContainer } from '../../Styles'
import Spinner from '../../Spinner'

const NdviDataContainer = () => {
  const { data, error, loading } = useNdviDataQuery();

  if (loading) {
    return <LoadContainer><Spinner/></LoadContainer>
  }

  if (error || !data) {
    return <LoadContainer>Error!!</LoadContainer>
  }
  return <NdviData data={data}/>;
}

export default NdviDataContainer