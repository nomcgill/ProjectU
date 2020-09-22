import React from 'react'

import './demonic.css'

export default function DemonicDecision(props) {

    let roleSourceInfo = props.database.sources.filter(roleSource=> roleSource.title === "Demonic")
    let demonicInfo = roleSourceInfo[0]

    function joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }

    let demonOptions = demonicInfo.decisionTraits.map((origin, count) => {
        let joinedName = joinWords(origin.name)
        return (
            <label htmlFor={joinedName + '-radio'} key={count} onClick={() => props.updateDemonic(origin)}>
                <div id={joinedName} className={'decision-button demon-decision-button'}>
                    <input type={'radio'} id={joinedName + '-radio'} name={'demonic-radio'} />
                    <h4>{origin.name}</h4>
                    <p>{origin.impact}</p>
                    <p className={'italic'}>{origin.impact2}</p>
                </div>
            </label>
        )
    })



    return (
        <div className={'demonic-choice'}>
            <h3>Demonic Origin</h3>
            <p>Which type of demon do you draw your power from? And at what cost?</p>
            <div className={'demon-options'}>
                {demonOptions}
            </div>
            <p className={'italic'}>Origin effects are only realized starting at level 5.</p>
        </div>
    )

}