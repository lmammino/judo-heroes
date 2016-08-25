"use strict";

import React from 'react';
import { Link } from 'react-router';
import athletes from '../data/athletes';

export default class AthletesMenu extends React.Component {
  render() {
    return (
      <nav className="atheletes-menu">
        {athletes.map(menuAthlete => {
          const status = menuAthlete.id === this.props.selected ? 'active' : null;
          return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} className={status}>
            {menuAthlete.name}
          </Link>;
        })}
      </nav>
    );
  }
}
