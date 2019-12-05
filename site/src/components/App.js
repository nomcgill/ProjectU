import React from 'react'
import {connect} from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

import { action } from '../actions'
// import logo from '../logo.svg';

export class App extends React.Component {

  example(){
    return (this.props.exampleState)
  }

  render() {
      return (
          <div>
            <h1>
              {this.example()}
            </h1>
          </div>
      );
  }
}

const mapStateToProps = state => ({
  exampleState: state.exampleState
});

export default connect(mapStateToProps)(App);

