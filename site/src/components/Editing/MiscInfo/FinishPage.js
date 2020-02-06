import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// import { action } from '../actions'

export default function FinishPage(props) {

    return (
        <div className={"choice-page"}>
            <div className="choice-header-box">
                <h2>NAME is ready for adventure! Are you?</h2>
            </div>
            <div id={'create-pdf-button'}>
                Create PDF Character Sheet
            </div>
            <Link to={`/final`}>
                <div id={'character-view-button'}>
                    Continue to Character Viewer
                </div>
            </Link>
        </div>
    );
}