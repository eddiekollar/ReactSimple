import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import routes from './routes';
import reducers from './reducers';
import '../style/index.css';


const createStoreWithMiddleware = applyMiddleware(promise,reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('root'));
