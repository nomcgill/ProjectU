import React from 'react'
import {connect} from 'react-redux';
import Skills from './skills'
// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export class Body extends React.Component {

  render() {
      return (
          <div>
            <h2>
                Intersection: {this.props.intersection}
            </h2>
            <Skills 
                info={this.props.skills.basic}
            />
            <Skills 
                info={this.props.skills.advanced}
            />
            <Skills 
                info={this.props.skills.master}
            />       
          </div>
      );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  skills: state.skills,
  intersection: state.intersection
});

export default connect(mapStateToProps)(Body);