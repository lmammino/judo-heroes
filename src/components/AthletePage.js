"use strict";

const React = require('react');
const Router = require('react-router').Router;
const Layout = require('./Layout');
const Medal = require('./Medal');
const Flag = require('./Flag');
const athletes = require('./../../app/athletes');

class AthletePage extends React.Component {
	constructor(props) {
    super();
    const id = props.params.id;
    this.athlete = athletes.filter((athlete) => athlete.id === id)[0];
    if (!this.athlete) {
      Router.transitionTo('notfound');
    }
  }

  render() {
		return (
      <Layout>
  			<div className="athlete">
  				<h1 className="name"><Flag code={this.athlete.country}/> {this.athlete.name}</h1>
  				<img src={`/img/${this.athlete.image}`}/>
  				<ul className="medals">{
  					this.athlete.medals.map((medal, i) => <Medal key={i} {...medal}/>)
  				}</ul>
  			</div>
      </Layout>
		);
	}
}

module.exports = AthletePage;
