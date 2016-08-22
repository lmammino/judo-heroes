"use strict";

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;
const IndexPage = require('./IndexPage');
const AthletePage = require('./AthletePage');
const NotFoundPage = require('./NotFoundPage');

class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={IndexPage}/>
        <Route path="/athlete/:id" component={AthletePage}/>
        <Route path="*" component={NotFoundPage}/>
      </Router>
    );
  }
}

module.exports = AppRoutes;
