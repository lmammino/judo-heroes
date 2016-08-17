"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const Athlete = require('./athlete');

window.onload = () => {
	ReactDOM.render( <Athlete/> , document.getElementById('main'))
};
