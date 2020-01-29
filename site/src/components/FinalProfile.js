import React from 'react'
import {connect} from 'react-redux';

import Intersection from './Intersection'
import TraitSection from './Traits/TraitSection'
import SkillSection from './Skills/SkillSection'

export class FinalProfile extends React.Component {

    render() {
        return (
            <div>
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

  export default connect(mapStateToProps)(FinalProfile);