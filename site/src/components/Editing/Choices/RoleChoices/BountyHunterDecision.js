import React from 'react'

import './bountyhunter.css'

export default function BountyHunterDecision(props) {

    let roleSourceInfo = props.database.roles.filter(roleSource=> roleSource.title === "Bounty Hunter")
    let bountyHunterInfo = roleSourceInfo[0]

    function joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }


    // let beastOptions = morphInfo.decisionTraits.map((beast, count) => {
    //     let joinedName = joinWords(beast.name)
    //     let animalTextId = 'name-'+joinedName
    //     return (
    //         <label htmlFor={joinedName + '-radio'} key={count} onClick={() => props.updateMorph(beast, animalTextId)}>
    //             <div id={joinedName} className={'decision-button beast-decision-button'}>
    //                 <input type={'radio'} id={joinedName + '-radio'} name={'beast-radio'} className={'beast-radio'}/>
    //                 <h4>{beast.name}</h4>
    //                 <p>{beast.sizeExamples}</p>
    //             </div>
    //         </label>
    //     )
    // })

    let meleeSkills = bountyHunterInfo.decisionTraits.filter(skill => skill.bountyCategory == "Melee")

    let rangedSkills = bountyHunterInfo.decisionTraits.filter(skill => skill.bountyCategory == "Ranged")

    let meleeBody =
        <label htmlFor={'melee-radio'} onClick={() => props.updateBounty(meleeSkills, "melee-radio")}>
            <h4>Melee Specialization</h4>
            <div id={"Melee"} className={'decision-button specialty-decision-button'}>
                <input type={'radio'} id={'melee-radio'} name={'specialty-radio'} className={'bh-radio'}/>
                <div className={'one-bounty-skill'}>
                    <h3>{meleeSkills[0].name}</h3>
                    <p>{meleeSkills[0].action}</p>
                    <p>{meleeSkills[0].flavor}</p>
                    <p>{meleeSkills[0].impact}</p>
                </div>
            </div>
        </label>

    let rangedInterior = rangedSkills.map((skill,count)=>{
        return (
            <div id={skill.name} key={count} className={'one-bounty-skill'}>
                <h3>{skill.name}</h3>
                <p>{skill.action}</p>
                <p>{skill.flavor}</p>
                <p>{skill.impact}</p>
            </div>
        )
    })
    
    let rangedBody = 
    <label htmlFor={'ranged-radio'} onClick={() => props.updateBounty(rangedSkills, "ranged-radio")}>
        <h4>Ranged Specialization</h4>
        <div className={'decision-button specialty-decision-button'} id={'Ranged'}>
        <input type={'radio'} id={'ranged-radio'} name={'specialty-radio'} className={'bh-radio'}/>
            {rangedInterior}
        </div>
    </label>



    return (
        <div className={'bh-choice'}>
            <h3>Hunting Specialization</h3>
            <p>Choose a specialization from your path at the Order.</p>
            <div className={'bh-options'}>
                {meleeBody}
                {rangedBody}
            </div>
            {/* <p className={'italic'}>Origin effects are only realized starting at level 5.</p> */}
        </div>
    )

}