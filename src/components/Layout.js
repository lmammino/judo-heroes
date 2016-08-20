"use strict";

const React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <div class="app-container">
        <header>This is the header</header>
        <div>{this.props.children}</div>
        <footer>This is the footer</footer>
      </div>
    );
  }
}

module.exports = Layout;
