import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


// import { action } from '../actions'

export default function NextButton(props) {

    return (
        <Link to={props.next}>
            <div className={"next-button"}>
                    <h2>Continue</h2>
            </div>
        </Link>
    );
}