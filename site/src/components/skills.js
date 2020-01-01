import React from 'react'
import {connect} from 'react-redux';

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Skills(props) {
    return (
        <div>
            <h2>
                {props.info.title}
            </h2>
            <p className={props.info.title}>
                {props.info.moves}
            </p>
        </div>
    );
}
