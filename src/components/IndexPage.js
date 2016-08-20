"use strict";

const React = require('react');
const Layout = require('./Layout');
const AthletePreview = require('./AthletePreview');
const athletes = require('./../../app/athletes');

class IndexPage extends React.Component {
	constructor(props) {
		super();
		this.athletes = athletes;
	}
	render() {
		return (
      <Layout>
  			<div className="home">
  				<div className="athleteSelector">
  					{this.athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
  				</div>
  			</div>
      </Layout>
		);
	}
}

module.exports = IndexPage;
