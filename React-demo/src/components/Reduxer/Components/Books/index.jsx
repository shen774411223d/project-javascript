import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table, Drawer, Row, Col, Input, message } from 'antd';
import Axios from 'axios';
import '../../index.css';

class Books extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      name: '',
      price: 0,
      count: 0,
      editId: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  visibleShow(type = true) {
    this.setState({
      visible: type
    });
    !type && this.setState({
      name: '',
      price: 0,
      count: 0,
      editId: ''
    });
  }

  async add() {
    try {
      const info = {
        _id: this.props.userInfo._id,
        name: this.state.name,
        price: this.state.price,
        count: this.state.count
      }
      const result = await Axios.post(`/api/addUserBooks?booksId=${this.state.editId}`, info);
      message.success(result.data.msg);
      this.visibleShow(false);
      this.props.chooseUser(this.props.userInfo);
    }catch(e) {
      throw e;
    }
    
  }

  async deletes(text, record, index) {
    try {
      console.log(record);
      const result = await Axios.get(`/api/deleteUserBooks?id=${this.props.userInfo._id}&booksId=${record._id}`);
      message.success(result.data.msg);
      this.props.chooseUser(this.props.userInfo);
    }catch(e) {
      message.error(e.response.data.errMsg);
      throw e;
    }
  }

  edits(text, record, index) {
    this.setState((state, props) => { return {...record, editId: record._id }});
    this.visibleShow(true);
  }
  

  render() {
    return (
      <div>
        <h1>{ this.props.userInfo.userName }的书店</h1>
        <Button type="primary" onClick = { () => this.visibleShow() }>添加图书</Button>
        <Table rowKey="_id" dataSource = { this.props.books }>
          <Table.Column
          title="名称"
          dataIndex="name"
          key="name" />
          <Table.Column
          title="价格"
          dataIndex="price"
          key="price" />
          <Table.Column
          title="剩余数量"
          dataIndex="count"
          key="count" />
          <Table.Column
          title="操作"
          dataIndex="options"
          key="options"
          render = { 
            (text, record, index) => (
              <span>
                <Button type="danger" size="small" onClick = { () => this.deletes(text, record, index) }>删除</Button>
                <Button type="danger" size="small" onClick = { () => this.edits(text, record, index) }>编辑</Button>
              </span>
            ) }/>
        </Table>
        <Drawer
          onClose = { () => this.visibleShow(false) }
          visible = { this.state.visible } 
          title="添加图书"
          width={720}
          placement="right">
           <Row gutter = { 24 }>
              <Col span = { 24 }>
                图书名称
                <Input name="name" value = { this.state.name } onChange = { (e) => this.handleChange(e) } />
              </Col>
              <Col span = { 24 }>
                图书价格
                <Input name="price" value = { this.state.price } onChange = { (e) => this.handleChange(e) } />
              </Col>
              <Col span = { 24 }>
                图书剩余数量
                <Input name="count" value = { this.state.count } onChange = { (e) => this.handleChange(e) } />
              </Col>
           </Row>
           <Row className="btn-warp" gutter = { 24 }>
              <Col span = { 12 }>
                <Button className="btn" onClick = { () => this.visibleShow(false) }>取消</Button>
              </Col>
              <Col span = { 12 }>
                <Button className="btn" type="primary" onClick = { () => this.add() }>确定</Button>
              </Col>
           </Row>
        </Drawer>
      </div>
    );
  }
}

Books.propTypes = {
  books: PropTypes.array,
  userInfo: PropTypes.object,
  chooseUser: PropTypes.func
};

export default Books;