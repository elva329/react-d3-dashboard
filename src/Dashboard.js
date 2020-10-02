import React, { Component } from 'react';
import data from './data';
import { Layout } from 'antd';
import User from './views/User';
import Gender from './views/Gender';
import Filter from './views/Filter';
import Trend from './views/Trend';
import Age from './views/Age';
import Tenant from './views/Tenant';
import VVShare from 'vvshare';
import profilePic from './images/profile-picture.png';
import logout from './images/logout.png';
import './dashboard.css';

const { Header, Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: data[0],
      greaterThenAge: 0,
      includedGender: ['Male', 'Female', 'Unknown'],
    };
  }

  changeSelectUser = (value) => {
    this.setState({
      selectedUser: value,
    });
  };

  changeGreaterThenAge = (value) => {
    this.setState({
      greaterThenAge: value,
    });
  };

  changeIncludedGender = (value) => {
    this.setState({
      includedGender: value,
    });
  };

  render() {
    const { selectedUser, greaterThenAge, includedGender } = this.state;
    const filteredData = data
      .filter((user) => includedGender.indexOf(user.gender) !== -1)
      .filter((user) => user.age > greaterThenAge);
    return (
      <div>
        <Header className="logo">
          Cloud Dashboard
          <img src={logout} alt="logout" className="logout" />
          <img src={profilePic} alt="profile" className="profile" />
          <label className="name"> Jia SHEN</label>
        </Header>
        <Layout style={{ height: 920 }}>
          <Sider width={300} style={{ backgroundColor: '#eee' }}>
            <Content>
              <User user={selectedUser} />
            </Content>
            <Content style={{ height: 300 }}>
              <Gender data={filteredData} />
            </Content>
            <Content style={{ height: 400 }}>
              <Filter
                changeGreaterThenAge={this.changeGreaterThenAge}
                changeIncludedGender={this.changeIncludedGender}
              />
            </Content>
          </Sider>
          <Layout>
            <Content style={{ height: 300 }}>
              <Trend user={selectedUser} />
            </Content>
            <Layout style={{ height: 600 }}>
              <Content>
                <Age data={filteredData} />
              </Content>
              <Sider width={300} style={{ backgroundColor: '#eee' }}>
                <Tenant
                  data={filteredData}
                  changeSelectUser={this.changeSelectUser}
                />
              </Sider>
            </Layout>
          </Layout>
        </Layout>
        <Layout>
          <Footer className="footer">
            <div className="copyright">
              Developed by Jia SHEN. Oct, 2020. Share your dashboard with below
              options
            </div>
            <div className="share">
              <VVShare
                title="Cloud Dashboard"
                url="http://www.github.com"
                alignment="center"
                width={30}
                height={30}
              />
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
