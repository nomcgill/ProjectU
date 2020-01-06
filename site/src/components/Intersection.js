import React from 'react'
import {connect} from 'react-redux';
import Item from './Item.js'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export default function Intersection(props) {

    const items = props.intersection.traits.map((item, count) =>
        <Item 
            id={"intersection-info"}
            key={"intersection-" + count}
            class={"info intersection-item-" + count}
            count={count}
            info={item}
        />
    )

    return (
        <div className={"intersection-box skillbox"}>
            <div className={"top plus"}>
                <h3>Intersection: {props.intersection.title}</h3>
                <h3>+</h3>
            </div>
            {items}
        </div>
    );
}
