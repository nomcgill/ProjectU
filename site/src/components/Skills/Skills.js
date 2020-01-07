import React from 'react'
import {connect} from 'react-redux';

import Item from '../Item.js' 

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Skills(props) {

    const sourceTitle = props.source.title
    const roleTitle = props.role.title


    const items = props.info.moves.map((item, count) =>
        <Item 
            id={"intersection-info"}
            key={"intersection-" + count}
            class={"info intersection-item-" + count}
            count={count}
            info={item}
        />
    )

    return (
        <div className={props.info.title + '-box skillbox'}>
            <h2>
                {props.info.title}
            </h2>
            <div className={'filters'}>
                <p className={'move-source-button'}>{sourceTitle}</p>
                <p className={'move-role-button'}>{roleTitle}</p>
                <p className={'move-all-button'}>All</p>
            </div>
            <div className={'skill-list'}>
                {items}
            </div>
        </div>
    );
}
