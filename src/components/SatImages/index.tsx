import * as React from 'react'
import { useSatImagesQuery } from '../../generated/graphql'
import SatImages from './SatImages'

const SatImagesContainer = () => {
  const { data, error, loading } = useSatImagesQuery();

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error!!</div>
  }

  return <SatImages data={data}/>;
}

export default SatImagesContainer