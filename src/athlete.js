"use strict";

const React = require('react');
const Medal = require('./medal');
const CountryFlag = require('./countryFlag');

const athlete = {
	id: "driulis-gonzalez",
	name: 'Driulis González',
	country: 'CUB',
	birthday: '1973-09-21',
	image: 'driulis-gonzalez.jpg',
	medals: [
		{ "year":"1992", "type": "B", "place": "Barcelona", "event": "Olympic Games", "category":"-57 kg"},
		{ "year":"1993", "type": "B", "place": "Hamilton", "event": "World Championships", "category":"-57 kg"},
		{ "year":"1995", "type": "G", "place": "Chiba", "event": "World Championships", "category":"-57 kg"},
		{ "year":"1995", "type": "G", "place": "Mar del Plata", "event": "Pan American Games", "category":"-57 kg"},
		{ "year":"1996", "type": "G", "place": "Atlanta", "event": "Olympic Games", "category":"-57 kg"},
		{ "year":"1997", "type": "S", "place": "Osaka", "event": "World Championships", "category":"-57 kg"},
		{ "year":"1999", "type": "G", "place": "Birmingham", "event": "World Championships", "category":"-57 kg"},
		{ "year":"2000", "type": "S", "place": "Sydney", "event": "Olympic Games", "category":"-57 kg"},
		{ "year":"2003", "type": "G", "place": "S Domingo", "event": "Pan American Games", "category":"-63 kg"},
		{ "year":"2003", "type": "S", "place": "Osaka", "event": "World Championships", "category":"-63 kg"},
		{ "year":"2004", "type": "B", "place": "Athens", "event": "Olympic Games", "category":"-63 kg"},
		{ "year":"2005", "type": "B", "place": "Cairo", "event": "World Championships", "category":"-63 kg"},
		{ "year":"2006", "type": "G", "place": "Cartagena", "event": "Central American and Caribbean Games", "category":"-63 kg"},
		{ "year":"2006", "type": "G", "place": "Cartagena", "event": "Central American and Caribbean Games", "category":"Tema"},
		{ "year":"2007", "type": "G", "place": "Rio de Janeiro", "event": "Pan American Games", "category":"-63 kg"},
		{ "year":"2007", "type": "G", "place": "Rio de Janeiro", "event": "World Championships", "category":"-63 kg"}
  ]
};

class Athlete extends React.Component {
	render() {
		return (
			<div className="athlete">
				<h1 className="name"><CountryFlag code={athlete.country} showName="true"/> {athlete.name}</h1>
				<ul className="medals">{
					athlete.medals.map((medal) =>
						<Medal {...medal}/>
					)
				}</ul>
			</div>
		);
	}
}

module.exports = Athlete;
