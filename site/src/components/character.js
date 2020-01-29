import React from 'react'
import {connect} from 'react-redux';

import './character.css'

export class Character extends React.Component {

  example(){
    return (this.props.exampleState)
  }

  render() {
      return (
          <div id={'character-pane'}>
            <div id={'level-box'}>
                <p>Level</p>
                <h2>{this.props.level}</h2>
            </div>
            <div id={'titles'}>
                <div id={'source-role'}>
                    <h3>{this.props.source.title}</h3>
                    <h3>{this.props.role.title}</h3>
                </div>
            </div>
            <h3 id={'name'}>{this.props.name}</h3>
          </div>
      );
  }
}

const mapStateToProps = state => ({
  source: state.source,
  role: state.role,
  intersection: state.intersection,
  level: state.level,
  name: state.name
});

export default connect(mapStateToProps)(Character);