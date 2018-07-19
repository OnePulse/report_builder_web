import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';

import history from './shared/History';
import App from './containers/App';

import configureStore from './redux/store/configureStore';

const store = configureStore();

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';

ReactDOM.render((
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
), document.getElementById('root'));