import React from 'react'
import {connect} from 'react-redux';

import NextButton from '../NextButton.js'

// import { action } from '../actions'

export default function CharacterPage(props) {

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

    return (
        <div className={"name-page choice-page"}>
            <div className="choice-header-box">
                <h2>What is your NAME?</h2>
            </div>
            <div className="choice-header-box">
                <h2>What LEVEL are you?</h2>
            </div>
            <div>
                <h2 className={'background-header'}>Background</h2>
                <p className={'background-header'}>(Narrative Only)</p>
                <h3 className={'description-header'}>Appearance: </h3>
                <input className={"description-box"}></input>
            </div>

            <NextButton next={props.next} />
        </div>
    );
}