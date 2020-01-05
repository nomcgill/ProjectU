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
                <Trait
                    intro={"Source: "}
                    title={props.source.title} 
                    traits={props.source.traits}
                />
                <Trait
                    intro={"Role: "}
                    title={props.role.title} 
                    traits={props.role.traits}
                />
            </div>
    );
}