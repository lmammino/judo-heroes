"use strict";

const React = require('react');
const Athlete = require('./athlete');

class Home extends React.Component {
	constructor(props) {
		super();
		this.athletes = props.athletes;
	}
	render() {
		return (
			<div className="home">
				<div className="athleteSelector">
					{this.athletes.map(athleteData => <Athlete key={athleteData.id} {...athleteData} />)}
				</div>
			</div>
		);
	}
}

module.exports = Home;
