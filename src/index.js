import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
import './index.css';
import notesApp from './reducers'
import App from './js/components/App.jsx';
import { loadState, saveState } from '../js/localStorage';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router } from 'react-router-dom';
// import index from './js/index';

// const persistedState = loadState();
// const store = createStore(
//     notesApp,
//     persistedState
// );

// store.subscribe(() => {
//     saveState({
//         notes: store.getState().notes
//     });
// });


render(
    <Provider store= { store }>
        <App />
    </Provider>,
    // Target element might be either root or app,
    // depending on your development environment
    // document.getElemenytById('app')
    document.getElementById('root')
);