"use strict";

const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const NotFoundPage = require('./NotFoundPage');
const Layout = require('./Layout');
const Medal = require('./Medal');
const Flag = require('./Flag');
const athletes = require('./../../app/athletes');

class AthletePage extends React.Component {
  render() {
    const id = this.props.params.id;
    const athlete = athletes.filter((athlete) => athlete.id === id)[0];
    if (!athlete) {
      return <NotFoundPage/>
    }
    const headerStyle = {backgroundImage:`url(/img/${athlete.cover})`};
    return (
      <Layout>
        <nav className="atheletes-menu">
          {athletes.map(menuAthlete => {
            const status = menuAthlete.id === athlete.id ? 'active' : null;
            return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} className={status}>
              {menuAthlete.name}
            </Link>
          })}
        </nav>
        <div className="athlete">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${athlete.image}`}/>
            <h2 className="name"><Flag code={athlete.country}/> {athlete.name} ({athlete.country})</h2>
          </div>
          <section className="description">
            Olympic medalist from <strong><Flag code={athlete.country} showName="true"/></strong>,  
            born in {athlete.birth} (Find out more on <a href={athlete.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="medals">
            <p>Winner of <strong>{athlete.medals.length}</strong> medals:</p>
            <ul>{
              athlete.medals.map((medal, i) => <Medal key={i} {...medal}/>)
            }</ul>
          </section>
        </div>
        <div class="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </Layout>
    );
  }
}

module.exports = AthletePage;
