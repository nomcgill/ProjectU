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

import {formatEditingPage, updateSkillBank, updateLevel, checkRoleSource} from '../../actions.js' 

import ChoicePage from './Choices/ChoicePage'
import IntersectionPage from './Choices/IntersectionPage'
import SkillsPage from './Skills/SkillsPage'
import CharacterPage from './Choices/MiscInfo/CharacterPage'
import FinishPage from './Choices/MiscInfo/FinishPage'

export class EditingMain extends React.Component {

    joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }

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

    checkRoleSource(roleSource){
        const promise1 = new Promise((resolve, reject) => {
            // let requirements = "requirements"
            resolve(
                this.props.dispatch(checkRoleSource(roleSource, false, this.props.all))
            );
          });
          
          
          promise1.then(() => {
              if (this.props.roleSourceReady){
                // let joinedTitle = this.joinWords(this.props.details.title)
                Array.from(document.getElementsByClassName('accept-rolesource-button')).forEach(element=>{
                    element.classList.remove('non-select')
                })
            }
            // expected output: "Success!"
          });
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
        let stateLevel = this.props.level
        // this.props.dispatch(updateLevel(stateLevel, false, this.props.database.levelingNumbers, this.props.currentSkills))
    }
    
    componentDidMount(){
        // console.log('Mounted')
        this.choiceBoxHighlight()
        let stateLevel = this.props.level
        this.props.dispatch(updateLevel(stateLevel, false, this.props.database.levelingNumbers, this.props.currentSkills))
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
                                    checkRoleSource={(roleSource) => this.checkRoleSource(roleSource)}
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
                                    checkRoleSource={(roleSource) => this.checkRoleSource(roleSource)}
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
                                    currentSkills={this.props.currentSkills}
                                    database={this.props.database}
                                    role={this.props.role}
                                    source={this.props.source}
                                    level={this.props.level}
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
    all: state,
    who: state.who,
    // skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    database: state.database,
    level: state.level,
    currentSkills: state.currentSkills,
    roleSourceReady: state.roleSourceReady
});

export default connect(mapStateToProps)(EditingMain);