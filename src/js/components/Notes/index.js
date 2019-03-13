import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ onClick, completed, text }) => (
    <li
    onClick={onClick}
    style={{
        textDecoration: completed ? 'line-through' : 'none'
    }}
    >
        {text}
    </li>
)

Note.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Note;