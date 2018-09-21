import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import IntroText from "./components/IntroText"
import Router from "./components/Router"
import PageContent from "./components/PageContent"
import { myPersonalInformation } from "./personal_information"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: false
    }
  }

  loginUser = () => {
    console.log("Simulate fetchUserInformation call with setTimeout 1000ms")
    this.setState({loading: true})
    setTimeout( () => {
      this.setState({
        user: myPersonalInformation,
        loading: false
      })
    }, 1000)
  }

  render() {
    return (
      <div className="app">
        <Header user={this.state.user}/>
        <IntroText />
        <PageContent loginUser={this.loginUser} user={this.state.user} loading={this.state.loading}/>
        <Router />
      </div>
    );
  }
}

export default App;
