import { createStore, /* applyMiddleware, */ compose } from 'redux';
import notesApp from '../reducers/index';
import { loadState, saveState } from '../localStorage';
import throttle from 'lodash.throttle';
// import { forbiddenWordsMiddleware } from '../middleware';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
const store = createStore(notesApp, /* preloadedState, */ storeEnhancers(
    // applyMiddleware(forbiddenWordsMiddleware)
    persistedState
));

store.subscribe(throttle(() => {
    saveState({
        notes: store.getState().notes
    });
}, 1000));

export default store;