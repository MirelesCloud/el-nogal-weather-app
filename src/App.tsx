import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather'
import SatImages from './components/SatImages'
import NdviData from './components/NDVIData'

function App() {
  return (
    <div className="App">
      <CurrentWeather/>
      <SatImages/>
      <NdviData/>
    </div>
  );
}

export default App;
