import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super ();

        this.state = {
            notes: []
        }
    };

    render() {
        const { notes } = this.state;
        return <ul> {notes.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
    }
}