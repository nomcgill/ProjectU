import React from 'react'
import {connect} from 'react-redux';

import SkillSection from './Skills/SkillSection'
import TraitSection from './Traits/TraitSection'

import './body.css'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export class Body extends React.Component {

  render() {
      return (
          <div>
            <div className={"intersection-box plus skillbox"}>
                <h2>Intersection: {this.props.intersection.title}</h2>
                <h2>+</h2>
            </div>
            <TraitSection
                source={this.props.source}
                role={this.props.role}
            />
            <SkillSection 
                source={this.props.source}
                role={this.props.role}
                skills={this.props.skills}
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
});

export default connect(mapStateToProps)(Body);