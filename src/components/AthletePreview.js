"use strict";

const React = require('react');
const Link = require('react-router').Link;

class AthletePreview extends React.Component {
	render() {
		return (
			<div className="athlete-preview">
        <Link to={`/athlete/${this.props.id}`}>
				  <h1 className="name">{this.props.name}</h1>
				  <img src={`img/${this.props.image}`}/>
        </Link>
			</div>
		);
	}
}

module.exports = AthletePreview;
