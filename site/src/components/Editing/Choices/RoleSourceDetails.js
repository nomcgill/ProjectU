import React from 'react'
import {connect} from 'react-redux';

import './rolesourcedetails.css'
import TinyTrait from './TinyTrait'

import DemonicDecision from './RoleChoices/DemonicDecision'
import ChakrahDecision from './RoleChoices/ChakrahDecision'
import ElementalistDecision from './RoleChoices/ElementalistDecision'
import BountyHunterDecision from './RoleChoices/BountyHunterDecision'
import MorphDecision from './RoleChoices/MorphDecision'
import KnightDecision from './RoleChoices/KnightDecision'

import { 
    updateRoleSource, 
    updateDemonic, 
    updateChakrah, 
    updateCore, 
    updateMorph, 
    updateBounty,
    updateAllChoicesVisually 
} from '../../../actions'

export class RoleSourceDetails extends React.Component {

    componentDidMount(){
        // this.props.dispatch(roleSourceReady(roleSource))

    }

    updateAllVisuals(){
        this.updateDemonicVisual()
        this.updateChakrahVisual()
        this.updateElementalistVisual()
        this.updateMorphVisual()
        this.updateBountyVisual()
    }

    joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }

    updateDemonic(origin){
        let selected = document.getElementById(origin.name + '-radio')
        if (selected.checked){
            const promise1 = new Promise((resolve, reject) => {
                resolve(
                    this.props.dispatch(updateDemonic(origin, this.props.currentSkills))
                );
            });
              
            promise1.then(() => {
                let roleSource = this.props.details.title
                this.props.checkRoleSource(roleSource)
                this.props.dispatch(updateAllChoicesVisually(this.props.currentSkills))
                // this.updateDemonicVisual()
            });     
        }
    }
    
    // updateDemonicVisual(){
    //     Array.from(document.getElementsByClassName('demon-decision-button')).forEach(element=> 
    //         element.classList.remove('selected-decision-trait'))
    //     let foundOrigin = this.props.currentSkills.filter(skill=>{
    //         return skill.name === "Fiend" || skill.name === "Abomination" || skill.name === "Devil"
    //     })
    //     if (foundOrigin[0]){
    //         if (document.getElementById(foundOrigin[0].name)){
    //             document.getElementById(foundOrigin[0].name).classList.add('selected-decision-trait')
    //         }
    //     }
    // }

    updateMorph(beast, animalTextId){
        let joinedName = this.joinWords(beast.name)
        let selected = document.getElementById(joinedName + '-radio')
        if (selected.checked){
            const promise1 = new Promise((resolve, reject) => {
                resolve(
                    this.props.dispatch(updateMorph(beast, this.props.currentSkills, animalTextId))
                );
              });
              
              promise1.then(() => {
                  console.log(this.props.currentSkills)
                let roleSource = this.props.details.title
                this.props.checkRoleSource(roleSource)
                // this.updateMorphVisual(animalTextId)
                this.props.dispatch(updateAllChoicesVisually(this.props.currentSkills))
              });     
        }
    }

    // updateMorphVisual(){
    //     Array.from(document.getElementsByClassName('beast-decision-button')).forEach(element=> 
    //         element.classList.remove('selected-decision-trait'))
    //     Array.from(document.getElementsByClassName('beast-name-inputs')).forEach(element=>
    //         element.classList.add('hidden'))
    //     let foundBeast = this.props.currentSkills.filter(skill=> {
    //         let endOfSkillName = skill.name.slice(skill.name.length - 11);
    //         return (endOfSkillName === "Small Beast" || endOfSkillName === "Large Beast" || endOfSkillName === "edium Beast")
    //     })
    //     if (foundBeast[0]){
    //         let beastId = this.joinWords(foundBeast[0].name)
    //         if (document.getElementById(beastId)){
    //             document.getElementById(beastId).classList.add('selected-decision-trait')
    //             document.getElementById('name-'+beastId).classList.remove('hidden')
    //             document.getElementById('animal-'+beastId).classList.remove('hidden')
    //         }
    //     }
    // }
    
    updateCore(core){
        let selected = document.getElementById(this.joinWords(core.name) + '-radio')
        if (selected.checked){
            const promise1 = new Promise((resolve, reject) => {
                resolve(
                    this.props.dispatch(updateCore(core, this.props.currentSkills))
                );
              });
              
              promise1.then(() => {
                let roleSource = this.props.details.title
                this.props.checkRoleSource(roleSource)
                // this.updateElementalistVisual()
                this.props.dispatch(updateAllChoicesVisually(this.props.currentSkills))
              });     
        }
    }
    
    // updateElementalistVisual(){
    //     Array.from(document.getElementsByClassName('core-decision-button')).forEach(element=> 
    //         element.classList.remove('selected-decision-trait'))
    //     let foundCore = this.props.currentSkills.filter(skill=> {
    //         return (skill.name.substring(0,7) === "Core of")        
    //     })
    //     if (foundCore[0]){
    //         let coreId = this.joinWords(foundCore[0].name)
    //         if (document.getElementById(coreId)){
    //             document.getElementById(coreId).classList.add('selected-decision-trait')
    //         }
    //     }
    // }

    updateChakrah(tattooSkill){
        let joinedName = this.joinWords(tattooSkill.name)
        let selected = document.getElementById(joinedName + '-radio')
        const promise1 = new Promise((resolve, reject) => {
            if (selected){
                resolve(
                    this.props.dispatch(updateChakrah(tattooSkill, this.props.currentSkills, selected.checked))
                    );
            }
        })      
        promise1.then(() => {
            this.props.dispatch(updateAllChoicesVisually(this.props.currentSkills))
        });     
    }

    updateBounty(specialization, radio){
        // console.log('heard')
        let selected = document.getElementById(radio)
        const promise1 = new Promise((resolve, reject) => {
            if (selected){
                resolve(
                    this.props.dispatch(updateBounty(specialization, this.props.currentSkills, selected.checked))
                );
            }
        })      
        promise1.then(() => {
            let roleSource = this.props.details.title
            this.props.checkRoleSource(roleSource)
            // this.updateBountyVisual()
            this.props.dispatch(updateAllChoicesVisually(this.props.currentSkills))
        });     
    }

    // updateBountyVisual(){
    //     Array.from(document.getElementsByClassName('specialty-decision-button')).forEach(element=> 
    //         element.classList.remove('selected-decision-trait'))
    //     let existingSpecialtySkills = this.props.currentSkills.filter(skill=>{
    //         return (skill.bountyCategory && skill.skillLevel === "Given")
    //     })
    //     if (existingSpecialtySkills.length > 0){
    //         let specialtyId = existingSpecialtySkills[0].bountyCategory
    //         if (document.getElementById(specialtyId)){
    //             document.getElementById(specialtyId).classList.add('selected-decision-trait')
    //         }
    //     }
    // }
    
    // updateChakrahVisual(){
    //     Array.from(document.getElementsByClassName('chakrah-decision-button')).forEach(element=> 
    //         element.classList.remove('selected-decision-trait'))
    //     let foundTattoos = this.props.currentSkills.filter(skill=>{
    //         return skill.name.substring(0,6) === "Tattoo" && skill.category === "Source"
    //     })
    //     foundTattoos.forEach(tattoo=>{
    //         let tattooId = this.joinWords(tattoo.name)
    //         if (document.getElementById(tattooId)){
    //             document.getElementById(tattooId).classList.add('selected-decision-trait')
    //         }
    //     })
    // }

    componentDidUpdate(){
        this.keepPopupVisible()
    }

    keepPopupVisible(){
        let thisPopup = "popup-" + document.getElementById(this.props.elementId)
        if (document.getElementById(this.props.elementId)){
            thisPopup.classList.remove('hidden')
        }
    }

    choose(roleSource){
        let popup = ('popup-' + this.props.elementId)
        let title = this.props.details.title
        // let roleSourceReady = this.props.dispatch(roleSourceReady(roleSource))
        if (!this.props.roleSourceReady){
            alert('Notify that choices must be made!')
            return
        }
        if (title !== this.props.role && title !== this.props.source){
            this.props.dispatch(updateRoleSource(this.props.currentSkills, this.props.database, roleSource, title, this.props.role, this.props.source))
            document.getElementById(popup).classList.add("hidden")
        }
        else if (title === this.props.role || title === this.props.source){
            alert(`Choice wasn't changed.`)
        }
        else (
            alert("error choosing")
        )
    }


  render() {

    let joinedTitle = this.joinWords(this.props.details.title)

    let traitNames = () => {
        let list = []
        for (let i = 0; i < this.props.details.traits.length; i++){
            let comma = i < this.props.details.traits.length - 1 ? ', ' : ''
            list.push(this.props.details.traits[i].name + comma)
        }
        return list
    }

    // let skillNavs = this.props.details.traits.map(trait => {
    //     let name = this.joinWords(trait.name)
    //     return (
    //         <li key={'trait-nav-' + name} id={'trait-nav-' + name}>
    //             <NavLink
    //                 to={`/editing/${this.props.rolesource}/${name}`} 
    //                 activeClassName={"highlight-trait-nav"}
    //             >
    //                 {trait.name}
    //             </NavLink>
    //         </li>
    //     )
    // })

    let traitBlocks = this.props.details.traits ? this.props.details.traits.map(trait => {

            return (
                <TinyTrait
                    key={trait.name + this.props.elementId}
                    name={trait.name}
                    trait={trait}
                    elementId={this.props.elementId}
                />
            )
        // return (
            // <Route 
            //     exact
            //     key={'key-' + name}
            //     path={`/editing/${this.props.rolesource}/${name}`} 
            //     render={() => 
                // }
            // />
        // )
    }) : ''

    let roleSourceChoices = (roleSourceTitle) => {
        if (roleSourceTitle === "Demonic"){
            return (
                <DemonicDecision
                    database={this.props.database}
                    updateDemonic={(origin)=>this.updateDemonic(origin)}
                />
            )
        }
        if (roleSourceTitle === "Chakrah"){
            return (
                <ChakrahDecision
                    database={this.props.database}
                    updateChakrah={(tattooSkill)=>this.updateChakrah(tattooSkill)}
                />
            )
        }
        if (roleSourceTitle === "Elementalist"){
            return (
                <ElementalistDecision
                    database={this.props.database}
                    updateCore={(core)=>this.updateCore(core)}
                />
            )   
        }
        if (roleSourceTitle === "Bounty Hunter"){
            return (
                <BountyHunterDecision
                    database={this.props.database}
                    updateBounty={(specialization, radioId)=>this.updateBounty(specialization, radioId)}
                />
            )
            
        }
        if (roleSourceTitle === "Morph"){
            return (
                <MorphDecision
                    database={this.props.database}
                    updateMorph={(beast, animalTextId)=>this.updateMorph(beast, animalTextId)}
                />
            )
            
        }
        if (roleSourceTitle === "Knight"){
            return (
                <KnightDecision
                    database={this.props.database}
                />
            )
        }
        
    }

    let sampleSkills = this.props.details.sampleSkills ? this.props.details.sampleSkills : ''
    function sourceFeature(rolesource, details){
        // debugger;
        if (rolesource === "source"){
            return (
                <p>{details.sourceFeature.name} - {details.sourceFeature.description}</p>
            )
        }
    }

    let playingAsTitle = this.props.details.playingAs ? 'Playing the ' + this.props.details.title : ''

    let playingAs = this.props.details.playingAs ? this.props.details.playingAs.map((oneLine, index) => {
        return ( 
            <p key={index} className={'playing-as-content'}>{oneLine}</p>
        )
    }) : ''
    let playingAsSection = this.props.details.playingAs ? 
        (                
            <div className={'playing-as'}>
                <h3>{playingAsTitle}</h3>
                {playingAs}
            </div>
        ) : ''
    

    return (
        <div className={'role-source-popup-details'}>
            <h1>{this.props.details.title}</h1>
            <div className={'role-source-overlay'} />
            <div className={'scrollable-popup-portion'}>
                <div className={'scrollable-content'}>
                    <p>{this.props.details.description}</p>
                    {sourceFeature(this.props.rolesource, this.props.details)}
                    {/* <p>Alternate Wounds: {this.props.details.alternateWounds}</p>
                    <p>Sample Skills: {sampleSkills}</p> */}
                </div>
                {playingAsSection}
                <div className={'rolesource-trait-section'}>
                    <h2 className={'rolesource-given-skills-tag'}>Given Skills</h2>    
                    {/* Unique Component for individual rolesources that require choices to be made. These choices must update the state somehow. */}
                    {/* <ul className={'choice-skill-nav'}>
                        {skillNavs}
                    </ul> */}
                    {/* <Switch> */}
                    {traitBlocks}
                    {roleSourceChoices(this.props.details.title)}
                    {/* </Switch> */}
                </div>
            </div>
            <div className={'accept-or-decline'}>
                {/* <button id={'decline-rolesource-choice'}>Go Back</button> */}
                {/* <button id={'accept-rolesource-choice'}>&#10004;</button> */}
                <button 
                    onClick={() => this.choose(this.props.rolesource)} 
                    id={'accept-rolesource-choice'} className={'non-select accept-rolesource-button'}>
                        Choose {this.props.details.title}
                    </button>
            </div>
            {/* <p>{traitNames()}</p> */}
        </div>
      );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  database: state.database,
  role: state.role,
  source: state.source,
  currentSkills: state.currentSkills,
  roleSourceReady: state.roleSourceReady
});

export default connect(mapStateToProps)(RoleSourceDetails);