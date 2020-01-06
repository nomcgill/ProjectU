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
        <div className={'skillbox traitbox plus'}>
            <div className={"trait-top"}>
                <div class-Name={"trait-top-text"}>
                    <h3>
                        <span 
                        className={props.intro + '-title'}>
                        {props.intro}
                        </span>
                        {props.title}
                    </h3>
                </div>
                <h3 className={"plus-sign"}>
                    +
                </h3>
                <h3 className={"minus-sign hidden"}>
                    -
                </h3>
            </div>
            <p className={props.intro + "-info"}>
                {items}
            </p>
        </div>
    );
}
