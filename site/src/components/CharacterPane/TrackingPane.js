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
import Dice from './dice.png'


// import { action } from '../actions'

export default function TrackingPane(props) {

    function updateOverstep(){
        var checkbox = document.getElementById("overstep-check")
        console.log(checkbox.checked)
    }

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
        <div id={'character-tracking-pane'}>
            <div className={'character-pane-box'} id={'overstep-box'}>
                <h3>Overstep</h3>
                <input type={'checkbox'} id={'overstep-check'} onClick={() => updateOverstep()} />
                {/* <span class="checkmark"></span> */}
            </div>
            <div className={'character-pane-box'} id={'hp-box'}>
                <p>HP</p>
            </div>
            <div className={'character-pane-box'} id={'damage-box'}>
                <p>DMG</p>
            </div>
            <div id={'dice-box'}>
                <img src={Dice} className={'character-pane-box'} id={'dice'}/>
            </div>
            <Link to={'/final/title'}>
              <div id={'arrow-box'} className={'character-pane-box'}>
                <img id={'flip-arrow'} src={Arrow} />
              </div>
            </Link>
        </div>    
    );
}