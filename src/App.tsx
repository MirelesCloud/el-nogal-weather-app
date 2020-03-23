import React, { Fragment } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import SatImages from './components/SatImages'
import NdviData from './components/NDVIData'
import Header from './Header'
import { MainContainer } from './Styles'

function App() {
  return (
    <Fragment>
      <Header/>
      <MainContainer>
        <CurrentWeather/>
        <Forecast/>
        <SatImages/>
        <NdviData/>
      </MainContainer>
    </Fragment>
    
  );
}

export default App;
