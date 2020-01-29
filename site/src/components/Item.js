import React from 'react'
import {connect} from 'react-redux';

export default function Item(props) {

    const usesDamage = () => {
        if (props.info.damage){
            return (
            <span className={"damage heavy"} id={"damage-mod" + props.info.name}> Deal {props.info.damage}X.</span>
            )
        }
    }

    const isActive = () => {
        if (props.info.action){
            return (
                <span className={"red"}> &#x2771; {props.info.action}</span>
            )
        }
        else {
            return (
                <span> &#x2771; Passive</span>
            )
        }
    }


    return (
        <div className={"item " + props.class} id={props.info.id}>
            <p className={"item-name"}>
                {props.info.name}
                {isActive()}
            </p>
            <p>
                {props.info.description}
                {usesDamage()}
                {/* <span className={"damage"} id={"damage-mod" + props.info.name}> Deal {props.info.damage}.</span> */}
            </p>
        </div>
    );
}
