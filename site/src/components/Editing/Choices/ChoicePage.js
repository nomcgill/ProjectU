import React from 'react'
import {connect} from 'react-redux';

import RoleSourceOption from './RoleSourceOption'
import NextButton from '../NextButton.js'

// import { action } from '../actions'

export default function ChoicePage(props) {

    // debugger;
    // console.log(props.todo(true))
    // debugger;
    const eachBox = (props.info) ? props.info.map(section => 
        <RoleSourceOption 
            key={section.title + "-key"}
            section={section}
            button={props.button}
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
            {eachBox}
            <NextButton next={props.next} />
        </div>
    );
}