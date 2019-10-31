import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import TodoList from "./containers/TodoList";

import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Route path="/" component={TodoList} />
      </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
