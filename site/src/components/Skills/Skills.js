import React from 'react'
import {connect} from 'react-redux';

import Item from '../Item.js' 

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Skills(props) {

    const sourceTitle = props.source.title
    const roleTitle = props.role.title
    const theTitle = props.info.title


    const items = props.info.moves.map((item, count) =>
        <Item 
            id={"intersection-info"}
            key={"intersection-" + count}
            class={theTitle + "-info info none skills-item-" + count}
            count={count}
            info={item}
        />
    )

    function toggleDetails(){
        document.getElementById(theTitle + "-line").classList.toggle("gray")
        document.getElementById(theTitle + "-line").classList.toggle("whited")
        document.getElementById(theTitle + "-box").classList.toggle("open-box")   
        document.getElementById(theTitle + "-all-button").classList.toggle("all-selected")
        document.getElementById(theTitle + "-how-many-pane").classList.toggle("none")   
        // document.getElementsByClassName("intersection-item-0").childNodes[0].classList.add('first-item')    
        let relevantA = document.getElementsByClassName(theTitle + "-info")
        let relevantB = document.getElementsByClassName(theTitle + '-filters')
        for ( let i=0;i<relevantA.length;i++){
            relevantA[i].classList.toggle("none")
        }
        for ( let i=0;i<relevantB.length;i++){
            relevantB[i].classList.toggle("none")
        }
    }

    return (
        <div className={theTitle + '-box skillbox'} id={theTitle + "-box"}>
            <div 
                id={theTitle + "-line"}
                className={"whited"} 
                onClick={() => toggleDetails()}
                >
                <h2>
                    {theTitle}
                </h2>
                <div id={theTitle + "-how-many-pane"}>
                    <p>{sourceTitle}: 10/10</p>
                    <p>{roleTitle}: 8/8</p>
                </div>
                <div className={theTitle + '-filters filters none'}>
                    <p className={'move-source-button'}>{sourceTitle}</p>
                    <p className={'move-role-button'}>{roleTitle}</p>
                    <p className={'move-all-button'} id={theTitle + "-all-button"}>All</p>
                </div>
            </div>
            <div className={'skill-list'}>
                {items}
            </div>
        </div>
    );
}
