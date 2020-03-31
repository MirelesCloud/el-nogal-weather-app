import * as React from 'react'
import { useCurrentWeatherQuery } from '../../generated/graphql'
import CurrentWeather from './CurrentWeather'
import Spinner from '../../Spinner'
import { LoadContainer } from '../../Styles'

const CurrentWeatherContainer = () => {
  const { data, error, loading } = useCurrentWeatherQuery();

  if (loading) {
    return <LoadContainer><Spinner/></LoadContainer>
  }

  if (error || !data) {
    return <LoadContainer>Error!!</LoadContainer>
  }

  return <CurrentWeather data={data}/>;
}

export default CurrentWeatherContainer