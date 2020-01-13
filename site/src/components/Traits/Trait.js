import React from 'react'
import {connect} from 'react-redux';

import Item from '../Item.js'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

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

    function toggleDetails(){
        document.getElementById(props.title + "-plus").classList.toggle("none")
        document.getElementById(props.title + "-minus").classList.toggle("none")
        document.getElementById(props.title + "-line").classList.toggle("gray")
        document.getElementById(props.title + "-line").classList.toggle("whited")
        document.getElementById(props.title + "-box").classList.toggle("open-box")   
        // document.getElementsByClassName("intersection-item-0").childNodes[0].classList.add('first-item')    
        let relevant = document.getElementsByClassName(props.title + "-info")
        for ( let i=0;i<relevant.length;i++){
            relevant[i].classList.toggle("none")
        }
    }

    return (
        <div className={"skillbox traitbox"} id={props.title + "-box"}>
            <div 
                className={"trait-top whited"} 
                id={props.title + "-line"}
                onClick={() => toggleDetails()}
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
