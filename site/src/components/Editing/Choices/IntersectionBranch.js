import React from 'react'
import {connect} from 'react-redux';

// import { action } from '../actions'

export default function IntersectionBranch(props) {

    function onclick(){
        
    }

    return (
        <div className={"intersection-content-" + props.count}>
            Intersection Content {props.count}: props.intersection
        </div>
    );
}