import React from 'react'
import {connect} from 'react-redux';

import './skill.css'

export default function FinalItem(props) {

    return (
        <div className={'one-skill'}>
            <div className={'skill-head-pane'}>
                <div className={'left-head-pane'}>
                    <h3>Righteous Righteous Fury</h3>
                    <div className={'skill-pane-info'}>
                        <p>Evaluate > Passive</p>
                    </div>
                </div>
                <div className={'right-head-pane'}>
                    Bounty Hunter
                </div>
            </div>         
        </div>
    )

}
