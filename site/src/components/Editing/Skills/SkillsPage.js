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

import ChoicePage from '../Choices/ChoicePage'
import SkillsChoiceSection from './SkillsChoiceSection'
import NextButton from '../NextButton.js'

// import updateSkillSet from '../../../actions'
import {updateRoleSource, updateSkillsFromSkillsList, tallyUpChoices} from '../../../actions'


export class SkillsPage extends React.Component {

    grabAllSelectedItems(){
        const allItems = document.getElementsByClassName('info')
        const allItemsArray = [...allItems]
        const allSelectedItemsArray = []
        allItemsArray.map((item) => {
            let singleInput = item.children[0]
            // console.log(singleInput.checked)
            if (singleInput.checked){
                allSelectedItemsArray.push(item)
            }
        })
        // console.log(allSelectedItemsArray)
    }

    updateSkills(chosenSkillTitles, where, how){
        // console.log(chosenSkillTitles)
        //which role or source
        // console.log(where)
        // role or source
        // console.log(how)

        let roleOrSourceDatabase = this.props.database[how + 's']
        let relevantCategory = roleOrSourceDatabase.filter(each => each.title === where)
        let relevantCategorySkills = relevantCategory[0].skills
        let skillsList = [...relevantCategorySkills.basic, ...relevantCategorySkills.advanced, ...relevantCategorySkills.master]
        let matchingSkills = []
        skillsList.forEach(databaseSkill => {
            let dashedName = databaseSkill.name.replace(/ /g, "-");
            chosenSkillTitles.forEach(chosenSkillName=>{
                if (dashedName === chosenSkillName){
                    matchingSkills.push(databaseSkill)
                }
            })
        })

        // export const updateRoleSource = (currentSkills, database, roleSource, title, priorRole, priorSource) => dispatch => {
        // this.props.dispatch(updateRoleSource(matchingSkills, this.props.database, how, where, this.props.role, this.props.source))

        // this.props.dispatch(updateSkillSet(matchingSkills))
        
        // this.props.dispatch(matchingSkills)

        const promise1 = new Promise((resolve, reject) => {
            resolve(
                this.props.dispatch(updateSkillsFromSkillsList(matchingSkills,this.props.currentSkills, how))
            );
          });
          
          promise1.then(() => {
            this.tallyCurrentSkills(this.props.currentSkills)
        });
    }

    tallyCurrentSkills(currentSkills){
        this.props.dispatch(tallyUpChoices(currentSkills))
    }

    checkWhatsSeen(){
        let chosenSkillNames = this.props.currentSkills.map(oneSkill => {
            return oneSkill.name    
        })
        // console.log(chosenSkillNames)
        const allItems = document.getElementsByClassName('info')
        const allItemsArray = [...allItems]
        const itemsList = []
        chosenSkillNames.forEach(name => {
            // debugger;
            let dashedName = name.replace(/ /g, "-");
            allItemsArray.forEach((item) => {
                if (item.id === dashedName){
                    let checkboxId = document.getElementById(item.id + '-checkbox')
                    checkboxId.checked = true
                }
            })
        })

    }

    componentDidMount(){
        this.checkWhatsSeen()
        this.tallyCurrentSkills(this.props.currentSkills)
    }
    
    componentDidUpdate(){
        this.checkWhatsSeen()
        // console.log(this.props.currentSkills)
    }

    render() {

        // console.log(this.props.levelingNumbers)

        let currentRoleName = this.props.role
        let currentSourceName = this.props.source

        let currentRole = this.props.database.roles.filter(databaseRole => {
            if (databaseRole.title === currentRoleName){

                return databaseRole
            }
        })
        let currentSource = this.props.database.sources.filter(databaseSource => {
            if (databaseSource.title === currentSourceName){
                return databaseSource
            }
        })
        

        let quantityChosen = this.props.quantityChosen ? this.props.quantityChosen : 
        {   
            Role: {
                Basic: 0,
                Advanced: 0,
                Master: 0,
            },
            Source: {
                Basic: 0,
                Advanced: 0,
                Master: 0
            }
        }
        
        //First make sure that the User has chosen a Role AND a Source!
        if (!this.props.role || !this.props.source){
            return (
                <div id={"skills-page"} className={"choice-page choice-header-box"}>
                    <h2 id={"choose-skills"}>Choose your SKILLS.</h2>
                    <p className={'no-rolesource-notice'}>But first, you'll need to choose your Role and Source! Use the navigation links above to build the first parts of your Hero.</p>
                </div>
            )
        }

        //Role and Source has been chosen!
        return (
            <div id={"skills-page"} className={"choice-page choice-header-box"}>
                <h2 id={"choose-skills"}>Choose your SKILLS.</h2>
                <div id={"skills-nav-top"}>
                    <NavLink 
                        to={`/editing/skills/roleskillschoice`}
                        activeClassName={'highlight-skill-tab'}
                    >
                        <div id={"role-skill-nav"} className={'skill-nav'}>
                            {this.props.role}
                        </div>
                    </NavLink>
                    <NavLink 
                        to={`/editing/skills/sourceskillschoice`}
                        activeClassName={'highlight-skill-tab'}
                    >
                        <div id={"source-skill-nav"} className={'skill-nav'}>
                            {this.props.source}
                        </div>
                    </NavLink>
                </div>
                        {/* <Redirect exact from="/editing/skills" to="editing/skills/roleskillschoice" /> */}
                        <Route 
                            exact
                            path="/editing/skills/roleskillschoice"
                            render={() => 
                                <SkillsChoiceSection 
                                    info={currentRole[0]}
                                    levelingNumbers={this.props.levelingNumbers.Role}
                                    updateSkills={(chosenSkillTitles, where)=> this.updateSkills(chosenSkillTitles, where, "role")}
                                    checkmarkWhatsSeen={()=> this.checkWhatsSeen()}
                                    currentBasicChosen={quantityChosen.Role.Basic}
                                    currentAdvancedChosen={quantityChosen.Role.Advanced}
                                    currentMasterChosen={quantityChosen.Role.Master}
                                    level={this.props.level}
                                    />
                                }
                                />
                        <Route 
                            exact
                            path="/editing/skills/sourceskillschoice"
                            render={() => 
                                <SkillsChoiceSection 
                                info={currentSource[0]}
                                levelingNumbers={this.props.levelingNumbers.Source}
                                updateSkills={(chosenSkillTitles, where)=> this.updateSkills(chosenSkillTitles, where, "source")}
                                checkmarkWhatsSeen={()=> this.checkWhatsSeen()}
                                currentBasicChosen={quantityChosen.Source.Basic}
                                currentAdvancedChosen={quantityChosen.Source.Advanced}
                                currentMasterChosen={quantityChosen.Source.Master}
                                level={this.props.level}
                                />
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
    currentSkills: state.currentSkills,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    level: state.level,
    database: state.database,
    levelingNumbers: state.levelingNumbers,
    quantityChosen: state.quantityChosen
    // sourcename: props.sourcename,
    // rolename: props.rolename
  });

  export default connect(mapStateToProps)(SkillsPage);