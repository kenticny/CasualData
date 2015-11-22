var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Dashboard = require('./pages/dashboard');

var routes = (
    <Route name="app">
        <Route name="dashboard" path="/dashboard" handler={Dashboard} />
    </Route>
);

module.exports = routes;