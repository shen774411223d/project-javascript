import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './Redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
<Provider store = { store }>
  <Router>
    <Route path="/" render={props => <App {...props} />} />
  </Router>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
