import React, { Component } from 'react';
import './App.css';
import './Components/NavBar';
import { render } from 'react-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>
      
    );
  }
}

export default App;
