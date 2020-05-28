import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Arrow from '../../ImageStore/fliparrow.png'

// import { action } from '../actions'

export default function EditingPane(props) {
    
    return (
        <div id={'character-editing-pane'}>
            <Link to={'/final/title/'} className={'button'}>
                <div>
                    <h2>View This Hero</h2>
                </div>
            </Link>
            <div className={'vertical-stacked'}>
                <div className={'button'}><h2>Find</h2></div>
                <div className={'button'}><h2>Save</h2></div>
            </div>
        </div>
    );
}