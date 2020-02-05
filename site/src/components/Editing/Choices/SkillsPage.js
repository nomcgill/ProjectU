import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import ChoicePage from './ChoicePage'
import NextButton from '../NextButton'

export class SkillsPage extends React.Component {
    

    render() {

        return (
            <Router>
                <div id={"skills-page"}>
                    <div id={"skills-nav-top"}>
                        <Link to={`/skills/roleskillschoice`}>
                            Knight
                        </Link>
                        <Link to={`/skills/sourceskillschoice`}>
                            Divine
                        </Link>
                    </div>
                        <Switch>
                            <Redirect exact from="/skills" to="/skills/roleskillschoice" />
                            <Route 
                                exact
                                path="/skills/roleskillschoice"
                                render={() => 
                                <ChoicePage
                                    options={this.props.database.roles}
                                    header={"this.props.role + skills:"}
                                    next={'/skills/sourceskillschoice'}
                                />}
                            />
                            <Route 
                                exact
                                path="/skills/sourceskillschoice"
                                render={() => 
                                <ChoicePage
                                    options={this.props.database.source}
                                    header={"this.props.source + skills"}
                                    next={'/finish'}
                                />}
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

  export default connect(mapStateToProps)(SkillsPage);