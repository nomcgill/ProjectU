import React from 'react'
import {connect} from 'react-redux';
import './character.css'

// import { action } from '../actions'

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
                    <h3>{this.props.source}</h3>
                    <h3>{this.props.role}</h3>
                </div>
            </div>
            <h3 id={'intersection'}>{this.props.intersection}</h3>
          </div>
      );
  }
}

const mapStateToProps = state => ({
  source: state.source,
  role: state.role,
  intersection: state.intersection,
  level: state.level
});

export default connect(mapStateToProps)(Character);