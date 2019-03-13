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
            ];
        case 'TOGGLE_NOTE':
            return state.map(notes => 
                note(n, action)
            );
        default:
            return state;
    }
};



// export default notes;