import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk';


import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
  
);


//PyErzcGVIC8qlwdVNf2EaC1439BNP64V