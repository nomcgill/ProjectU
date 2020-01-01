import React from 'react'
import {connect} from 'react-redux';
import Skills from './skills'
import Given from './given'

import './body.css'

// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export class Body extends React.Component {

  render() {
    let choices = {
        role: this.props.role,
        source: this.props.source
    }
      return (
          <div>
            <div className={"intersection-box plus skillbox"}>
                <h2>Intersection: {this.props.intersection}</h2>
                <h2>+</h2>
            </div>
            <div>
                <h3 className={"heavy"}>Given Skills</h3>
                <Given
                    title={"Source: "}
                    name={choices.source} 
                    info={this.props.skills.given.source}
                />
                <Given
                    title={"Role: "}
                    name={choices.role} 
                    info={this.props.skills.given.role}
                />
            </div>
            <h3 className={"heavy"}>Chosen Skills</h3>
            <Skills 
                choices={choices}
                info={this.props.skills.basic}
            />
            <Skills 
                choices={choices}
                info={this.props.skills.advanced}
            />
            <Skills 
                choices={choices}
                info={this.props.skills.master}
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