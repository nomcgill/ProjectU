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

import './rolesourcedetails.css'
import TinyTrait from './TinyTrait'

export class RoleSourceDetails extends React.Component {

    joinWords(string){
        let joined = string.split(" ").join("")
        return joined.replace(/[^\w\s]/gi, '')
    }

  render() {

    let traitNames = () => {
        let list = []
        for (let i = 0; i < this.props.details.traits.length; i++){
            let comma = i < this.props.details.traits.length - 1 ? ', ' : ''
            list.push(this.props.details.traits[i].name + comma)
        }
        return list
    }

    let skillNavs = this.props.details.traits.map(trait => {
        let name = this.joinWords(trait.name)
        return (
            <li key={'trait-nav-' + name} id={'trait-nav-' + name}>
                <NavLink
                    to={`/editing/${this.props.rolesource}/${name}`} 
                    activeClassName={"highlight-trait-nav"}
                >
                    {trait.name}
                </NavLink>
            </li>
        )
    })

    let traitBlocks = this.props.details.traits.map(trait => {
        let name = this.joinWords(trait.name)
        return (
            <Route 
                exact
                path={`/editing/${this.props.rolesource}/${name}`} 
                render={() => 
                    <TinyTrait
                        name={trait.name}
                        trait={trait}
                        elementId={this.props.elementId}
                    />
                }
            />
        )
    })

    let sampleSkills = this.props.details.sampleSkills ? this.props.details.sampleSkills : ''

      return (
        <div className={'role-source-popup-details'}>
            <h1>{this.props.details.title}</h1>
            <div className={'scrollable-content'}>
                <p>{this.props.details.description}</p>
                <p>Alternate Wounds: {this.props.details.alternateWounds}</p>
                <p>Sample Skills: {sampleSkills}</p>
            </div>
            <div className={'rolesource-trait-section'}>
                <p className={'rolesource-given-skills-tag'}>Given Skills</p>
                <ul>
                    {skillNavs}
                </ul>
                <Switch>
                    {traitBlocks}
                </Switch>
            </div>
            <div className={'accept-or-decline'}>
                {/* <button id={'decline-rolesource-choice'}>Go Back</button> */}
                {/* <button id={'accept-rolesource-choice'}>&#10004;</button> */}
                <button id={'accept-rolesource-choice'}>Choose {this.props.details.title}</button>
            </div>
            {/* <p>{traitNames()}</p> */}
        </div>
      );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  database: state.database
});

export default connect(mapStateToProps)(RoleSourceDetails);