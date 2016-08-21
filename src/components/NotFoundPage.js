"use strict";

const React = require('react');
const Link = require('react-router').Link;
const Layout = require('./Layout');

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="not-found">
          <h1>404</h1>
          <h2>Page not found!</h2>
          <p>
            <Link to="/">Go back to the main page</Link>
          </p>
        </div>
      </Layout>
    );
  }
}

module.exports = NotFoundPage;
