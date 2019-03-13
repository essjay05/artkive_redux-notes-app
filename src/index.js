import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
import './index.css';
import App from './js/components/App.jsx';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router } from 'react-router-dom';
// import index from './js/index';


render(
    <Provider store= { store }>
        <App />
    </Provider>,
    // Target element might be either root or app,
    // depending on your development environment
    // document.getElemenytById('app')
    document.getElementById('root')
);