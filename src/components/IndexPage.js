"use strict";

import React from 'react';
import Layout from './Layout';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
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
