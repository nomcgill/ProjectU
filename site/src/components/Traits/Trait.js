import React from 'react'
import {connect} from 'react-redux';

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Trait(props) {
    return (
        <div className={'skillbox traitbox plus'}>
            <h3>
                <span 
                  className={props.intro + '-title'}>
                  {props.intro}
                </span>
                  {props.title}
            </h3>
            <h3 className={"plus-sign"}>
                +
            </h3>
            <h3 className={"minus-sign hidden"}>
                -
            </h3>
            <p className={props.intro + "-info hidden"}>
                {props.traits.description}
            </p>
        </div>
    );
}
