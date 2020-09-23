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
        let impact = typeof trait.impact === "object" ? "You must choose an option." :
                     trait.impact ? trait.impact :  
                     ''
        let impact2 = trait.impact2 ? trait.impact2 : ''

        if (typeof flavor !== "string"){
            // debugger;
        }
        if (typeof flavor2 !== "string"){
            if (flavor2 !== false){

            }
            // debugger;
        }
        if (typeof impact !== "string"){
            if (impact !== false){

            }
            // debugger;
        }
        if (typeof impact2 !== "string"){
            if (impact2 !== false){

            }
            // debugger;
        }

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

    let specialization = props.trait.bountyCategory ? <p className={'italic'}>{'from ' + props.trait.bountyCategory + ' specialization.'}</p> : ''

    return (
        <div className={'one-trait'}>
            <h2>{props.name} ({props.trait.action})</h2>
            {specialization}
            {description(props.trait)}
        </div>
    )
}