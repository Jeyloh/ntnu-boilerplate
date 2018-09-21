import React, { Component } from 'react';
import logo from '../logo.svg';
import personalLogo from '../createIT.png';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src={this.props.user ? personalLogo : logo} className="app-logo" alt="logo" />
        {
          this.props.user 
          ? <h1 className="app-title">Welcome {this.props.user.name}</h1>
          : <h1 className="app-title">Welcome to React</h1>
        }
      </header>
    );
  }
}

export default Header;
