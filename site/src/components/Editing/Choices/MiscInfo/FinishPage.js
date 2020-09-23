import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// import { action } from '../actions'

export default function FinishPage(props) {
    // console.log("finish loaded")

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

    let name = props.name ? props.name : "Your nameless Hero"

    return (
        <div className={"choice-page"} id={'finish-page'}>
            <div className="choice-header-box">
                <h2>{name} is ready for adventure! Are you?</h2>
            </div>
            <p>Save your hero using the button above. Make sure not to lose the spawned 24-digit code so that you can find them again!</p>
            <div id={'create-pdf-button'}>
                Create PDF Character Sheet (not yet available)
            </div>
            <Link to={'/final/title'} className={'next-button-link'}>
                <h2 id={'character-view-button'}>
                    VIEW CHARACTER
                </h2>
            </Link>
        </div>
    );
}