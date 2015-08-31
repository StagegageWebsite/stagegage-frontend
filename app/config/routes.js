import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Rankings from '../components/Rankings/Rankings'
import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <Route name="rankings" path="rankings/:username" handler={Rankings} />
    <DefaultRoute handler={Home} />
  </Route>
)
