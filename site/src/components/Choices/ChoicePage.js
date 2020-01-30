import React from 'react'
import {connect} from 'react-redux';

import RoleSourceOption from './RoleSourceOption'

// import { action } from '../actions'

export default function ChoicePage(props) {

    const eachBox = (props.info) ? props.info.map(section => 
        <RoleSourceOption 
            key={section.title + "-key"}
            section={section}
        />
    ) : ""

    return (
        <div className={"choice-page"}>
            <div className="choice-header-box">
                <h2>Choose your {props.header}.</h2>
            </div>
            {eachBox}
        </div>
    );
}