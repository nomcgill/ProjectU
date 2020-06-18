import React from 'react'

export default function TinyTrait(props) {

    function joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }

    let description = (trait) => {
        let flavor = trait.flavor ? trait.flavor : '' 
        let flavor2 = trait.flavor2 ? trait.flavor2 : false
        let flavor3 = trait.flavor3 ? trait.flavor3 : false
        let flavor4 = trait.flavor4 ? trait.flavor4 : false
        let impact = trait.impact ? trait.impact : ''

        if (flavor4){
            return (
                <div className={'trait-description'}>
                    <p className={'trait-description-part'}>{flavor}</p>
                    <p className={'trait-description-part'}>{flavor2}</p>
                    <p className={'trait-description-part'}>{flavor3}</p>
                    <p className={'trait-description-part'}>{flavor4}</p>
                    <p className={'trait-description-part'}>{impact}</p>
                </div>
            )
        }
        else if (flavor3){
            return (
                <div className={'trait-description'}>
                    <p className={'trait-description-part'}>{flavor}</p>
                    <p className={'trait-description-part'}>{flavor2}</p>
                    <p className={'trait-description-part'}>{flavor3}</p>
                    <p className={'trait-description-part'}>{impact}</p>
                </div>
            )
        }
        else if (flavor2){
            return (
                <div className={'trait-description'}>
                    <p className={'trait-description-part'}>{flavor}</p>
                    <p className={'trait-description-part'}>{flavor2}</p>
                    <p className={'trait-description-part'}>{impact}</p>
                </div>
            )
        }
        else {
            return (
                <div className={'trait-description'}>
                    <p className={'trait-description-part'}>{flavor}</p>
                    <p className={'trait-description-part'}>{impact}</p>
                </div>
            )
        }
    }


    return (
        <div className={'one-trait'}>
            <h2>{props.name} ({props.trait.action})</h2>
            {description(props.trait)}
        </div>
    )
}