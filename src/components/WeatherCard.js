import React, { Component } from 'react';

import './WeatherCard.css';

class WeatherCard extends Component {
  render() {
    return(
      <div className="weather-card">
        <div className="weather-card-content">
          <p>{this.props.data.avgTemp}° C</p>
          <p>{this.props.data.weatherDesc}</p>
          <p>Humidity: {this.props.data.humidity}</p>
        </div>
      </div>
    )
  }
}

export default WeatherCard;