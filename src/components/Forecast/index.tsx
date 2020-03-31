import * as React from 'react'
import { useForecastDataQuery } from '../../generated/graphql'
import { LoadContainer } from '../../Styles'
import Spinner from '../../Spinner'
import Forecast from './Forecast'

const ForecastContainer = () => {
  const { data, error, loading } = useForecastDataQuery();
  if (loading) {
    return <LoadContainer><Spinner/></LoadContainer>
  }

  if (error || !data) {
    return <LoadContainer>Error!!</LoadContainer>
  }

  return <Forecast data={data}/>
}

export default ForecastContainer