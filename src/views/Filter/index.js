import React, { Component } from 'react';
import { Slider, Checkbox, Divider } from 'antd';
import './filter.css';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Male', 'Female', 'Unknown'];
const defaultCheckedList = ['Male', 'Female', 'Unknown'];

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    };
  }

  onChangeCheckbox = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
    this.props.changeIncludedGender(checkedList);
  };

  onCheckAllChange = (e) => {
    const checkedList = e.target.checked ? plainOptions : [];
    this.setState({
      checkedList: checkedList,
      indeterminate: false,
      checkAll: e.target.checked,
    });
    this.props.changeIncludedGender(checkedList);
  };

  onChangeSilder = (value) => {
    this.props.changeGreaterThenAge(value);
  };

  render() {
    return (
      <div className="pane">
        <div className="header">Filter</div>
        <div style={{ width: 275, margin: 15 }}>
          <h4>Gender</h4>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <div style={{ width: 275, margin: 15 }}>
          <CheckboxGroup
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChangeCheckbox}
          />
        </div>
        <Divider />
        <div style={{ width: 275, margin: 15 }}>
          <h4>Age</h4>
          <Slider defaultValue={0} onChange={this.onChangeSilder} />
        </div>
      </div>
    );
  }
}
