"use strict";

const React = require('react');

class Medal extends React.Component {
	render() {
		return (
			<div className="medal">
				{this.props.place}
			</div>
		)
	}
}

module.exports = Medal;
