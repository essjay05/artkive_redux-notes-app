let nextNoteId = 0;
export const addNote = (text) => ({
    type: 'ADD_NOTE',
    id: nextNoteId++,
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

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}