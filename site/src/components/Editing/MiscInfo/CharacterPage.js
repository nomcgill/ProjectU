import React from 'react'
import {connect} from 'react-redux';

import NextButton from '../NextButton.js'

// import { action } from '../actions'

export default function CharacterPage(props) {

    return (
        <div className={"name-page choice-page"}>
            <div className="choice-header-box">
                <h2>What is your NAME?</h2>
            </div>
            <div className="choice-header-box">
                <h2>What LEVEL are you?</h2>
            </div>
            <NextButton next={props.next} />
        </div>
    );
}