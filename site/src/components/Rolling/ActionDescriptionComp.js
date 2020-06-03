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

import {updateActionDetails, action} from '../../actions'

class ActionDescriptionComp extends React.Component {

    componentDidMount(){
        let tab = this.props.route
        if (tab !== this.props.savedTab){
            this.props.dispatch(updateActionDetails(tab))
        }
        // console.log(this.props.actionSnippet)
        // console.log(this.props.actionSuccess)
    }

    successDescription(actionSnippet, actionType){
        if (actionSnippet){
            // debugger;
            let successDescription = 
                (actionType === "Evaluate") ? actionSnippet.evaluateDesc :
                (actionType === "Influence" || actionType === "Muscle" || actionType === "Channel") ? actionSnippet.description : 
                ""
            return successDescription
        }
        else {
            return ""
        }
    }
    
    render(){
        let actionSnippet = this.props.actionSnippet
        let successTitle = actionSnippet ? actionSnippet.title : "Roll For Success"
        return (
            <div className={'action-details'}>
                <div className={'action-details-top'}>
                    <div className={'action-banner'}>
                        <div className={'action-banner-title'}>{this.props.title}</div>
                        <div className={'action-banner-snippet'}>{this.props.snippet}</div>
                    </div>
                    <div className={'action-success'}>
                        <div className={'action-example-title heavy'}>{successTitle}</div>
                        <div className={'action-example-text'}>{this.successDescription(actionSnippet, this.props.title)}</div>
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
    savedActionTab: state.savedActionTab,
    actionSnippet: state.actionSnippet
});

export default connect(mapStateToProps)(ActionDescriptionComp);