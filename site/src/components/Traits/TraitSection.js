import React from 'react'
import {connect} from 'react-redux';
import Trait from './Trait.js'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function TraitSection(props) {
    return (
        <div className={"trait-section"}>
            <h3 className={"section-head"}>Traits</h3>
            <div id={"traits-row"}>
                <Trait
                    intro={"Source: "}
                    title={props.source.title} 
                    info={props.source}
                    side={"left"}
                />
                <Trait
                    intro={"Role: "}
                    title={props.role.title} 
                    info={props.role}
                    side={"right"}
                />
            </div>
        </div>
    );
}