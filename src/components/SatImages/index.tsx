import * as React from 'react'
import { useSatImagesQuery } from '../../generated/graphql'
import SatImages from './SatImages'
import { LoadContainer } from '../../Styles'
import Spinner from '../../Spinner'

const SatImagesContainer = () => {
  const { data, error, loading } = useSatImagesQuery();

  if (loading) {
    return <LoadContainer><Spinner/></LoadContainer>
  }

  if (error || !data) {
    return <LoadContainer>Error!!</LoadContainer>
  }

  return <SatImages data={data}/>;
}

export default SatImagesContainer