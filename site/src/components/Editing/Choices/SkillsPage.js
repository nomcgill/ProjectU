import React from 'react'
import {connect} from 'react-redux';
import {
    Link,
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import ChoicePage from './ChoicePage'

export class SkillsPage extends React.Component {
    
    render() {
        return (
            <div id={"skills-page"}>
                <div id={"skills-nav-top"}>
                    <Link to={`/skills/roleskillschoice`}>
                        <div id={"role-skill-nav"} className={"highlight-skill-tab"}>
                            Knight
                        </div>
                    </Link>
                    <Link to={`/skills/sourceskillschoice`}>
                        <div id={"source-skill-nav"}>
                            Divine
                        </div>
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
                                button={"role-skill-"}
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
                                button={"source-skill-"}
                            />}
                        />
                    </Switch>
            </div>
        );
    }
  }
  
  const mapStateToProps = state => ({
    name: state.name,
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    database: state.database,
    // sourcename: props.sourcename,
    // rolename: props.rolename

  });

  export default connect(mapStateToProps)(SkillsPage);