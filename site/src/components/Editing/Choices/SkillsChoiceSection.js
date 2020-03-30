import React from 'react'
import {connect} from 'react-redux';

// import Skills from './Skills.js'
import EditSkillsSection from './EditSkillsSection'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function SkillsChoiceSection(props) {
    console.log(props.info.skills)
    return (
        <div className={'skill-section'}>
            <EditSkillsSection
                title={"Basic"}
                info={props.info.skills.basic}
                role={props.info.title}
            />
            <EditSkillsSection
                title={"Advanced"}
                info={props.info.skills.advanced}
                role={props.info.title}
            />
            <EditSkillsSection
                title={"Master"} 
                info={props.info.skills.master}
                role={props.info.title}
            />
        </div>  
    );
}