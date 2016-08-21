"use strict";

const React = require('react');
const Layout = require('./Layout');
const AthletePreview = require('./AthletePreview');
const athletes = require('./../../app/athletes');

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.athletes = athletes;
	}
	render() {
		return (
      <Layout>
  			<div className="home">
  				<div className="athletes-selector">
  					{this.athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
  				</div>
  			</div>
      </Layout>
		);
	}
}

module.exports = IndexPage;
