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

import {updateActionDetails} from '../../actions'

// import {toggleItemFavorite} from '../../actions'

class ActionDescriptionComp extends React.Component {

    componentDidMount(){
        let tab = this.props.route
        if (tab !== this.props.savedTab){
            this.props.dispatch(updateActionDetails(tab))
        }
        // console.log(prop)
        // this.props.savedTab
        // console.log(this.props.p)
    }
    
    render(){
        return (
            <div className={'action-details'}>
                <div className={'action-details-top'}>
                    <div className={'action-banner'}>
                        <div className={'action-banner-title'}>{this.props.title}</div>
                        <div className={'action-banner-snippet'}>{this.props.snippet}</div>
                    </div>
                    <div className={'action-success'}>
                        <div className={'action-example-title heavy'}>Critical Setback</div>
                        <div className={'action-example-text'}>Don’t do what you want and pay a large price.</div>
                    </div>
                </div>
                <div className={'action-details-info'}>
                    {this.props.info}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    savedActionTab: state.savedActionTab
});

export default connect(mapStateToProps)(ActionDescriptionComp);