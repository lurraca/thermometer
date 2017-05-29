import React, {Component} from 'react';
import './App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WeatherCard from '../components/WeatherCard';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="App-main">
          <WeatherCard/>
          <WeatherCard/>
          <WeatherCard/>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
