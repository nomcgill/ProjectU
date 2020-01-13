import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import Character from './character';
import Main from './main';

// import { action } from '../actions';

export class App extends React.Component {

  example(){
    return (this.props.exampleState)
  }

  render() {
      return (
        <div id={"page"}>
            <Nav />
            <Character />
            <Main />
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

