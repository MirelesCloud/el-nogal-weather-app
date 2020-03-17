import * as React from 'react'
import { useForecastDataQuery } from '../../generated/graphql'
import Forecast from './Forecast'

const ForecastContainer = () => {
  const { data, error, loading } = useForecastDataQuery();
  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>Error Forecast</div>
  }

  return <Forecast data={data}/>
}

export default ForecastContainer