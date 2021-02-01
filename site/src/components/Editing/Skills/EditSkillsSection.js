import React from 'react'
import {connect} from 'react-redux';

import Item from './Item'

export default function EditSkillsSection(props) {
    // console.log(props)

    // const sourceTitle = props.title
    // const roleTitle = props.title
    const theTitle = props.title

    // const items = ''
    const items = props.info.map((item, count) => 
        <Item 
            key={"intersection-" + count}
            class={theTitle + "-info info hidden skills-item-" + count}
            count={count}
            info={item}
            title={props.title}
            updateSkills={(chosenSkillTitles)=> props.updateSkills(chosenSkillTitles)}
        />
    )

    function toggleDetails(){
        document.getElementById(theTitle + "-plus").classList.toggle("hidden")
        document.getElementById(theTitle + "-minus").classList.toggle("hidden")
        document.getElementById(theTitle + "-line").classList.toggle("gray")
        document.getElementById(theTitle + "-line").classList.toggle("whited")
        document.getElementById(theTitle + "-box").classList.toggle("open-box")   
        // document.getElementById(theTitle + "-how-many-pane").classList.toggle("none")   
        // document.getElementsByClassName("intersection-item-0").childNodes[0].classList.add('first-item')    
        let relevantA = document.getElementsByClassName(theTitle + "-info")
        for ( let i=0;i<relevantA.length;i++){
            relevantA[i].classList.toggle("hidden")
        }
        props.checkmarkWhatsSeen()
    }

    let numberChosen = 
        typeof props.numberChosen === "number" ? props.numberChosen :
        parseInt(props.numberChosen.$numberInt)
    let exceedLimit = numberChosen > props.available ? 'too-many-skills' : false
    
    return (
        <div className={theTitle + '-box skillbox'} id={theTitle + "-box"}>
            <div 
                id={theTitle + "-line"}
                className={"skill-top"} 
                onClick={() => toggleDetails()}
            >
                <div className={"skill-box-header-left"}>
                    <div className={'skill-top-table'}>
                        <h2>
                            {theTitle}
                        </h2>
                    {/* </div> */}
                    {/* <br /> */}
                    {/* <div className={"skill-top-table"}> */}
                        <p className={'tracking-skill-choices'}><span className={'tracking-skill-numbers ' + exceedLimit}>
                            {numberChosen} / {props.available}</span> at lvl {props.level}</p>
                    </div>
                </div>
                <h3 className={"plus-sign"} id={theTitle + "-plus"}>
                    +
                </h3>
                <h3 className={"minus-sign hidden"} id={theTitle + "-minus"}>
                    -
                </h3>
            </div>
            <div className={'skill-list'}>
                {items}
            </div>
        </div>
    );
}
