import React from 'react'
import {connect} from 'react-redux';

// import { action } from '../actions'
import IntersectionItem from './IntersectionItem'

export default function IntersectionOption(props) {

    // console.log(props.skill)

    function itemClicked(){
        console.log(props.skill.name + ' clicked')
    }
    // console.log(props)
    //work the checkboxes here
    return (
        <div>
            <IntersectionItem 
                class={'intersection-option ' + props.notAvailable}
                count={props.count}
                info={props.skill}
                title={props.title}
                updateSkills={(chosenSkillTitles, checkboxID, alreadyHave) => props.updateSkills(chosenSkillTitles, checkboxID, alreadyHave)}
                updateCheckbox={(chosenDivs) => props.updateCheckbox(chosenDivs)}
                alreadyHave={props.alreadyHave}
            />
        </div>
    )

}