import React, { Component } from 'react';

import './WeatherCard.css';

class WeatherCard extends Component {
  render() {
    return(
      <div className="weather-card">
        <div className="weather-card-content">
          <p>26° Cloudy</p>
          <p>Feels like 20°</p>
          <p>UV Index 6/10</p>
        </div>
      </div>
    )
  }
}

export default WeatherCard;