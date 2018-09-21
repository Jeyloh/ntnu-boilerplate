import React, { Component } from 'react';
import {PersonalEntry} from "./PersonalEntry";
import {LoadingSpinner} from "./LoadingSpinner";
import IntroText from './IntroText'

class PageContent extends Component {

  render() {
    console.log(this.props);
    if (this.props.loading) {
      return <LoadingSpinner />
    }
    else if (this.props.user) {
      return (
        <div className="content">
          <h1>Welcome {this.props.user.name}</h1>
          <IntroText />
          <PersonalEntry color="rgb(255, 100, 100)" dataArray={this.props.user.projectExperience}/>
          <PersonalEntry color="rgb(100, 255, 100)" dataArray={this.props.user.workExperience}/>
          <PersonalEntry color="rgb(100, 100, 255)" dataArray={this.props.user.hobbies}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Please log in to see your content</h1>
          <button onClick={this.props.loginUser}>Log in</button>
        </div>
      )
    }
   
  }
}

export default PageContent;
