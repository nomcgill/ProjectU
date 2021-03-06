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

export default function TitlePane(props) {
    // console.log(props)

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

    let bigName = props.title.length > 0 ? '' : 'big-name' 

    // console.log(props.title.length > 0)
    
    return (
        <div id={'character-title-pane'}>
            <Link to={'/editing/who'}>
                <div id={'level-box'} className={'character-pane-box'}>
                    <p>Level</p>
                    <h2>{props.level}</h2>
                </div>
            </Link>
            <div id={'titles'}>
                <Link to={'/editing/role'}>
                    <div id={'source-role'}>
                        <div className={'each-source-role'}>
                            <p>{props.source}</p>
                        </div>
                        <div className={'each-source-role'}>
                            <p>{props.role}</p>
                        </div>
                    </div>
                </Link>
            </div>
            <Link to={'/editing/who'} id={'name-and-title'}>
                <h3 id={'name'} className={bigName}>
                    {props.name}
                </h3>
                <p id={'hero-title'}>{props.title}</p>
                {/* <h3 id={'name-title'}>
                    {props.title}
                </h3> */}
            </Link>
            <Link to={'/final/tracking'}>
              <div id={'arrow-box'} className={'character-pane-box'}>
                <img id={'flip-arrow'} src={Arrow} />
                <p>TRACK</p>
              </div>
            </Link>
        </div>
    );
}