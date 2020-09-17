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

import ActionDescriptionComp from './ActionDescriptionComp';

export default function ActionBreakdown(props) {

    const actions = [
        {
            title: "muscle",
            snippet: "Use your BODY."
        },
        {
            title: "evaluate",
            snippet: "Use your BRAIN."
        },
        {
            title: "influence",
            snippet: "Use your WORDS."
        },
        {
            title: "channel",
            snippet: "Use your SOURCE."
        }
    ]

    function capitalize(insert){
        return insert.charAt(0).toUpperCase() + insert.slice(1)
    }

    const actionLinks = actions.map((action,key) => {
        return (
            <NavLink 
                to={'/rolling/' + action.title}
                activeClassName={'highlight-nav'}
                key={key}>
                <button 
                    className={'action-button'}
                >{capitalize(action.title)}</button>
            </NavLink>
        )
    })

    function actionInfo(action){
        let databaseActions = props.actionDescriptions
        // console.log(databaseActions)
        
        let mappedActionsDescriptions = databaseActions[action.title].map(oneAction => {
            return (
            <li><span className={'heavy'}>{oneAction.label}</span>, {oneAction.description}</li>
                )
        })

        let mappedEvaluateQuestions = databaseActions.evaluateQuestions.map(oneQuestion => {
            // console.log(oneQuestion)
            return (
                <li>{oneQuestion}</li>
            )
        })

        let extraEvaluate = action.title === "evaluate" ? 
        (
            <div className={'action-detail-extra'}>                    
                <p>Use that thinking cap to get a pressing question truthfully—if not in detail—answered by the GM.</p>
                <ul>
                    {mappedEvaluateQuestions}
                </ul>
            </div>
        )
        : ''


        if (action.title === "muscle","intuit","channel"){
            console.log(action.title)
            return (
                <div className={'action-detail-text'}>
                    <ul className={'action-samples'}>
                        {mappedActionsDescriptions}
                        {extraEvaluate}
                    </ul>

                </div>
            )
        }
    }

    const actionDescriptionComponents = actions.map((action, key) => {

        return (
            <Route 
                exact
                path={'/rolling/' + action.title}
                render={(p) => 
                    <ActionDescriptionComp
                        title={capitalize(action.title)}
                        route={action.title}
                        snippet={action.snippet}
                        info={actionInfo(action)}
                        savedTab={props.savedActionTab}
                        actionSuccess={props.actionSuccess}
                    />
                }
                key={key}
            />
        )
    })

    let savedActionTab = (props.savedActionTab) ? props.savedActionTab : 'muscle'
    // debugger;
    return(
        <div id={'action-breakdown'}>
            <div id={'action-info-top-tab'}>
                <h4>Actions ►</h4>
                {actionLinks}
            </div>
            <Switch>
                <Redirect exact from="/rolling" to={"/rolling/" + savedActionTab} />
                {actionDescriptionComponents}
            </Switch>
        </div>
    )

}