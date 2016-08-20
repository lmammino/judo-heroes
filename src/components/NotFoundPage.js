"use strict";

const React = require('react');
const Layout = require('./Layout');

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>Page not found!</div>
      </Layout>
    );
  }
}

module.exports = NotFoundPage;
