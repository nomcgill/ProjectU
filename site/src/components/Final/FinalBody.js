import React from 'react'
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import FinalItem from './FinalItem'

export default function FinalBody(props) {
    
    let sortedSkills = function alphabeticalSortSkills(){

        if (props.shownSkills.length > 0){
            const skillNames = []
            props.shownSkills.map(skill => {
                skillNames.push(skill.name)
            })
            const alphabetizedNames = skillNames.sort()

            const alphabetizedSkills = [] 
            alphabetizedNames.map(name => {
                props.shownSkills.map(skill => {
                    if (name === skill.name){
                        alphabetizedSkills.push(skill)
                    }
                })
            })

            return alphabetizedSkills.map((skill, key) => 
                <FinalItem
                    skill={skill}
                    toggleFavorite={props.toggleFavorite}
                    toggleOpen={props.toggleOpen}
                    gatherItemText={props.gatherItemText}
                    role={props.role}
                    source={props.source}
                    intersection={props.intersection}
                    key={key}
                />
            )
        }
        else {
            return (
                <div id={'empty-skills-body'}>
                    0 Skills to display. Either broaden your filters or manage your Skills.
                </div>
            )
        }
    }

    return (
        <div id={'final-body'}>
            <div id={'skills-header'}>
                <h2>SKILLS</h2>
                <Link to={'/editing/skills/roleskillschoice'}>
                    <p id={'manage-skill-choices'}>Manage</p>
                </Link>
            </div>
            {sortedSkills()}
        </div>
    )
}
