import { ADD_NOTE } from '../constants/action-types';

export function addNote(payload) {
    return { type: ADD_NOTE, payload }
};

// Action Creator test
export function getData() {
    return fetch()
}