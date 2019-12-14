import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, getBooks } from '../../Redux/Actions';
import Uers from './Components/Users';
import Books from './Components/Books';

import './index.css';

class Reduxer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      books: []
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  async getUsers(filters = {}) {
    try {
      await this.props.getUsers(filters);
      this.chooseUser(this.props.lists.users[0]);
    }catch(e) {
      console.log(e.response);
      throw e;
    }
  }

  async chooseUser(user = null) {
    try {
      await this.props.getBooks(user._id);
      this.setState({
        userInfo: user
      });
    }catch(e) {
      console.log(e.response);
      throw e;
    }
  }
  
  render() {
    return (
      <div className="reduxer-warp">
        <Uers 
        users = { this.props.lists.users } 
        chooseUser = { user => this.chooseUser(user) }
        getUsers = { (filters) => this.getUsers(filters) }  />

        <Books 
        books = { this.props.lists.books } 
        chooseUser = { (user) => this.chooseUser(user) }
        userInfo = { this.state.userInfo } />
        
      </div>
    );
  }
}

const mapStateToProps = ({ lists }) => {
  return { lists };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (payload) => dispatch(getUsers(payload)),
    getBooks: (id) => dispatch(getBooks(id)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reduxer);