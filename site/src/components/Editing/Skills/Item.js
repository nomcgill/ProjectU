import React from 'react'
import {connect} from 'react-redux';

import PleaFormat from '../../PleaFormat'

export default function Item(props) {

    const itemLabel = props.title + '-' + props.count

    let dashedName = props.info.name.replace(/ /g, "-");

    const usesDamage = () => {
        // if (props.info.damage){
        //     return (
        //     <span className={"damage heavy"} id={"damage-mod" + dashedName}> Deal {props.info.damage}X.</span>
        //     )
        // }
    }

    let action = props.info.action

    let actionType =
        action === "Passive" ? <span className={"action-passive"}> Passive</span> :
        typeof action === "string" ? <span className={"action-status"}> {action}</span> :
        action.length === 2 ? <span className={"action-status"}> {action[0]}/{action[1]}</span> :
        <span className={"action-passive"}> Other</span>

    const isActive = () => {
        if (props.info.action !== "Passive"){
            return (
                <span className={"action-status"}> {props.info.action}</span>
            )
        }
        else {
            return (
                <span className={"action-passive"}> Passive</span>
            )
        }
    }

    const checkboxID = dashedName + '-checkbox'
    // console.log(props)
    let descriptionClassName = 'edit-skill-description-part'
    let elementList = props.info.elementList ? <p className={descriptionClassName + ' edit-element-list'}>{props.info.elementList}</p> : ''
    // console.log(elementList)

    let flavor = (skill) => {
        let flavor = skill.flavor ? <p className={descriptionClassName}>{skill.flavor}</p> : '' 
        let flavor2 = skill.flavor2 ? <p className={descriptionClassName}>{skill.flavor2}</p> : ''
        let flavor3 = skill.flavor3 ? <p className={descriptionClassName}>{skill.flavor3}</p> : ''
        let flavor4 = skill.flavor4 ? <p className={descriptionClassName}>{skill.flavor4}</p> : ''
        let impact = skill.impact ? <p className={descriptionClassName}>{skill.impact}</p> : ''
            return (
                <div className={'skill-description'}>
                    {elementList}
                    {flavor}
                    {flavor2}
                    {flavor3}
                    {flavor4}
                    {impact}
                </div>
            )
        
    }

    function onItemClick(item){
        // console.log(item)
        // console.log(props.info)
        // let checkbox = document.getElementById(item)
        // console.log(dashedName)
        // console.log(checkbox)
        // console.log(checkbox.checked)

        const allItems = document.getElementsByClassName('info')
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
        // console.log(allSelectedItemsArray)
        props.updateSkills(chosenSkillTitles)
        
        // debugger;
    }

    function pleaFormat(plea){
        return (
            <PleaFormat 
                plea={plea}
                edit={true}
            />
        )
    }
    let plea = props.info.plea ? pleaFormat(props.info.plea) : ''
    let specialization = props.info.bountyCategory ? <span className={''}>{'(' + props.info.bountyCategory + ' spec.)'}</span> : ''


    return (
        <label className={"item " + props.class} id={dashedName} htmlFor={checkboxID}>
            <input type={'checkbox'} name={itemLabel} onClick={() => onItemClick(checkboxID)} id={checkboxID} className={'edit-skills-checkbox'} />
            <div className={'editing-item-content'} id={itemLabel}>
                <p className={"item-name"}>
                    {props.info.name} {specialization}
                    <br />
                    {actionType}
                </p>
                {flavor(props.info)}
                {plea}
                {/* <p>{props.info.impact} {usesDamage()}</p> */}
            </div>
        </label>
    );
}
