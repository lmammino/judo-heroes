"use strict";

import React from 'react';

const data = {
	"CUB": {
		"name": "Cuba",
		"emoji": "🇨🇺"
	},
	"FRA": {
		"name": "France",
		"emoji": "🇫🇷"
	},
	"JAP": {
		"name": "Japan",
		"emoji": "🇯🇵"
	},
	"NED": {
		"name": "Netherlands",
		"emoji": "🇳🇱"
	},
	"UZB": {
		"name": "Uzbekistan",
		"emoji": "🇺🇿"
	}
};

export default class Flag extends React.Component {
	render() {
    const name = data[this.props.code].name;
		return (
			<span className="flag">
				<span className="emoji" title={name}>{data[this.props.code].emoji}</span>
				{this.props.showName && <span className="name"> {name}</span>}
			</span>
		);
	}
}
