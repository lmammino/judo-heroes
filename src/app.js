"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const AppRoutes = require('./components/AppRoutes');

window.onload = () => {
	ReactDOM.render( <AppRoutes/> , document.getElementById('main'))
};
