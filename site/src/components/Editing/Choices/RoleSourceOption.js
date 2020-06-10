import React from 'react'
import {connect} from 'react-redux';

import Popup from '../../Popup/Popup'
import RoleSourceDetails from './RoleSourceDetails'

// import Knight from '../../../ImageStore/knight.png'

export default function RoleSourceOption(props) {

    // const buttons = ["role","source","who","skills","finish"]
    // if (document.getElementById("role-nav")){
    //     buttons.map(one => {
    //         let check = document.getElementById(one + "-nav")
    //         if (check.classList.contains("highlight-nav")){ 
    //             check.classList.remove("highlight-nav")
    //         }
    //     })
    //     document.getElementById(props.button + "-nav").classList.add("highlight-nav")
    // }

    // to remove highlight!
    const levelBox = document.getElementById("level-box")
    const skillsNumbers = document.getElementById("character-pane-skills-numbers")
    if (levelBox){
        if (levelBox.classList.contains("aware") == true){
            levelBox.classList.remove("aware")
            skillsNumbers.classList.add("hidden")
        }
    }

    function onClick(input){
        let elementPopup = document.getElementById('popup-' + props.elementId)
        elementPopup.classList.remove('hidden')
    }

    return (
        <div>
            <div className={"choice-box"} onClick={() => onClick(props.section)}>
                <h3 className={'edit-section-title'}>{props.section.title}</h3>
                <p className={'edit-tagline'}>{props.section.tagline}</p>
                <img src={props.img} className={'role-icon-img'} id={props.elementId + '-img'}/>
                {/* <p>Given Skills: Justice, Soulbind</p> */}
                {/* <div className={props.section.title + "-traits-dropdown"}>{props.section.traits[0].description} traits dropdown</div> */}
            </div>
            <Popup 
                popupContent={
                    <RoleSourceDetails 
                        details={props.section} 
                        img={props.img}
                        elementId={props.elementId}
                        rolesource={props.rolesource}
                    />
                }
                popupId={'popup-' + props.elementId}
                popupClass={'role-source-popup'}
            />
        </div>
    );
}