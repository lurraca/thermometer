import React, {Component} from 'react';
import './App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WeatherCard from '../components/WeatherCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'dailyForecast': [{
        'avgTemp': '26',
        'weatherDesc': 'rain',
        'humidity': 100
      },
        {
          'avgTemp': '35',
          'weatherDesc': 'sunny',
          'humidity': 0
        },
        {
          'avgTemp': '14',
          'weatherDesc': 'cloudy',
          'humidity': 55
        }
      ]
    };
  }

  componentDidMount() {

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
