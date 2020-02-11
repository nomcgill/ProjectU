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

    return (
        <div className={"choice-page"}>
            <div className="choice-header-box">
                <h2>NAME is ready for adventure! Are you?</h2>
            </div>
            <div id={'create-pdf-button'}>
                Create PDF Character Sheet
            </div>
            <Link to={`/final`}>
                <div id={'character-view-button'}>
                    View Character
                </div>
            </Link>
        </div>
    );
}