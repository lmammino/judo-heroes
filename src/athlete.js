"use strict";

const React = require('react');
const Medal = require('./medal');
const CountryFlag = require('./countryFlag');

class Athlete extends React.Component {
	render() {
		return (
			<div className="athlete">
				<h1 className="name"><CountryFlag code={this.props.country}/> {this.props.name}</h1>
				<img src={`img/${this.props.image}`}/>
				<ul className="medals">{
					this.props.medals.map((medal, i) => <Medal key={i} {...medal}/>)
				}</ul>
			</div>
		);
	}
}

module.exports = Athlete;
