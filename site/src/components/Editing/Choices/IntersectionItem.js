import React from 'react'
import {connect} from 'react-redux';

import PleaFormat from '../../PleaFormat'

export default function Item(props) {

    let dashedName = props.info.name.replace(/ /g, "-");
    
    const itemLabel = props.dashedName

    const usesDamage = () => {
        // if (props.info.damage){
        //     return (
        //     <span className={"damage heavy"} id={"damage-mod" + dashedName}> Deal {props.info.damage}X.</span>
        //     )
        // }
    }

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

    let flavor = (skill) => {
        let flavor = skill.flavor ? skill.flavor : '' 
        let flavor2 = skill.flavor2 ? skill.flavor2 : false
        let flavor3 = skill.flavor3 ? skill.flavor3 : false
        let flavor4 = skill.flavor4 ? skill.flavor4 : false
        let impact = skill.impact ? skill.impact : ''

        if (flavor4){
            return (
                <div className={'skill-description'}>
                    <p className={'skill-description-part'}>{flavor}</p>
                    <p className={'skill-description-part'}>{flavor2}</p>
                    <p className={'skill-description-part'}>{flavor3}</p>
                    <p className={'skill-description-part'}>{flavor4}</p>
                    <p className={'skill-description-part'}>{impact} {usesDamage()}</p>
                </div>
            )
        }
        else if (flavor3){
            return (
                <div className={'skill-description'}>
                    <p className={'skill-description-part'}>{flavor}</p>
                    <p className={'skill-description-part'}>{flavor2}</p>
                    <p className={'skill-description-part'}>{flavor3}</p>
                    <p className={'skill-description-part'}>{impact} {usesDamage()}</p>
                </div>
            )
        }
        else if (flavor2){
            return (
                <div className={'skill-description'}>
                    <p className={'skill-description-part'}>{flavor}</p>
                    <p className={'skill-description-part'}>{flavor2}</p>
                    <p className={'skill-description-part'}>{impact} {usesDamage()}</p>
                </div>
            )
        }
        else {
            return (
                <div className={'skill-description'}>
                    <p className={'skill-description-part'}>{flavor}</p>
                    <p className={'skill-description-part'}>{impact} {usesDamage()}</p>
                </div>
            )
        }
    }

    function onItemClick(item, alreadyHave){
        // console.log(item)
        // console.log(props.info)
        let checkbox = document.getElementById(item)
        // console.log(dashedName)
        // console.log(checkbox)
        // console.log(checkbox.checked)

        const allItems = document.getElementsByClassName('item')
        // console.log(allItems)
        const allItemsArray = [...allItems]
        const chosenSkillTitles = []
        const chosenDivs = []
        allItemsArray.map((item) => {
            // console.log(allItemsArray)
            let singleInput = item.children[0]
            // console.log(singleInput.checked)
            if (singleInput.checked){
                chosenDivs.push(item)
                chosenSkillTitles.push(item.id)
                // allSelectedItemsArray.push(props.info)
            }
        })
        // console.log(allSelectedItemsArray)
        props.updateSkills(chosenSkillTitles, checkboxID, alreadyHave)
        props.updateCheckbox(chosenDivs)
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
    // console.log(props)
    return (
        <label className={"item " + props.class} id={dashedName} htmlFor={checkboxID}>
            <input type={'radio'} name={props.info.skillLevel + '-intersection-radio'} onClick={() => onItemClick(checkboxID, props.alreadyHave)} id={checkboxID} className={'edit-skills-checkbox'} />
            <div className={'intersection-item-content'} id={checkboxID + '-div'}>
                <p className={"item-name"}>
                    {props.info.name}
                    <br />
                    {isActive()}
                </p>
                {flavor(props.info)}
                {plea}
            </div>
        </label>
    );
}
