import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import Character from './character';
import Body from './body';

// import { action } from '../actions';

export class App extends React.Component {

  example(){
    return (this.props.exampleState)
  }

  render() {
      return (
        <div>
            <Nav />
            <Character />
            <Body />
            <h1>
              {this.example()}
            </h1>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  exampleState: state.exampleState
});

export default connect(mapStateToProps)(App);

