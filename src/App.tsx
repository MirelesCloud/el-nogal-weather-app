import React, { Fragment } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import SatImages from './components/SatImages'
import NdviData from './components/NDVIData'
import IrriSat from './components/IrriSat'
import MapLayer from './components/MapLayer'
import { MainContainer, NavMenu, MenuButton, StyledLink, PageContainer, InfoContainer } from './Styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Fragment>
      <PageContainer>
      <MainContainer>
        <InfoContainer>
        <Router>
          <NavMenu>
            <MenuButton>
              <StyledLink to="/">Home</StyledLink>
            </MenuButton>
            <MenuButton>
              <StyledLink to="/forecast">Weather Forecast</StyledLink>
            </MenuButton>
            <MenuButton>
              <StyledLink to="/ndvi">NDVI</StyledLink>
            </MenuButton>
            <MenuButton>
              <StyledLink to="/images">Images</StyledLink>
            </MenuButton>
            <MenuButton>
              <StyledLink to="/et0">EvapoTranspiration</StyledLink>
            </MenuButton>
            <MenuButton>
              <StyledLink to="/map">Maps</StyledLink>
            </MenuButton>
          </NavMenu>
          <Switch >
            <Route exact path="/">
              <CurrentWeather/>
            </Route>
            <Route path="/forecast">
              <Forecast/>
            </Route>
            <Route path="/ndvi">
              <NdviData/>
            </Route>
            <Route path="/images">
              <SatImages/>
            </Route>
            <Route path="/et0">
              <IrriSat/>
            </Route>
            <Route path="/map">
              <MapLayer/>
            </Route>
          </Switch>
        </Router>

        </InfoContainer>
       
      </MainContainer>
      </PageContainer>    
     
    </Fragment>
  );
}

export default App;

