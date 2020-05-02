import React from 'react'
import {connect} from 'react-redux';

import Item from '../../Item.js' 

export default function EditSkillsSection(props) {

    // const sourceTitle = props.title
    // const roleTitle = props.title
    const theTitle = props.title

    // const items = ''
    const items = props.info.map((item, count) => 
        <Item 
            key={"intersection-" + count}
            class={theTitle + "-info info none skills-item-" + count}
            count={count}
            info={item}
            title={props.title}
        />
    )

    function toggleDetails(){
        document.getElementById(theTitle + "-plus").classList.toggle("none")
        document.getElementById(theTitle + "-minus").classList.toggle("none")
        document.getElementById(theTitle + "-line").classList.toggle("gray")
        document.getElementById(theTitle + "-line").classList.toggle("whited")
        document.getElementById(theTitle + "-box").classList.toggle("open-box")   
        // document.getElementById(theTitle + "-how-many-pane").classList.toggle("none")   
        // document.getElementsByClassName("intersection-item-0").childNodes[0].classList.add('first-item')    
        let relevantA = document.getElementsByClassName(theTitle + "-info")
        for ( let i=0;i<relevantA.length;i++){
            relevantA[i].classList.toggle("none")
        }
    }

    return (
        <div className={theTitle + '-box skillbox'} id={theTitle + "-box"}>
            <div 
                id={theTitle + "-line"}
                className={"whited skill-top"} 
                onClick={() => toggleDetails()}
            >
                <div className={"skill-box-header-left"}>
                    <h2>
                        {theTitle}
                    </h2>
                    <p className={'tracking-skill-choices'}><span className={'tracking-skill-numbers'}>{props.numberChosen} / {props.available}</span> at lvl 3.</p>
                </div>
                <h3 className={"plus-sign"} id={theTitle + "-plus"}>
                    +
                </h3>
                <h3 className={"minus-sign none"} id={theTitle + "-minus"}>
                    -
                </h3>
            </div>
            <div className={'skill-list'}>
                {items}
            </div>
        </div>
    );
}
