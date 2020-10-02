import React, { Component } from 'react';
import './gender.css';
import PieChart from '../../charts/PieChart';

export default class Gender extends Component {
  render() {
    const { data } = this.props;
    const width = 260;
    const height = 260;
    return (
      <div className="pane">
        <div className="header">Gender</div>
        <PieChart data={data} width={width} height={height} />
      </div>
    );
  }
}
