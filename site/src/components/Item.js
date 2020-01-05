import React from 'react'
import {connect} from 'react-redux';

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Item(props) {

    let active = props.info.action ? 'red' : 'black';

    return (
        <div className={"item"} id={props.info.id}>
            <p className={"item-name"}>
                {props.info.name}
                <span> &#x2771; {props.info.action}</span>
            </p>
            <p>
                {props.info.description}
                <span className={"damage"}> Deal {props.info.damage}.</span>
            </p>
        </div>
    );
}
