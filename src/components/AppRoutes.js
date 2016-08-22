"use strict";

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
const routes = require('./../routes');

class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes}/>
    );
  }
}

module.exports = AppRoutes;
