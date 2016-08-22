"use strict";

const path = require('path');
const http = require('http');
const Express = require('express');
const React = require('react');
const ReactDom = require('react-dom/server');
const Router = require('react-router');
const routes = require('./routes');
const NotFoundPage = require('./components/NotFoundPage');

const app = new Express();
const server = new http.Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'static')));
app.get('*', (req, res) => {
  Router.match(
    {routes, location: req.url},
    (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let markup;
      if (renderProps) {
        markup = ReactDom.renderToString(<Router.RouterContext {...renderProps}/>);
      } else {
        markup = ReactDom.renderToString(<NotFoundPage/>);
        res.status(404);
      }

      return res.render('index', {markup});
    }
  )
})

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const protocol = process.env.PROTOCOL || 'http';
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on ${protocol}://${host}${port != 80 ? ":"+port : ""} [${env}]`);
});
