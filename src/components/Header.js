import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <div className="title">
          <h1 className="app-name">Thermometer</h1>
          <h2 className="app-tagline">Your premium source for weather details</h2>
        </div>
      </header>
    )
  };
};

export default Header;