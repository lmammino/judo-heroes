'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AthletesMenu extends React.Component {
  render() {
    return (
      <nav className="athletes-menu">
        {this.props.athletes.map(menuAthlete => {
          return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
            {menuAthlete.name}
          </Link>;
        })}
      </nav>
    );
  }
}
