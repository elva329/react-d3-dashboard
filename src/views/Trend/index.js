import React, { Component } from 'react';
import './trend.css';
import LineChart from '../../charts/LineChart';

export default class Trend extends Component {
  render() {
    const { user } = this.props,
      width = 1100,
      height = 250;
    return (
      <div className="pane">
        <div className="header">Usage Over Time</div>
        <div style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
          <LineChart data={user} width={width} height={height} />
        </div>
      </div>
    );
  }
}
