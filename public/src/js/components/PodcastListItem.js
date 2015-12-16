const React = require('react');

var PodcastListItem = React.createClass({
	render: function() {
		return (
			<li>{this.props.podcast.name}</li>
		);
	}
});

module.exports = PodcastListItem;
