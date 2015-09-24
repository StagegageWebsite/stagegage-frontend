import React from 'react';
import { RouteHandler } from 'react-router';
import Search from './Search';

class Main extends React.Component{
  render(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <ul className="nav navbar-nav">
            <li role="presentation" className="active"><a href="file:///Users/Pooja/Projects/stagegage-frontend/public/index.html#/">Home</a></li>
            <li role="presentation"><a href="file:///Users/Pooja/Projects/stagegage-frontend/public/index.html#/profile/test">Profile</a></li>
            <li role="presentation"><a href="file:///Users/Pooja/Projects/stagegage-frontend/public/index.html#/rankings/test">Rankings</a></li>
            <li role="presentation"><a href="file:///Users/Pooja/Projects/stagegage-frontend/public/index.html#/selectperformances">Rankings Flow</a></li>
            <li role="presentation"><a href="#">About Us</a></li>
          </ul>
          <div className="col-sm-5 col-sm-offset-4">
            <Search />
          </div>
        </nav>
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
};

export default Main;
