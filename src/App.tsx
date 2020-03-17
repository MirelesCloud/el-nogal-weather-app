import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import SatImages from './components/SatImages'
import NdviData from './components/NDVIData'
import { MainContainer } from './Styles'

function App() {
  return (
    <MainContainer>
      <CurrentWeather/>
      <Forecast/>
      <SatImages/>
      <NdviData/>
    </MainContainer>
  );
}

export default App;
