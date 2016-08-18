"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const Home = require('./home');
const athletes = require('./../app/athletes');

window.onload = () => {
	ReactDOM.render( <Home athletes={athletes}/> , document.getElementById('main'))
};