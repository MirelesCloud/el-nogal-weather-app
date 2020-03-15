import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather'
import SatImages from './components/SatImages'

function App() {
  return (
    <div className="App">
      <CurrentWeather/>
      <SatImages/>
    </div>
  );
}

export default App;
