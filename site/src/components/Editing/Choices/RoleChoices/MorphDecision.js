import React from 'react'

export default function MorphDecision(props) {

    let roleSourceInfo = props.database.roles.filter(roleSource=> roleSource.title === "Morph")
    let morphInfo = roleSourceInfo[0]

    return (
        <div>
            <h2>Choice!</h2>
            <h1>WARIO!</h1>
        </div>
    )

}