import React from 'react'
import {connect} from 'react-redux';

// import { action } from '../actions'

export class Dropdown extends React.Component {

  render() {
      return (
        <div id={"dropdown"}>
            <div id={"plus"}>+</div>
            <ul id={"menu"}>
                <li>{this.props.name}</li>
                <li>Create PDF</li>
                <li>Reset Builder</li>
            </ul>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(Dropdown);