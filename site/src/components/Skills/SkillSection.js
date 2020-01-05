import React from 'react'
import {connect} from 'react-redux';

import Skills from './Skills.js'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function SkillSection(props) {
    return (
        <div className={'skill-section'}>
            <h3 className={"section-head"}>Skills</h3>
            <Skills 
                source={props.source}
                role={props.role}
                info={props.skills.basic}
            />
            <Skills 
                source={props.source}
                role={props.role}                
                info={props.skills.advanced}
            />
            <Skills 
                source={props.source}
                role={props.role}
                info={props.skills.master}
            />
        </div>  
    );
}

            
            
            