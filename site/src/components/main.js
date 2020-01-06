import React from 'react'
import {connect} from 'react-redux';

import Intersection from './Intersection'
import TraitSection from './Traits/TraitSection'
import SkillSection from './Skills/SkillSection'

import './main.css'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export class Body extends React.Component {

  render() {
      return (
          <main>
            <Intersection 
                intersection={this.props.intersection}
            />
            <TraitSection
                source={this.props.source}
                role={this.props.role}
            />
            <SkillSection 
                source={this.props.source}
                role={this.props.role}
                skills={this.props.skills}
            />     
          </main>
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