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

// import {  } from '../../actions'

export class Hitpoints extends React.Component {


  
  render() {
    // console.log('hitpoints!')
    // console.log(this.props.currentHP)
    let currentHP = this.props.currentHP ? this.props.currentHP : '?'
    return (
        <div>
            <h2>Champion Health</h2>
            <p>{currentHP}/{this.props.roleHP}</p>
        </div>
      );
  }
}

const mapStateToProps = state => ({
    currentHP: state.currentHP
});

export default connect(mapStateToProps)(Hitpoints);