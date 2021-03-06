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

// import './finaltop.css'

import Roll from './Roll'
import Search from './Search'
import Filters from './Filters'

// import { action } from '../actions'

export default function FinalTopPane(props) {
    return (
        <div id={'final-top-pane'}>
            <div id={'line-1'}>
                {/* <Link to={'/rolling'}> */}
                    <Roll />
                {/* </Link> */}
                <Search 
                    updateFilter={props.updateFilter}
                    // updateTextInput={props.updateTextInput}
                    resetFilters={props.resetFilters}
                />
            </div>
            <Filters 
                updateFilter={props.updateFilter}
            />
        </div>
    )


}