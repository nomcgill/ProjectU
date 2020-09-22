import React from 'react'
import {connect} from 'react-redux';

import PleaFormat from '../PleaFormat'

import './skill.css'

import GoldStar from '../../ImageStore/goldstar.png'
import GrayStar from '../../ImageStore/graystar.png'
import { action } from '../../actions';

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
        // debugger;
        let name = (props.skill.name) ? String(props.skill.name + ' ') : ''
        let action = (props.skill.action) ? String(props.skill.action + ' ') : ''
        let skillLevel = (props.skill.skillLevel) ? String(props.skill.skillLevel + ' ') : ''
        let category = (props.skill.category) ? String(shownCategory + ' ') : ''
        let damage = (props.skill.damage) ? String(props.skill.damage + ' ') : ''
        let flavor = (props.skill.flavor) ? String(props.skill.flavor + ' ') : ''
        let impact = (props.skill.impact) ? String(props.skill.impact + ' ') : ''
        let impact2 = (props.skill.impact2) ? String(props.skill.impact2 + ' ') : ''
        let damageWord = (props.skill.damage) ? ("damage ") : ''
        let itemText = name + action + skillLevel + category + damage + flavor + impact + damageWord + impact2
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

    let flavor = typeof props.skill.flavor === 'string' ? props.skill.flavor : 'Choice must be made.'
    let impact = typeof props.skill.impact === 'string' ? props.skill.impact : 'Choice must be made.'
    let impact2 = props.skill.impact2 ? props.skill.impact2 : ''
    let demonicOriginNote = props.skill.demonicOriginNote && props.level <= 5 ? props.skill.demonicOriginNote : ''
    // console.log(props.skill)

    function pleaFormat(plea){
        return (
            <PleaFormat plea={plea} />
        )
    }

    let name = props.skill.beastName ? props.skill.beastName : props.skill.name
    // console.log(props.skill)
    let bountyHunterSpecialization = props.skill.bountyCategory ? '(' + props.skill.bountyCategory + ' spec.)' : '' 
    let plea = props.skill.plea ? pleaFormat(props.skill.plea) : ''
    // console.log(props.skill.plea)
    // console.log(props)
    return (
        <div className={'one-skill'} id={name}>
            <div className={'skill-head-pane skill-header-open'} onClick={e => toggleDetails(e)}>
                <div className={'skill-head-pane-top'}>
                    <h3>{props.skill.name} {bountyHunterSpecialization}</h3>
                    <img src={GoldStar} className={'item-gold-star favorite-star ' + goldClass} onClick={e => toggleFavorite(e, true)} />
                    <img src={GrayStar} className={'item-gray-star favorite-star ' + grayClass} onClick={e => toggleFavorite(e, false)} />
                </div>
                <div className={'skill-pane-info'}>
                    <p>{shownCategory} > <span className={actionColor}>{props.skill.action}</span></p>
                    <p>{props.skill.skillLevel}</p>
                </div>
            </div>
            <div className={'skill-dropdown ' + hideDropdown}>
                <p className={'skill-result heavy red'}>{demonicOriginNote}</p>
                <p className={'skill-condition'}>{flavor}</p>
                <p className={'skill-result heavy'}>{impact}</p>
                <p className={'skill-result heavy'}>{impact2}</p>
                {plea}
            </div>         
        </div>
    )

}
