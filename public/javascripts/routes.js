import React from 'react';
import { Router, Route } from 'react-router';

var Main = require('./pages/main');
var Dashboard = require('./pages/dashboard');
var Projects = require('./pages/projects');

var routes = (
    <Router>
        <Route name="App" path="/" component={Main}>
            <Route name="Dashboard" path="/dashboard" component={Dashboard} />
            <Route name="Projects" path="/projects" component={Projects} />
        </Route>
    </Router>
);

module.exports = routes;