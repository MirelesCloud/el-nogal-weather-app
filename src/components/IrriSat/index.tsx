import * as React from 'react'
import { useIrriSatQuery } from '../../generated/graphql'
import IrriSat from './IrriSat'
import Spinner from '../../Spinner'
import { LoadContainer } from '../../Styles'

const IrriSatContainer = () => {
  const { data, error, loading } = useIrriSatQuery();

  if (loading) {
    return <LoadContainer><Spinner/></LoadContainer>
  }

  if (error || !data) {
    return <LoadContainer>Error!!</LoadContainer>
  }

  return <IrriSat data={data} />
}

export default IrriSatContainer