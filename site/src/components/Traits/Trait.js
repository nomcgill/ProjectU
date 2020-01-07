import React from 'react'
import {connect} from 'react-redux';

import Item from '../Item.js'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Trait(props) {

    const items = props.info.traits.map((item, count) =>
        <Item 
            id={"traits-info"}
            key={"traits-" + count}
            class={"info traits-item-" + count}
            count={count}
            info={item}
        />
    )

    return (
        <div className={'skillbox traitbox'}>
            <div className={"trait-top"}>
                <div className={"trait-top-text"}>
                    <h3 className={props.side + '-title'}>
                        {props.intro}
                    </h3>
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <h3 className={"plus-sign"}>
                    +
                </h3>
                <h3 className={"minus-sign none"}>
                    -
                </h3>
            </div>
            <div className={props.title + "-info"}>
                {items}
            </div>
        </div>
    );
}
