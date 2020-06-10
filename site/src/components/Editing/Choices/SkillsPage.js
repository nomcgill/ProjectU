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

import ChoicePage from './ChoicePage'
import SkillsChoiceSection from './SkillsChoiceSection'
import NextButton from '../NextButton.js'

export class SkillsPage extends React.Component {

    grabAllSelectedItems(){
        const allItems = document.getElementsByClassName('info')
        const allItemsArray = [...allItems]
        const allSelectedItemsArray = []
        allItemsArray.map((item) => {
            let singleInput = item.children[0]
            console.log(singleInput.checked)
            if (singleInput.checked){
                allSelectedItemsArray.push(item)
            }
        })
        console.log(allSelectedItemsArray)
    }

    componentDidMount(){
        // this.updateAvailable()
    }

    render() {
        // console.log(this.props.info)
        // debugger;
        return (
            <div id={"skills-page"} className={"choice-page choice-header-box"}>
                <h2 id={"choose-skills"}>Choose your SKILLS.</h2>
                {/* <div id={"skill-numbers"} className={"choice-page"}>
                    <h3 id={"skill-numbers-header"}>Skills Chosen for Level 1...</h3>
                    <h3>Basic: 0/5</h3>
                    <h3>Advanced: 0/1</h3>
                    <h3>Master: 0/0</h3>
                </div> */}
                <div id={"skills-nav-top"}>
                    <NavLink 
                        to={`/editing/skills/roleskillschoice`}
                        activeClassName={'highlight-skill-tab'}
                    >
                        <div id={"role-skill-nav"} className={'skill-nav'}>
                            Knight
                        </div>
                    </NavLink>
                    <NavLink 
                        to={`/editing/skills/sourceskillschoice`}
                        activeClassName={'highlight-skill-tab'}
                    >
                        <div id={"source-skill-nav"} className={'skill-nav'}>
                            Divine
                        </div>
                    </NavLink>
                </div>
                        {/* <Redirect exact from="/editing/skills" to="editing/skills/roleskillschoice" /> */}
                        <Route 
                            exact
                            path="/editing/skills/roleskillschoice"
                            render={() => 
                                <SkillsChoiceSection 
                                    info={this.props.database.roles[0]}
                                />
                                // <ChoicePage
                                // // Next step is to match a role with one in the database in order to find relevant skills. Sample, Knight.
                                //     options={()=>options(this.props.role)}
                                //     header={"this.props.role + skills:"}
                                //     next={'/skills/sourceskillschoice'}
                                //     button={"role-skill-"}
                                // />
                            }
                        />
                        <Route 
                            exact
                            path="/editing/skills/sourceskillschoice"
                            render={() => 
                                <SkillsChoiceSection 
                                    info={this.props.database.sources[0]}
                                />
                                // <ChoicePage
                                //     options={()=>options(this.props.source)}
                                //     header={"this.props.source + skills"}
                                //     next={'/finish'}
                                //     button={"source-skill-"}
                                // />
                            }
                        />
                    <NextButton 
                        next={this.props.next}
                    />
            </div>
        );
    }
  }
  
  const mapStateToProps = state => ({
    name: state.name,
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source
    // database: state.database
    // sourcename: props.sourcename,
    // rolename: props.rolename

  });

  export default connect(mapStateToProps)(SkillsPage);