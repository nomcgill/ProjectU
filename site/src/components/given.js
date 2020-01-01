import React from 'react'
import {connect} from 'react-redux';

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Given(props) {
    return (
        <div className={'skillbox plus'}>
            <h3>{props.title}{props.name}</h3>
            <h3>+</h3>
        </div>
    );
}
