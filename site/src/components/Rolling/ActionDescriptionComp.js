import React from 'react'
import {connect} from 'react-redux';
import {
    Link,
    NavLink,
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import './actionBreakdown.css'

// import {toggleItemFavorite} from '../../actions'

export default function ActionDescriptionComp(props) {
    // console.log(props.title)
    return (
        <div className={'action-details'}>
            <div className={'action-details-top'}>
                <div className={'action-banner'}>
                    <div className={'action-banner-title'}>{props.title}</div>
                    <div className={'action-banner-snippet'}>{props.snippet}</div>
                </div>
                <div className={'action-success'}>
                    <div className={'action-example-title heavy'}>Critical Setback</div>
                    <div className={'action-example-text'}>Don’t do what you want and pay a large price.</div>
                </div>
            </div>
            <div className={'action-details-info'}>
                {props.info}
            </div>
        </div>
    )

}