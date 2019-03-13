const notes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_NOTE':
            return state.map(note =>
                note.id === action.id ? { ...note, completed: !note.completed }: note
            )
        default:
            return state;
    }
};

export default notes;