import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Input, Row, Col, message, Radio, Drawer } from 'antd';
import Axios from 'axios';
import '../../index.css';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editId: '',
      visible: false,
      userName: '',
      sex: '',
      city: '',
      filters: {
        userName: '',
        sex: '',
        city: ''
      }
    }
  }

  handleChange(e, filterType = false) {
    this.setState({
      [e.target.name]: e.target.value
    });
    if(filterType) {
      this.setState({
        filters: { ...this.state.filters, [e.target.name]: e.target.value }
      });
    }
  }

  visibleShow(type = true) {
    this.setState({
      visible: type
    });
    !type && this.setState({
      userName: '',
      sex: '',
      city: '',
      editId: ''
    });
  }

  async add() {
    try {
      const userInfo = {
        userName: this.state.userName, 
        sex: this.state.sex,
        city: this.state.city
      }
      const result = await Axios.post(`/api/addUsers?id=${ this.state.editId }`, userInfo);
      message.success(result.data.msg);
      this.getUsers();
      this.visibleShow(false);
    }catch(e) {
      message.error(e.response.data.errMsg);
      throw e;
    }
  }

  async deletes(text, record, index) {
    try {
      const result = await Axios.post('/api/deleteUsers', { id: record._id });
      message.success(`共删除${ result.data.n }条`);
    }catch(e) {
      message.error(e.response.data.errMsg);
    }
  }

  edits(text, record, index) {
    const info = {
      userName: record.userName,
      sex: record.sex,
      city: record.city
    }
    this.setState((state, props) => { return { 
      editId: record._id,
      ...info
     }});
    this.visibleShow();
  }

  getUsers() {
    this.props.getUsers(this.state.filters);
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>users</h1>
          <Row gutter = { 24 }>
            <Col span = { 12 }>
              <Button className="btn" name="user" type="primary" onClick = { () => this.visibleShow() }>添加用户</Button>
            </Col>
            <Col span = { 12 }>
              <Button className="btn" onClick = { () => this.getUsers() }>查询</Button>
            </Col>
          </Row>
          <Row className="filters" gutter = { 24 }>
            <Col span ={ 8 }>
              姓名筛选
              <Input 
              name="userName" 
              value = { this.state.filters.userName } 
              onChange = { (e) => this.handleChange(e, true) } />
            </Col>
            <Col span ={ 8 }>
              <div>性别筛选</div>
              <Radio.Group 
              name="sex" 
              onChange={ (e) => this.handleChange(e, true) } 
              value={this.state.filters.sex}>
                <Radio value = ''>不限</Radio>
                <Radio value = { 1 }>男性</Radio>
                <Radio value = { 2 }>女性</Radio>
              </Radio.Group>
            </Col>
            <Col span = { 8 }>
              城市筛选
              <Input 
              name="city"
              value = { this.state.filters.city } 
              onChange = { (e) => this.handleChange(e, true) }/>
            </Col>
          </Row>
        </div>
        <Table 
        rowKey="_id" 
        dataSource = { this.props.users }>
          <Table.Column 
          title='姓名'
          dataIndex='userName'
          key='userName' />
          <Table.Column 
          title='性别'
          dataIndex='sexy'
          key='sexy'/>
          <Table.Column 
          title='居住地'
          dataIndex='city'
          key='city' />
          <Table.Column 
          title='操作'
          dataIndex='options'
          key='options'
          render = {(text, record, index) => (
            <span>
              <Button type="danger" size="small" onClick = { () => this.deletes(text, record, index) }>删除</Button>
              <Button type="danger" size="small" onClick = { () => this.edits(text, record, index) }>编辑</Button>
              <Button type="danger" size="small" onClick = { () => this.props.chooseUser(record) }>选择</Button>
            </span>
          )} />
        </Table>
        <Drawer
          onClose = { () => this.visibleShow(false) }
          visible = { this.state.visible } 
          title="添加用户"
          width={720}
          placement="right">
            <div>
              <Row gutter = { 48 }>
                <Col span = { 24 }>
                  姓名
                  <Input name="userName" value = { this.state.userName } onChange = { (e) => this.handleChange(e) } />
                </Col>
                <Col span = { 24 }>
                  <div>
                    性别
                  </div>
                  <Radio.Group 
                  name="sex" 
                  onChange={ (e) => this.handleChange(e) } 
                  value={this.state.sex}>
                    <Radio value = ''>不限</Radio>
                    <Radio value = { 1 }>男性</Radio>
                    <Radio value = { 2 }>女性</Radio>
                  </Radio.Group>
                </Col>
                <Col span = { 24 }>
                  居住地
                  <Input name="city" value = { this.state.city } onChange = { (e) => this.handleChange(e) } />
                </Col>
                <Col span = { 12 }>
                  <Button onClick = { () => this.visibleShow(false) }>取消</Button>
                </Col>
                <Col span = { 12 }>
                  <Button type="primary" onClick = { () => this.add() }>确定</Button>
                </Col>
              </Row>
            </div>
        </Drawer>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func,
  chooseUser: PropTypes.func
};

export default Users;