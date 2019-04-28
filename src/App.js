import React, { Component } from 'react';
import Person from './Perosn/Person';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Person />
      <Person />
      <Person />
        <h1>Yakiniku Tabetai</h1>
        <p>This is really working!</p>
      </div>
    );
  }
}

export default App;
