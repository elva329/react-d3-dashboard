import React, { Component } from 'react';
import { Modal, Input, Button } from 'antd';
import Clock from 'react-live-clock';
import './user.css';

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      defaultContent: '',
      visible: false,
    };
  }
  getNowFormatDate() {
    let date = new Date();
    let seperator1 = '-';
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }
    let currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      defaultContent: e.target.value,
    });
  };

  render() {
    const { defaultContent, visible } = this.state;
    return (
      <div className="pane">
        <div className="header">Notifications</div> 
        <Button type="primary" size="small" onClick={this.showModal}>
          Add
        </Button>
        <Modal
          title="Edit"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input value={defaultContent} onChange={this.onChange} />
        </Modal>
        <div className="notifications">{defaultContent}</div>
        <div className="clock">
          <div>{this.getNowFormatDate()}</div>
          <Clock
            format={'HH:mm:ss'}
            ticking={true}
            timezone={'Asia/Shanghai'}
          />
        </div>
      </div>
    );
  }
}
