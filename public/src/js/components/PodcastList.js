const React = require('react');
const PodcastListItem = require('./PodcastListItem');

var PodcastList = React.createClass({
	render: function() {
		var podcasts = [];

		for(var i=0; i < this.props.podcasts.length; i++) {
			podcasts.push(<PodcastListItem key={i} podcast={this.props.podcasts[i]} />);
		}

		return(
			<div className="podcast-list">
				{podcasts}
			</div>
		);
	}
});

module.exports = PodcastList;
