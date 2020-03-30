import React from 'react'
import {connect} from 'react-redux';

import {formatEditingPage} from '../actions'

import Intersection from './Intersection'
import TraitSection from './Traits/TraitSection'
import SkillSection from './Skills/SkillSection'

export class FinalProfile extends React.Component {

    componentDidMount(){
        // this.props.dispatch(formatEditingPage())
    }
    

    // componentDidMount(){
    //     if (document.getElementById('name')){
    //         document.getElementById('name').classList.remove("hidden")
    //         document.getElementById('titles').classList.remove("hidden")
    //         document.getElementById('arrow-box').classList.remove("hidden")
    //         document.getElementById('character-pane-skills-numbers').classList.add('hidden')
    //         document.getElementById('dimmer').classList.add('hidden')
    //     }
    // }

    render() {
        // this.props.dispatch(formatEditingPage())
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
            <div id={"bottom-pane"}>
                ©2020 ProjectU | All Rights Reserved
            </div>     
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