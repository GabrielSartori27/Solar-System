import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <PlanetCard planetName="Terra" planetImage="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2014/11/21/nasaplanetaterra01.jpg" />
      </div>
    );
  }
}

export default App;
