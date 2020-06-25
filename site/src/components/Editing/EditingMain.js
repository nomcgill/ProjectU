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

import {formatEditingPage, updateSkillBank} from '../../actions.js' 

import ChoicePage from './Choices/ChoicePage'
import IntersectionPage from './Choices/IntersectionPage'
import CharacterPage from './MiscInfo/CharacterPage'
import SkillsPage from './Skills/SkillsPage'
import FinishPage from './MiscInfo/FinishPage'

export class EditingMain extends React.Component {

    formatEditAction(){
        this.props.dispatch(formatEditingPage(false))
    }

    updateSkillBank(){
        let database = this.props.database
        let role = this.props.role
        let source = this.props.source
        let intersection = this.props.intersection
        this.props.dispatch(updateSkillBank(database, role, source, intersection))
    }

    choiceBoxHighlight(){

        const promise1 = new Promise((resolve, reject) => {
            let choiceBoxes = [...(document.querySelectorAll('.choice-box'))]
            resolve(
                choiceBoxes.forEach(box => {
                    box.classList.remove('chosen-rolesource')
                    // box.classList.remove('chosen-rolesource')
                    // console.log(box)
                })
            );
          });
          
          promise1.then(() => {
            let elementRole = document.getElementById('choice-box-' + this.props.role)
            let elementSource = document.getElementById('choice-box-' + this.props.source)
            // console.log(elementRole)
            // console.log(elementSource)
            if (this.props.role && elementRole){
                // console.log(elementRole)
                elementRole.classList.add('chosen-rolesource')
            }
            if (this.props.source && elementSource){
                // console.log(elementSource)
                elementSource.classList.add('chosen-rolesource')
            }
            // expected output: "Success!"
          });

        // debugger;
    }

    componentDidUpdate(){
        // console.log('Updated')
        this.updateSkillBank()
        this.choiceBoxHighlight()
    }

    componentDidMount(){
        // console.log('Mounted')
        this.choiceBoxHighlight()
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
                            path="/editing/role"
                            render={() => 
                                <ChoicePage
                                    header={"Choose your ROLE."}
                                    info={this.props.database.roles}
                                    next={"/editing/source"}
                                    button={"/editing/role"}
                                    todo={this.formatEditAction}
                                    rolesource={'role'}
                                />
                            }
                        />
                        <Route 
                            path="/editing/source"
                            render={() => 
                                <ChoicePage
                                    header={"Choose your SOURCE."}
                                    info={this.props.database.sources}
                                    next={"/editing/who"}
                                    button={"/editing/source"}
                                    rolesource={'source'}
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