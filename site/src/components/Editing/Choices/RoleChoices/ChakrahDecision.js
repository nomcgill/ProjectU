import React from 'react'

import './chakrah.css'

export default function ChakrahDecision(props) {

    let roleSourceInfo = props.database.sources.filter(roleSource=> roleSource.title === "Chakrah")
    let chakrahInfo = roleSourceInfo[0]

    function joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }

    function removeHighlights(){

    }

    let tattooBoxTitle = {
        "Tattoo (Sweet Talk)" : 'Sweet Talk',
        "Tattoo (Bully)" : 'Bully',
        "Tattoo (Deceive)" : 'Deceive',
        "Tattoo (Solve)" : 'Solve',
        "Tattoo (Intuit)" : 'Intuit',
        "Tattoo (Recall)" : 'Recall',
        
    }

    let chakrahOptionsInfluence = chakrahInfo.decisionTraits.map((tattoo, count) => {
        let joinedName = joinWords(tattoo.name)

        if (tattoo.action === "Influence"){
            return (
                <label htmlFor={joinedName + '-radio'} key={count} onClick={() => props.updateChakrah(tattoo)}>
                    <div id={joinedName} className={'decision-button chakrah-decision-button'}>
                        <input type={'checkbox'} id={joinedName + '-radio'} name={'chakrah-radio'} />
                        <h4>{tattooBoxTitle[tattoo.name]}</h4>
                        {/* <p>{tattoo.impact}</p> */}
                        {/* <p className={'italic'}>{tattoo.impact2}</p> */}
                    </div>
                </label>
            )
        }
    })
    let chakrahOptionsEvaluate = chakrahInfo.decisionTraits.map((tattoo, count) => {
        let joinedName = joinWords(tattoo.name)

        if (tattoo.action === "Evaluate"){
            return (
                <label htmlFor={joinedName + '-radio'} key={count} onClick={() => props.updateChakrah(tattoo)}>
                    <div id={joinedName} className={'decision-button chakrah-decision-button'}>
                        <input type={'checkbox'} id={joinedName + '-radio'} name={'chakrah-radio'} />
                        <h4>{tattooBoxTitle[tattoo.name]}</h4>
                        {/* <p>{tattoo.impact}</p> */}
                        {/* <p className={'italic'}>{tattoo.impact2}</p> */}
                    </div>
                </label>
            )
        }
    })



    return (
        <div className={'chakrah-choice'}>
            <h3>Tattoos (optional)</h3>
            <p>Do you have any powerful tattoos that help you achieve your non-physical goals?</p>
            <p>Strengthen actions of any tattoo type chosen below.</p>
            <div className={'chakrah-options'}>
                <h4>Influence Actions</h4>
                <div className={'chakrah-options-section'}>
                    {chakrahOptionsInfluence}
                </div>
                <h4>Evaluate Actions</h4>
                <div className={'chakrah-options-section'}>
                    {chakrahOptionsEvaluate}
                </div>
            </div>
            <p className={'italic'}>Tattoos will count towards your Basic Source skills level limit!</p>
        </div>
    )

}