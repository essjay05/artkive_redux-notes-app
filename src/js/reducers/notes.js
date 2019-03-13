const note = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
        return {
            id: action.id,
            text: action.text,
            completed: false
        };
        case 'TOGGLE_NOTE':
            if (note.id !== action.id) {
                return note;
            }
            return {
                ...note,
                completed: !note.completed
            };
        default:
            return state;
    }
};

const notes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                note(undefined, action)
            ];
        case 'TOGGLE_NOTE':
            return state.map(n => note(n, action));
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

const testToggleNote = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_NOTE',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        notes(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddNote();
testToggleNote();
console.log('All tests passed.');



// export default notes;