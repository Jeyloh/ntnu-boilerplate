import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import IntroText from "./components/IntroText"
import Router from "./components/Router"

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <IntroText />
        <Router />
      </div>
    );
  }
}

export default App;
