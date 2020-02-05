import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
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

        const steps = ["role","source","name","skills", "finish"]

        const navsteps = steps.map(step =>
            <li key={step+"1"} id={step + "-nav"}>
                <Link to={`/${step}`}>
                    {capitalize(step)}
                </Link>
            </li>
        )

        return (
            <Router>
                <div id={"editing-main"}>
                    <div id={"dimmer"}/>
                    <ul id={"editing-nav"}>
                        {navsteps}
                    </ul>
                        <Switch>
                            <Route 
                                exact
                                path="/role"
                                render={() => 
                                <ChoicePage
                                    header={"ROLE"}
                                    info={this.props.database.roles}
                                    next={"/source"}
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
                                    next={"/name"}
                                />}
                            />
                            <Route 
                                exact
                                path="/name"
                                render={() => 
                                <CharacterPage
                                    next={"/skills"}
                                />}
                            />
                            <Route 
                                path="/skills"
                                render={() => 
                                <SkillsPage />}
                            />
                            <Route
                                exact
                                path="/finish"
                                render={() =>
                                <FinishPage />
                                }
                            />
                        </Switch>
                </div>
            </Router>
        );
    }
  }
  
  const mapStateToProps = state => ({
    name: state.name,
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    database: state.database
  });

  export default connect(mapStateToProps)(EditingMain);