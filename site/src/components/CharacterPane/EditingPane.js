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
            <div>
                <h2>Find Hero</h2>
            </div>
            <Link to={'/final/title/'}>
                <div>
                    <h2>View This Hero</h2>
                </div>
            </Link>
        </div>
    );
}