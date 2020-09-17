import React from 'react'
import {connect} from 'react-redux';

import RoleSourceOption from './RoleSourceOption'
import NextButton from '../NextButton.js'

// import Knight from '../../../ImageStore/knight.jpg'
import Knight from '../../../ImageStore/knight.png'
import Elementalist from '../../../ImageStore/elementalist.png'
import BountyHunter from '../../../ImageStore/bountyhunter.png'
import Morph from '../../../ImageStore/morph.png'
import Sayer from '../../../ImageStore/sayer.png'
import Shade from '../../../ImageStore/shade.png'
import Tactician from '../../../ImageStore/tactician.png'
import Chakrah from '../../../ImageStore/chakrah.png'
import Demonic from '../../../ImageStore/demonic.png'
import Divine from '../../../ImageStore/divine.png'
import Nature from '../../../ImageStore/nature.png'

export default function ChoicePage(props) {

    function findImg(title){
        return (
            title === "Knight" ? Knight :
            title === "Elementalist" ? Elementalist :
            title === "Bounty Hunter" ? BountyHunter :
            title === "Morph" ? Morph :
            title === "Sayer" ? Sayer :
            title === "Shade" ? Shade :
            title === "Tactician" ? Tactician :
            title === "Chakrah" ? Chakrah :
            title === "Demonic" ? Demonic :
            title === "Divine" ? Divine :
            title === "Nature" ? Nature :
            ''
        )
    }

    function elementId(title){
        return (
            title === "Bounty Hunter" ? "Bounty-Hunter" : title
        )
    }

    const eachBox = (props.info) ? props.info.map(section => 
        <RoleSourceOption 
            key={section.title + "-key"}
            section={section}
            button={props.button}
            img={findImg(section.title)}
            elementId={elementId(section.title)}
            rolesource={props.rolesource}
        />
    ) : ""

    const buttons = ["role-skill-","source-skill-"]
    if (document.getElementById("source-skill-nav")){
        buttons.map(one => {
            let check = document.getElementById(one + "nav")
            if (check.classList.contains("highlight-skill-tab")){ 
                check.classList.remove("highlight-skill-tab")
            }
        })
        if (props.button === "source-skill-" || props.button === "role-skill-"){
            document.getElementById(props.button + "nav").classList.add("highlight-skill-tab")
        }
    }

    return (
        <div className={"choice-page"}>
            {/* <div id={"dimmer"}/> */}
            <div className="choice-header-box">
                <h2>{props.header}</h2>
            </div>
            <div className={'roll-source-edit-grid ' + props.rolesource}>
                {eachBox}
            </div>
            <NextButton next={props.next} />
        </div>
    );
}