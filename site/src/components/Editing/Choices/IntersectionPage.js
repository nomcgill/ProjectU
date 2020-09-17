import React from 'react'
import {connect} from 'react-redux';

import NextButton from '../NextButton.js'
import IntersectionInfo from './IntersectionInfo'

import './intersectionpage.css'

// import { action } from '../actions'

export default function IntersectionPage(props) {
    console.log(props)
    
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


    let intersection = 'Warlock'

    function header(){
        if (props.level > 5){
            return (
                "As a " + props.role + " who draws power from " + props.source + " energies, you've gained the unique aptitudes of a " + intersection + "."
            )
        }
        else {
            return (
                'At levels 6 and 11, Heroes have the choice of a unique skill based on the intersection of your Role and Source.'
            )
        }
    }

    // "As a " + props.role + " who draws power from " + props.source + " energies, you've gained the unique aptitudes of a " + intersection + "."

    // THEY HAVE AN INTERSECTION
    if (props.info && props.role && props.source && props.level > 5){
        console.log("have intersection")
        return (
            <div className={"intersection-page choice-page"}>
                <div className="choice-header-box">
                    <h2>Intersection: {intersection}</h2>
                    <p>{header()}</p>
                    <div id={"intersection-content"} className={""}>
                            <IntersectionInfo />
                    </div>
                </div>
                <NextButton next={props.next} />
            </div>
        )
    }

    // THEY DON'T HAVE AN INTERSECTION
    else {
        console.log("don't have intersection")
        return (
            <div className={"intersection-page choice-page"}>
                <div className="choice-header-box">
                    <h2>Intersection</h2>
                    <p id="intersection-headline">{header()}</p>
                    <div id={"intersection-peek-box"}>
                        <div id={"intersection-peek-bar"} className={"whited"} onClick={() => togglePaths()}>
                            <h2>Peek ahead?</h2>
                        </div>
                        <div id={"intersection-content"} className={"hidden"}>
                            <IntersectionInfo />
                        </div>
                    </div>
                </div>
                <NextButton next={props.next} />
            </div>
        );
    }
}