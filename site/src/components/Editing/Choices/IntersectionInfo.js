import React from 'react'
import {connect} from 'react-redux';

// import { action } from '../actions'
import IntersectionOption from './IntersectionOption'
import { currentSkillsStateUpdate } from '../../../actions';

export default function IntersectionInfo(props) {

    // console.log(props)
    let  filterCurrentIntersectionSkills = props.props.currentSkills.filter(currentSkill=>
        currentSkill.category === "Intersection"
    )

    let skills = props.intersection.traits
    let advancedSkills = skills.filter(skill => skill.skillLevel === "Advanced")
    let masterSkills = skills.filter(skill => skill.skillLevel === "Master")

    function oneAtATimeCheckbox(previousSkillSTitles, checkboxID, alreadyHave){
        // console.log(document.getElementById(checkboxID).checked)
        let selectedName = checkboxID.substring(0, checkboxID.length - 9)
        alreadyHave.forEach(skill=>{
            let dashedSkillName = skill.name.replace(/ /g, "-")
            if (selectedName === dashedSkillName){
                document.getElementById(checkboxID).checked = false
            }
        })
        const allItems = document.getElementsByClassName('item')
        const allItemsArray = [...allItems]
        const chosenSkillTitles = []
        allItemsArray.map((item) => {
            let singleInput = item.children[0]
            // console.log(singleInput.checked)
            if (singleInput.checked){
                chosenSkillTitles.push(item.id)
                // allSelectedItemsArray.push(props.info)
            }
        })
        props.updateSkills(chosenSkillTitles)
        // console.log(document.getElementById(checkboxID).checked)

    }

    function notAvailable(skillLevel){
        if (props.props.level < 6){
            return "non-select"
        }
        if (props.props.level < 11 && skillLevel === "Master"){
            return "non-select"
        }
    }

    // function updateCheckboxVisual(chosenSkillTitles){
    function updateCheckboxVisual(chosenDiv){


        // console.log(chosenSkillTitles)

        // let item = chosenDiv[0]
        // console.log(item)
        // if (item) {
        //     let div = item.children[1]
        //     div.classList.add('intersection-selected')
        //     console.log(item.children[1])
        // }
    }


    return (
        <div>
            {/* <h2>{intersection.title}</h2> */}
            <div className={"intersection-section"}>
                <h3 className={'intersection-path-header'}>Level 6 Path</h3>
                <IntersectionOption
                    skill={advancedSkills[0]}
                    count={0}
                    updateSkills={(chosenSkillTitles, checkboxID, alreadyHave) => oneAtATimeCheckbox(chosenSkillTitles, checkboxID, alreadyHave)}
                    notAvailable={notAvailable("Advanced")}
                    updateCheckbox={(chosenDivs) => updateCheckboxVisual(chosenDivs)}
                    alreadyHave={filterCurrentIntersectionSkills}
                    />
                <IntersectionOption
                    skill={advancedSkills[1]}
                    count={1}
                    updateSkills={(chosenSkillTitles, checkboxID, alreadyHave) => oneAtATimeCheckbox(chosenSkillTitles, checkboxID, alreadyHave)}
                    notAvailable={notAvailable("Advanced")}
                    updateCheckbox={(chosenDivs) => updateCheckboxVisual(chosenDivs)}
                    alreadyHave={filterCurrentIntersectionSkills}
                />
            </div>
            <div className={"intersection-section"}>
                <h3 className={'intersection-path-header'}>Level 11 Path</h3>
                <IntersectionOption 
                    skill={masterSkills[0]}
                    count={0}
                    updateSkills={(chosenSkillTitles, checkboxID, alreadyHave) => oneAtATimeCheckbox(chosenSkillTitles, checkboxID, alreadyHave)}
                    notAvailable={notAvailable("Master")}      
                    updateCheckbox={(chosenDivs) => updateCheckboxVisual(chosenDivs)}   
                    alreadyHave={filterCurrentIntersectionSkills}
                />
                <IntersectionOption 
                    skill={masterSkills[1]}
                    count={1}
                    updateSkills={(chosenSkillTitles, checkboxID, alreadyHave) => oneAtATimeCheckbox(chosenSkillTitles, checkboxID, alreadyHave)}
                    notAvailable={notAvailable("Master")}      
                    updateCheckbox={(chosenDivs) => updateCheckboxVisual(chosenDivs)}
                    alreadyHave={filterCurrentIntersectionSkills}              
                />
            </div>
        </div>
    );
}