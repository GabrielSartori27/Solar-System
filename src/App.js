import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    const text = 'Texto';
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline={ text } />
      </div>
    );
  }
}

export default App;
