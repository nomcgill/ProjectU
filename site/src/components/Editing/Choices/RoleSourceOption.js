import React from 'react'
import {connect} from 'react-redux';

export default function RoleSourceOption(props) {
    
    return (
        <div className={"choice-box"}>
            <h3>{props.section.title}</h3>
            <p>{props.section.description}</p>
            {/* <div className={props.section.title + "-traits-dropdown"}>{props.section.traits[0].description} traits dropdown</div> */}
        </div>
    );
}