import React from 'react'
import {connect} from 'react-redux';

import Item from '../Item.js'

export default function Trait(props) {

    const items = props.info.traits.map((item, count) =>
        <Item 
            id={"traits-info"}
            key={"traits-" + count}
            class={props.title + "-info info none traits-item-" + count}
            count={count}
            info={item}
        />
    )

    function onClick(){
        toggleDetails()
        flexOrNotToFlex()
    }

    function flexOrNotToFlex(){
        let thisBox = document.getElementById(props.title + "-box")
        let thisBoxOpen = thisBox.classList.contains('open-box')
        let otherBox = document.getElementById(props.otherTitle + "-box")
        let otherBoxOpen = otherBox.classList.contains('open-box')
        // inSync is true when traits should be adjacent.
        let inSync = () => {
            return thisBoxOpen && otherBoxOpen ? true
                : !thisBoxOpen && !otherBoxOpen ? true
                : false
        }
        if (inSync()){
            thisBox.classList.add("traitbox-adj")
            thisBox.classList.remove("traitbox-nonadj")
            otherBox.classList.add("traitbox-adj")
            otherBox.classList.remove("traitbox-nonadj")
            document.getElementById("traits-row").classList.add("traits-row")
            document.getElementById("traits-row").classList.remove("flex")
        }
        else {
            thisBox.classList.add("traitbox-nonadj")
            thisBox.classList.remove("traitbox-adj")
            otherBox.classList.add("traitbox-nonadj")
            otherBox.classList.remove("traitbox-adj")
            document.getElementById("traits-row").classList.add("flex")
            document.getElementById("traits-row").classList.remove("traits-row")
        }
    }

    function toggleDetails(){
        document.getElementById(props.title + "-plus").classList.toggle("none")
        document.getElementById(props.title + "-minus").classList.toggle("none")
        document.getElementById(props.title + "-line").classList.toggle("gray")
        document.getElementById(props.title + "-line").classList.toggle("whited")
        document.getElementById(props.title + "-box").classList.toggle("open-box")   
        let relevant = document.getElementsByClassName(props.title + "-info")
        for ( let i=0;i<relevant.length;i++){
            relevant[i].classList.toggle("none")
        }
    }

    // flexOrNotToFlex()

    return (
        <div className={"skillbox traitbox traitbox-adj"} id={props.title + "-box"}>
            <div 
                className={"trait-top skill-top whited"} 
                id={props.title + "-line"}
                onClick={
                    () => onClick()
                }
            >
                <div className={"trait-top-text"}>
                    <h3 className={props.side + '-title'}>
                        {props.intro}
                    </h3>
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <h3 className={"plus-sign"} id={props.title + "-plus"}>
                    +
                </h3>
                <h3 className={"minus-sign none"} id={props.title + "-minus"}>
                    -
                </h3>
            </div>
            <div>
                {items}
            </div>
        </div>
    );
}
