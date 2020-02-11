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

import ChoicePage from './Choices/ChoicePage'
import IntersectionPage from './MiscInfo/IntersectionPage'
import CharacterPage from './MiscInfo/CharacterPage'
import SkillsPage from './Choices/SkillsPage'
import FinishPage from './MiscInfo/FinishPage'

export class EditingMain extends React.Component {
    

    render() {

        function capitalize(insert){
            return insert.charAt(0).toUpperCase() + insert.slice(1)
        }

        const steps = ["role","source","who","skills", "finish"]

        const navsteps = steps.map(step =>
            <li key={step+"1"} id={step + "-nav"}>
                <NavLink 
                    to={`/${step}`} 
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
                            <Redirect exact from="/" to="/role" />
                            <Route 
                                exact
                                path="/role"
                                render={() => 
                                <ChoicePage
                                    header={"ROLE"}
                                    info={this.props.database.roles}
                                    next={"/source"}
                                    button={"role"}
                                />}
                            />
                            <Route 
                                exact
                                path="/source"
                                render={() => 
                                <ChoicePage
                                    header={"SOURCE"}
                                    info={this.props.database.sources}
                                    next={"/intersection"}
                                    button={"source"}
                                />}
                            />
                            <Route 
                                exact
                                path="/intersection"
                                render={() => 
                                <IntersectionPage
                                    header={"Intersection: "}
                                    info={this.props.intersection}
                                    role={this.props.role}
                                    source={this.props.source}
                                    next={"/who"}
                                />}
                            />
                            <Route 
                                exact
                                path="/who"
                                render={() => 
                                <CharacterPage
                                    next={"/skills"}
                                    button={"who"}
                                />}
                            />
                            <Redirect exact from="/skills" to="/skills/roleskillschoice" />
                            <Route 
                                path="/skills"
                                render={() => 
                                <SkillsPage 
                                    button={"skills"}
                                    rolename={this.props.role.title}
                                    sourcename={this.props.source.title}
                                />}
                            />
                            <Route
                                exact
                                path="/finish"
                                render={() =>
                                <FinishPage 
                                button={"finish"}
                                />
                                }
                            />
                        </Switch>
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