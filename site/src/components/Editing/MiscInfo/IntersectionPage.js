import React from 'react'
import {connect} from 'react-redux';

import NextButton from '../NextButton.js'

// import { action } from '../actions'

export default function IntersectionPage(props) {

    return (
        <div className={"intersection-page choice-page"}>
            <div className="choice-header-box">
                <h2>{props.header} props.intersection</h2>
            </div>
            <NextButton next={props.next} />
        </div>
    );
}