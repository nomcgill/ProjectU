import React from 'react'
import {connect} from 'react-redux';

export default function Item(props) {

    const itemLabel = props.title + '-' + props.count

    const usesDamage = () => {
        if (props.info.damage){
            return (
            <span className={"damage heavy"} id={"damage-mod" + props.info.name}> Deal {props.info.damage}X.</span>
            )
        }
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

    const checkboxID = props.info.name + '-checkbox'

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

    function onItemClick(item){
        // console.log(item)
        let checkbox = document.getElementById(item)
        // console.log(props.info.name)
        // console.log(checkbox)
        // console.log(checkbox.checked)

        // const allItems = document.getElementsByClassName('info')
        // const allItemsArray = [...allItems]
        // const allSelectedItemsArray = []
        // allItemsArray.map((item) => {
        //     let singleInput = item.children[0]
        //     console.log(singleInput.checked)
        //     if (singleInput.checked){
        //         allSelectedItemsArray.push(item)
        //     }
        // })
        // console.log(allSelectedItemsArray)
    }

    return (
        <label className={"item " + props.class} id={props.info.name} htmlFor={checkboxID}>
            <input type={'checkbox'} name={itemLabel} onClick={() => onItemClick(checkboxID)} id={checkboxID} className={'edit-skills-checkbox'} />
            <div className={'editing-item-content'} id={itemLabel}>
                <p className={"item-name"}>
                    {props.info.name} &#x2771;
                    {isActive()}
                </p>
                {flavor(props.info)}
                {/* <p>{props.info.impact} {usesDamage()}</p> */}
            </div>
        </label>
    );
}
