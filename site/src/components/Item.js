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
        if (props.info.action){
            return (
                <span className={"red"}> &#x2771; {props.info.action}</span>
            )
        }
        else {
            return (
                <span> &#x2771; Passive</span>
            )
        }
    }

    const checkboxID = props.info.name + '-checkbox'

    function onItemClick(item){
        console.log(item)
        let checkbox = document.getElementById(item)
        // console.log(props.info.name)
        // console.log(checkbox)
        console.log(checkbox.checked)

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
                    {props.info.name}
                    {isActive()}
                </p>
                <p>
                    {props.info.description}
                    {usesDamage()}
                    {/* <span className={"damage"} id={"damage-mod" + props.info.name}> Deal {props.info.damage}.</span> */}
                </p>
            </div>
        </label>
    );
}
