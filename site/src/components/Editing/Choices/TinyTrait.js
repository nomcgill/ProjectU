import React from 'react'

export default function TinyTrait(props) {



    return (
        <div className={'trait-description'}>
            <p>{props.trait.description}</p>
        </div>       
    )
}