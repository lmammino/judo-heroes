"use strict";

const IndexPage = require('./components/IndexPage');
const AthletePage = require('./components/AthletePage');
const NotFoundPage = require('./components/NotFoundPage');

const routes = [
  {path: '/', component: IndexPage},
  {path: '/athlete/:id', component: AthletePage},
  {path: '*', component: NotFoundPage}
];

module.exports = routes;
