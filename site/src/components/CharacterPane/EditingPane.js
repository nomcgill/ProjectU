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

import Arrow from './fliparrow.png'

// import { action } from '../actions'

export default function EditingPane(props) {

    // if (document.getElementById('name')){
    //     document.getElementById('name').classList.remove("hidden")
    //     document.getElementById('titles').classList.remove("hidden")
    //     document.getElementById('arrow-box').classList.remove("hidden")
    // }

    // if (document.getElementById('character-pane-skills-numbers')){
    //     document.getElementById('character-pane-skills-numbers').classList.add('hidden')
    // }

    // if (document.getElementById('dimmer')){
    //     document.getElementById('dimmer').classList.add('hidden')
    // }


    
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