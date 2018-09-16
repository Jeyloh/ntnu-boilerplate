import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import TabOne from "./TabOne"
import TabTwo from "./TabTwo"

class Router extends Component {
  render() {
    return (
      <div className="content-container" >
        <nav className="tab-container">
          <Link className="tab-button" to="/tab1">Tab 1</Link>
          <Link className="tab-button" to="/tab2">Tab 2</Link>
        </nav>
        <Switch>
          <Route exact
                  path="/tab1"
                  component={props => ( <TabOne /> )} 
            />
          <Route exact
                  path="/tab2"
                  component={props => ( <TabTwo /> )} 
            />
        </Switch>
      </div>
    );
  }
}

export default Router;
