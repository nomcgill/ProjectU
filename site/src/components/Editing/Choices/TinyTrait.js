import React from 'react'

export default function TinyTrait(props) {

    function keepPopupVisible(){
        console.log(props.elementId)
        let thisPopup = "popup-" + document.getElementById(props.elementId)
        if (thisPopup){
            console.log(thisPopup)
            thisPopup.classList.remove('hidden')
            // debugger;
        }
    }

    keepPopupVisible()

    return (
        <div>
            <p>{props.trait.description}</p>
        </div>       
    )
}