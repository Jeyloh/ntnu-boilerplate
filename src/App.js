import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
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
        <PageContent loginUser={this.loginUser} user={this.state.user} loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
