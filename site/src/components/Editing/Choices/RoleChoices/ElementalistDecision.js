import React from 'react'

import './elementalist.css'

export default function ElementalistDecision(props) {

    let roleSourceInfo = props.database.roles.filter(roleSource=> roleSource.title === "Elementalist")
    let elementalistInfo = roleSourceInfo[0]

    function joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }

    function removeHighlights(){

    }

    let coreOptions = elementalistInfo.decisionTraits.map((core, count) => {
        let joinedName = joinWords(core.name)
        return (
            <label htmlFor={joinedName + '-radio'} key={count} onClick={() => props.updateCore(core)}>
                <div id={joinedName} className={'decision-button core-decision-button'}>
                    <input type={'radio'} id={joinedName + '-radio'} name={'core-radio'} />
                    <h4>{core.name}</h4>
                    <p>{core.impact}</p>
                    {/* <p className={'italic'}>{core.impact2}</p> */}
                </div>
            </label>
        )
    })



    return (
        <div className={'elementalist-choice'}>
            <h3>Primordial Core</h3>
            <p>Your inherent essence leans toward one of the primary elements. Choose one of the following:</p>
            <div className={'core-options'}>
                {coreOptions}
            </div>
        </div>
    )

}