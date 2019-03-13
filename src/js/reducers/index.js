// import { ADD_NOTE } from '../constants/action-types';
import { combineReducers } from 'redux';
import notes from './notes';
import visibilityFilter from './visibilityFilter';

// const initialState = {
//     notes: []
// };

// function rootReducer(state = initialState, action) {
//     if (action.type === ADD_NOTE) {
//         return Object.assign({}, state, {
//             notes: state.notes.concat(action.payload)
//         });
//     }
//     return state;
// };

// export default rootReducer;

// Below is logic for combined reducer to save/load to/from LocalStorage

export default combineReducers({
    notes,
    visibilityFilter
})