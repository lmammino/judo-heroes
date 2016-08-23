"use strict";

import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

const routes = [
  {path: '/', component: IndexPage},
  {path: '/athlete/:id', component: AthletePage},
  {path: '*', component: NotFoundPage}
];

export default routes;
