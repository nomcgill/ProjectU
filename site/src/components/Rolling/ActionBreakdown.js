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
        if (action.title === "muscle"){
            return (
                <div className={'action-detail-text'}>
                    <ul className={'action-samples'}>
                        <li><span className={'heavy'}>Flex</span>, as in to bash, overpower, lift, pounce, or swordfight.</li>
                        <li><span className={'heavy'}>Stunt</span>, as in to dodge, maneuver, or dance.</li>
                        <li><span className={'heavy'}>Sneak</span>, as in to hide appearance or avoid detection.</li>
                    </ul>

                </div>
            )
        }
        if (action.title === "evaluate"){
            return (
                <div className={'action-detail-text'}>
                    <ul className={'action-samples'}>
                        <li><span className={'heavy'}>Solve</span>, as in an estimate, riddle, or lockpick.</li>
                        <li><span className={'heavy'}>Intuit</span>, as in a lie, love, or other intent.</li>
                        <li><span className={'heavy'}>Recall</span>, as in history or past experience.</li>
                    </ul>
                    <div className={'action-detail-extra'}>                    
                        <p>Use that thinking cap to get a pressing question truthfully—if not in detail—answered by the GM.</p>
                        <ul>
                            <li>What haven't I noticed yet?</li>
                            <li>Who is in the most danger?</li>
                            <li>What caused that?</li>
                            <li>How can I escape that?</li>
                            <li>Should I trust them?</li>
                            <li>How do they feel about me?</li>
                            <li>How long will this last?</li>
                        </ul>
                    </div>
                </div>
            )
        }
        if (action.title === "influence"){
            return (
                <div className={'action-detail-text'}>
                    <ul className={'action-samples'}>
                        <li><span className={'heavy'}>Sweet Talk</span>, as in bribe or entice.</li>
                        <li><span className={'heavy'}>Bully</span>, as in intimidate or threaten.</li>
                        <li><span className={'heavy'}>Deceive</span>, as in to lie or omit without suspicion.</li>
                        <li><span className={'heavy'}>Burn a Bridge</span>.</li>
                    </ul>
                </div>
                )
        }
        if (action.title === "channel"){
            return (
                <div className={'action-detail-text'}>
                    <ul className={'action-samples'}>
                        <li>Harness your <span className={'heavy'}>Power Source</span>. When you want to 
                        do something that you believe your character is capable of because they possess 
                        magical abilities, use Harness Power.</li>
                    </ul>
                </div>
                )
        }
    }

    const actionDescriptionComponents = actions.map((action, key) => {
        // console.log(props.savedActionTab)
        // props.savedActionTab()
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