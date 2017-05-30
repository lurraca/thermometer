import React, {Component} from 'react';
import './App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WeatherCard from '../components/WeatherCard';

import {getDailyForecast} from '../openWeatherMap';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dailyForecast: []
    }


  }

  componentDidMount() {

    getDailyForecast().then(data => {
      this.setState({dailyForecast: data.entity.list})
    })
  }

  render() {
    const weatherCards = this.state.dailyForecast.map((forecast, index) => {

      return <WeatherCard key={index} data={forecast}/>
    });

    return (
      <div>
        <Header></Header>
        <div className="App-main">
          {weatherCards}
        </div>
        <Footer></Footer>
      </div>
    )
      ;
  }
}

export default App;
