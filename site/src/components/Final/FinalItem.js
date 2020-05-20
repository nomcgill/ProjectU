import React from 'react'
import {connect} from 'react-redux';

import './skill.css'

import GoldStar from '../../ImageStore/goldstar.png'
import GrayStar from '../../ImageStore/graystar.png'

// import {toggleItemFavorite} from '../../actions'

export default function FinalItem(props) {

    function toggleDetails(event){
        if (event.target.classList.contains('favorite-star') === false){
            console.log('twas NOT favorite star')
            console.log('toggle details of ' + props.skill.name)
        }
    }

    function toggleFavorite(event, acceptedStatus){
        props.toggleFavorite(event.target.parentNode.parentNode.parentNode.getAttribute('id'))
        console.log(props.skill)
    }

    let goldClass = (props.skill.favorite) ? '' : "hidden"
    let grayClass = (props.skill.favorite) ? 'hidden' : ""

    let actionColor = (props.skill.action === "Passive") ? '' : "red"

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
                    <p>{props.skill.category} > <span className={actionColor}>{props.skill.action}</span></p>
                    <p>{props.skill.skillLevel}</p>
                </div>
            </div>
            <div className={'skill-dropdown'}>
                <p className={'skill-condition'}>{props.skill.flavor}</p>
                <p className={'skill-result heavy'}>{props.skill.impact}</p>
            </div>         
        </div>
    )

}
