import React from 'react'
import {connect} from 'react-redux';

import './skill.css'

import GoldStar from '../../ImageStore/goldstar.png'
import GrayStar from '../../ImageStore/graystar.png'

// import {toggleItemFavorite} from '../../actions'

export default function FinalItem(props) {

    function toggleDetails(event){
        if (event.target.classList.contains('favorite-star') === false){
            let itemName = props.skill.name
            props.toggleOpen(itemName)
        }
    }

    function toggleFavorite(event, acceptedStatus){
        let itemName = event.target.parentNode.parentNode.parentNode.getAttribute('id')
        props.toggleFavorite(itemName)
    }

    let goldClass = (props.skill.favorite) ? '' : "hidden"
    let grayClass = (props.skill.favorite) ? 'hidden' : ""
    let actionColor = (props.skill.action === "Passive") ? '' : "red"
    let hideDropdown = (props.skill.open) ? "" : "hidden"
    let shownCategory = 
        (props.skill.category === "Intersection") ? props.intersection :
        (props.skill.category === "Role") ? props.role :
        (props.skill.category === "Source") ? props.source : ""

    const allWords = () => {
        let name = (props.skill.name) ? String(props.skill.name + ' ') : ''
        let action = (props.skill.action) ? String(props.skill.action + ' ') : ''
        let skillLevel = (props.skill.skillLevel) ? String(props.skill.skillLevel + ' ') : ''
        let category = (props.skill.category) ? String(shownCategory + ' ') : ''
        let damage = (props.skill.damage) ? String(props.skill.damage + ' ') : ''
        let flavor = (props.skill.flavor) ? String(props.skill.flavor + ' ') : ''
        let impact = (props.skill.impact) ? String(props.skill.impact + ' ') : ''
        let damageWord = (props.skill.damage) ? ("damage ") : ''
        let itemText = name + action + skillLevel + category + damage + flavor + impact + damageWord
        // console.log(itemText)
        props.gatherItemText(props.skill.name, itemText.toUpperCase())
    }

    if (!props.skill.fullText){
        allWords()
    }
    // console.log(allWords())
    // name: "Wrath",
    // action: "Passive",
    // skillLevel: "Given",
    // category: "Intersection",
    // damage: false,
    // flavor: "You are invigorated by your Power Source when your strikes land.",
    // impact: "Add 1X damage on Successes and Complete Successes for Muscle actions.",
    // favorite: false

    return (
        <div className={'one-skill'} id={props.skill.name}>
            <div className={'skill-head-pane skill-header-open'} onClick={e => toggleDetails(e)}>
                <div className={'skill-head-pane-top'}>
                    <h3>{props.skill.name}</h3>
                    <img src={GoldStar} className={'item-gold-star favorite-star ' + goldClass} onClick={e => toggleFavorite(e, true)} />
                    <img src={GrayStar} className={'item-gray-star favorite-star ' + grayClass} onClick={e => toggleFavorite(e, false)} />
                </div>
                <div className={'skill-pane-info'}>
                    <p>{shownCategory} > <span className={actionColor}>{props.skill.action}</span></p>
                    <p>{props.skill.skillLevel}</p>
                </div>
            </div>
            <div className={'skill-dropdown ' + hideDropdown}>
                <p className={'skill-condition'}>{props.skill.flavor}</p>
                <p className={'skill-result heavy'}>{props.skill.impact}</p>
            </div>         
        </div>
    )

}
