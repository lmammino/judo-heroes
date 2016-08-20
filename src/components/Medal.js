"use strict";

const React = require('react');

class Medal extends React.Component {
	render() {
		return (
			<div className="medal">
				{this.props.year} {this.props.city} ({this.props.event})
			</div>
		)
	}
}

module.exports = Medal;
