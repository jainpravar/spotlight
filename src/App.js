import React, { Component } from 'react';
import './App.css';
import './Components/NavBar';

import NavBar from './Components/NavBar';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>

    );
  }
}

export default App;
