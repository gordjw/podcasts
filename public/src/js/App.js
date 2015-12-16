const React = require('react');
const PodcastList = require('./components/PodcastList');

var App = React.createClass({
	getInitialState: function() {
		var state = { podcasts:[{id:'test-a', name:'TMS Demo'}], episodes: []};

		return state;
	},

	componentDidMount: function() {
		jQuery.get(
			'http://terry:3000/podcasts',
			function(data) {
				console.log(data);
			}
		);
	},

	render: function() {
		return (
			<div>
				<h1>Podcasts Live</h1>
				<PodcastList podcasts={this.state.podcasts} />
			</div>
		);
	}
});

module.exports = App;
