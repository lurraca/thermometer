import React, {Component} from 'react';
import './App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
