import * as React from 'react'
import { useNdviDataQuery } from '../../generated/graphql'
import NdviData from './NDVIData'

const NdviDataContainer = () => {
  const { data, error, loading } = useNdviDataQuery();

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error!!</div>
  }

  return <NdviData data={data}/>;
}

export default NdviDataContainer