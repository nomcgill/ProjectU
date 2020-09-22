import React from 'react'

import './morph.css'

export default function MorphDecision(props) {

    let roleSourceInfo = props.database.roles.filter(roleSource=> roleSource.title === "Morph")
    let morphInfo = roleSourceInfo[0]

    function joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }


    let beastOptions = morphInfo.decisionTraits.map((beast, count) => {
        let joinedName = joinWords(beast.name)
        let animalTextId = 'name-'+joinedName
        return (
            <label htmlFor={joinedName + '-radio'} key={count} onClick={() => props.updateMorph(beast, animalTextId)}>
                <div id={joinedName} className={'decision-button beast-decision-button'}>
                    <input type={'radio'} id={joinedName + '-radio'} name={'beast-radio'} className={'beast-radio'}/>
                    <h4>{beast.name}</h4>
                    <p>{beast.sizeExamples}</p>
                    <form autoComplete={'off'}>
                        <p className={'beast-name-inputs hidden'} id={'animal-'+joinedName}>Animal: </p>
                        <input 
                            id={animalTextId}
                            maxLength={16}
                            type={'text'} 
                            autoComplete={'off'} 
                            className={'hidden beast-name-inputs'} 
                            onChange={() => props.updateMorph(beast, animalTextId)} />
                        </form>
                </div>
            </label>
        )
    })



    return (
        <div className={'morph-choice'}>
            <h3>Beast Form</h3>
            <p>Either a small, medium, or large land-based animal, this is your single alternate form forever and the only animal 
                that you can Change into. In Beast Form, you can communicate verbally as if you were speaking normally.</p>
            <div className={'beast-options'}>
                {beastOptions}
            </div>
            {/* <p className={'italic'}>Origin effects are only realized starting at level 5.</p> */}
        </div>
    )

}