import React from 'react'
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import FinalItem from './FinalItem'

export default function FinalBody(props) {
    
    let sortedSkills = () => {

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

            let noDuplicatesAlphabetizedSkills = []

            //Loop through each of the object in the original array

            alphabetizedSkills.forEach(function(item) {
                // If noDuplicatesAlphabetizedSkills .length is zero then just push the first element
                // else in noDuplicatesAlphabetizedSkills find if a json object already exist which have same
                // type_id & full_empty. If it does not exist it will return undefined
                if (noDuplicatesAlphabetizedSkills.length !== 0) {
                    var _isPresent = noDuplicatesAlphabetizedSkills.find(function(secItem) {
                        // the below line is for if checking for duplicates of more than one key value
                        // return secItem.name === item.name && secItem.full_empty === item.full_empty
                        return secItem.name === item.name
                    })
                    // If element is not present then push this json pbject
                    if (_isPresent == undefined) {
                        noDuplicatesAlphabetizedSkills.push(item)
                    }
                } else {  // this will execute only once when noDuplicatesAlphabetizedSkills length is 0

                    noDuplicatesAlphabetizedSkills.push(item)
                }
            })

            // console.log(noDuplicatesAlphabetizedSkills)

            return noDuplicatesAlphabetizedSkills.map((skill, key) => 
                <FinalItem
                    skill={skill}
                    toggleFavorite={props.toggleFavorite}
                    toggleOpen={props.toggleOpen}
                    gatherItemText={props.gatherItemText}
                    // currentBackground ={props.currentBackground}
                    role={props.role}
                    source={props.source}
                    intersection={props.intersection}
                    key={key}
                    level={props.level}
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
            <div id={'final-skills-list'}>
                {sortedSkills()}
            </div>
            <div id={"bottom-pane"}>
                    ©2020 ProjectU | All Rights Reserved
            </div>  
        </div>
    )
}
