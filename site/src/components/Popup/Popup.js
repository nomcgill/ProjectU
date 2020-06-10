import React from 'react'

import './popup.css'

export default function Popup(props) {

    function hideWindow(){
        let elementId = document.getElementById(props.popupId)
        // console.log(elementId)
        // console.log(typeof elementId)
        elementId.classList.add("hidden")
        // debugger;
    }

    // let className = props.popupId === "popup-Knight" ? " hidden" : " hidden"

    return (
        //add hidden to class name
        <div className={"popup " + props.popupClass} id={props.popupId}>
            <div className={'popup-inside'}>
                {props.popupContent}
                <div className={'popup-x'} onClick={() => hideWindow()}>x</div>
            </div>
        </div>
    )

}