import { v4 } from 'node-uuid';

let nextNoteId = 0;
export const addNote = (text) => ({
    type: 'ADD_NOTE',
    id: v4(),
    text,
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
});

export const toggleNote = (id) => ({
    type: 'TOGGLE_NOTE',
    id,
})