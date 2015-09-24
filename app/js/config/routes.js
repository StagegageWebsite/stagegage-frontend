import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Rankings from '../components/Rankings/Rankings'
import SelectPerformances from '../components/SubmitRankings/SelectPerformances'
import RankPerformances from '../components/SubmitRankings/RankPerformances/RankPerformances'
import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <Route name="rankings" path="rankings/:username" handler={Rankings} />
    <Route name="submitRankings" path="selectPerformances" handler={SelectPerformances} />
    <Route name="rankPerformances" path="rankPerformances" handler={RankPerformances} />
    <DefaultRoute handler={Home} />
  </Route>
)
