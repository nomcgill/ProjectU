import React from 'react'
import {connect} from 'react-redux';

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

    function onClick(){
        console.log("clicked")
    }

    return (
        <div className={"choice-box"} onClick={() => onClick()}>
            <h3>{props.section.title}</h3>
            <p>{props.section.description}</p>
            <p>Given Skills: Justice, Soulbind</p>
            {/* <div className={props.section.title + "-traits-dropdown"}>{props.section.traits[0].description} traits dropdown</div> */}
        </div>
    );
}