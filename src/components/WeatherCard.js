import React, { Component } from 'react';

import './WeatherCard.css';

class WeatherCard extends Component {
  render() {
    return(
      <div className="weather-card">
        <div className="weather-card-content">
          <p>{this.props.data.temp.day}° C</p>
          <p>{this.props.data.weather[0].description}</p>
          <p>Humidity: {this.props.data.humidity}</p>
        </div>
      </div>
    )
  }
}

export default WeatherCard;