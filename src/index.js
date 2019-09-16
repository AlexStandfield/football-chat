import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Hash Router
import {HashRouter} from 'react-router-dom'

// Provider
// import {Provider} from 'react-redux'

// Import Store
// import store from '../redux/store'

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, document.getElementById('root'));