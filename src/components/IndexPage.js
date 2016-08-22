"use strict";

const React = require('react');
const Layout = require('./Layout');
const AthletePreview = require('./AthletePreview');
const athletes = require('./../data/athletes');

class IndexPage extends React.Component {
	render() {
		return (
      <Layout>
  			<div className="home">
  				<div className="athletes-selector">
  					{athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
  				</div>
  			</div>
      </Layout>
		);
	}
}

module.exports = IndexPage;
