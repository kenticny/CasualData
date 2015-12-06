var React = require('react');
var rRouter = require('react-router');
var Route = rRouter.Route;
var Router = rRouter.Router;

var Main = require('./pages/main');
var Dashboard = require('./pages/dashboard');

var routes = (
    <Router>
        <Route name="app" path="/" component={Main}>
            <Route name="dashboard" path="/dashboard" component={Dashboard} />
        </Route>
    </Router>
);

module.exports = routes;