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

import './editing.css'

import {formatEditingPage} from '../../actions.js' 

import ChoicePage from './Choices/ChoicePage'
import IntersectionPage from './Choices/IntersectionPage'
import CharacterPage from './MiscInfo/CharacterPage'
import SkillsPage from './Choices/SkillsPage'
import FinishPage from './MiscInfo/FinishPage'

export class EditingMain extends React.Component {

    formatEditAction(){
        this.props.dispatch(formatEditingPage(false))
    }

    render() {

        function capitalize(insert){
            return insert.charAt(0).toUpperCase() + insert.slice(1)
        }

        const steps = ["role","source","who","intersection","skills"]

        const navsteps = steps.map(step =>
            <li key={step+"1"} id={step + "-nav"}>
                <NavLink 
                    to={`/editing/${step}`} 
                    activeClassName={"highlight-nav"}
                >
                    {capitalize(step)}
                </NavLink>
            </li>
        )

        return (
                <div id={"editing-main"}>
                    <div id={"dimmer"}/>
                    <ul id={"editing-nav"}>
                        {navsteps}
                    </ul>
                    <Switch>
                        <Route 
                            exact
                            path="/editing/role"
                            render={() => 
                                <ChoicePage
                                    header={"Choose your ROLE."}
                                    info={this.props.database.roles}
                                    next={"/editing/source"}
                                    button={"/editing/role"}
                                    todo={this.formatEditAction}
                                />
                            }
                        />
                        <Route 
                            exact
                            path="/editing/source"
                            render={() => 
                                <ChoicePage
                                    header={"Choose your SOURCE."}
                                    info={this.props.database.sources}
                                    next={"/editing/who"}
                                    button={"/editing/source"}
                                />
                            }
                        />
                        <Route 
                            exact
                            path="/editing/who"
                            render={() => 
                                <CharacterPage
                                    next={"/editing/intersection"}
                                    button={"/editing/who"}
                                />
                            }
                        />
                        <Route 
                            exact
                            path="/editing/intersection"
                            render={() => 
                                <IntersectionPage
                                    header={"Intersection: "}
                                    info={this.props.database.intersections}
                                    role={this.props.role}
                                    source={this.props.source}
                                    next={"/editing/skills/roleskillschoice"}
                                />
                            }
                        />
                        <Redirect exact from="/editing/skills/" to="/editing/skills/roleskillschoice" />
                        <Route 
                            path="/editing/skills"
                            render={() => 
                                <SkillsPage 
                                    button={"skills"}
                                    rolename={this.props.role.title}
                                    sourcename={this.props.source.title}
                                    database={this.props.database}
                                    next={"/editing/finish"}
                                    // info={this.props.database}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/editing/finish"
                            render={() =>
                                <FinishPage 
                                    button={"finish"}
                                    next={"/final/title"}
                            />
                            }
                        />
                    </Switch>
                    <div id={'footer-hyphen'}> - </div>
                </div>
        );
    }
  }
  
  const mapStateToProps = state => ({
    who: state.who,
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    database: state.database
  });

  export default connect(mapStateToProps)(EditingMain);