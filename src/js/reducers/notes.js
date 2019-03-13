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

const testAddNote = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_NOTE',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        notes(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddNote();
console.log('All tests passed.');



// export default notes;