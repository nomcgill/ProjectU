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

    let maximum = props.levelingNumbers
    let basicMax = maximum.Basic
    let advancedMax = maximum.Advanced ? maximum.Advanced : 0
    let masterMax = maximum.Master ? maximum.Master : 0

    return (
        <div className={'skill-section'}>
            <EditSkillsSection
                title={"Basic"}
                info={props.info.skills.basic}
                role={props.info.title}
                numberChosen={props.currentBasicChosen}
                available={basicMax}
                updateSkills={(chosenSkillTitles) => props.updateSkills(chosenSkillTitles, props.info.title)}
                checkmarkWhatsSeen={()=> props.checkmarkWhatsSeen()}
                level={props.level}
            />
            <EditSkillsSection
                title={"Advanced"}
                info={props.info.skills.advanced}
                role={props.info.title}
                numberChosen={props.currentAdvancedChosen}
                available={advancedMax}
                updateSkills={(chosenSkillTitles) => props.updateSkills(chosenSkillTitles, props.info.title)}
                checkmarkWhatsSeen={()=> props.checkmarkWhatsSeen()}
                level={props.level}
            />
            <EditSkillsSection
                title={"Master"} 
                info={props.info.skills.master}
                role={props.info.title}
                numberChosen={props.currentMasterChosen}
                available={masterMax}
                updateSkills={(chosenSkillTitles) => props.updateSkills(chosenSkillTitles, props.info.title)}
                checkmarkWhatsSeen={()=> props.checkmarkWhatsSeen()}
                level={props.level}
            />
        </div>  
    );
}