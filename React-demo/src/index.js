import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Provider store = { store }>
      <Router>
        <Route path="/" component = { App } />
      </Router>
    </Provider>
  </div>, 
  document.getElementById('root'));
registerServiceWorker();
