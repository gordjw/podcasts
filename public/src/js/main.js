var React = require('react');

var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

const App = require('./App.js');

ReactDOM.render((
	<Router>
		<Route path="/" component={App}>
		</Route>
	</Router>
), document.getElementById('app'));
