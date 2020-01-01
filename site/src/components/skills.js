import React from 'react'
import {connect} from 'react-redux';

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Skills(props) {
    return (
        <div className={props.info.title + '-box skillbox'}>
            <h2>
                {props.info.title}
            </h2>
            <div className={'selectors'}>
                <p className={'move-source-button'}>{props.choices.source}</p>
                <p className={'move-role-button'}>{props.choices.role}</p>
                <p className={'move-all-button'}>All</p>
            </div>
            <p className={'skill-list'}>
                {props.info.moves}
            </p>
        </div>
    );
}
