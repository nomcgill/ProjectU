import React from 'react'
import {connect} from 'react-redux';

import NextButton from '../NextButton.js'
import IntersectionBranch from './IntersectionBranch'

import './intersectionpage.css'

// import { action } from '../actions'

export default function IntersectionPage(props) {
    
    // to remove highlight!
    const levelBox = document.getElementById("level-box")
    const skillsNumbers = document.getElementById("character-pane-skills-numbers")
    if (levelBox){
        if (levelBox.classList.contains("aware") == true){
            levelBox.classList.remove("aware")
            skillsNumbers.classList.add("hidden")
        }
    }

    function togglePaths(){
        // console.log("click")

        // document.getElementById("intersection-peek-plus").classList.toggle("hidden")
        // document.getElementById("intersection-peek-minus").classList.toggle("hidden")
        document.getElementById("intersection-peek-bar").classList.toggle("gray")
        document.getElementById("intersection-peek-bar").classList.toggle("whited")
        // document.getElementById("intersection-peek-box").classList.toggle("open-box")
        document.getElementById("intersection-content").classList.toggle("hidden")
   
    }

    const intersectionBranches = (props.info) ? props.info.map((branch, count) =>
        <IntersectionBranch 
            key={"intersection-" + count}
            count={count}
            info={branch}
        />
    ) : ""

    return (
        <div className={"intersection-page choice-page"}>
            <div className="choice-header-box">
                <h2>{props.header}</h2>
                <h2>Not available until level 6.</h2>
                <div id={"intersection-peek-box"}>
                    <div id={"intersection-peek-bar"} className={"whited"} onClick={() => togglePaths()}>
                        <h2>Peek ahead?</h2>
                        {/* <h2 id={"intersection-peek-plus"}>+</h2>
                        <h2 id={"intersection-peek-minus"} className={"hidden"}>-</h2> */}
                    </div>
                    <div id={"intersection-content"} className={"hidden"}>
                        {intersectionBranches}
                    </div>
                </div>
            </div>
            <NextButton next={props.next} />
        </div>
    );
}