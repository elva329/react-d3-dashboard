import React, { Component } from 'react';
import BarChart from '../../charts/BarChart';
import './age.css';

export default class Age extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="age-pane">
        <div className="header">Age</div>
        <div className="bar-chart">
          <BarChart data={data} width={1000} height={550} />
        </div>
      </div>
    );
  }
}
