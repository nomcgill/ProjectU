import React from 'react';
import {connect} from 'react-redux';
import Nav from './nav';
import Character from './character';
import Main from './main';

import {fetchProjectU} from '../actions'

export class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProjectU());
  }

  example(){
    return (this.props.hitpoints)
  }

  render() {
      return (
        <div id={"page"}>
            <Nav />
            <Character />
            <Main />
        </div>
      )
  }
}

const mapStateToProps = state => ({
  editing: state.editing,
  hitpoints: state.hitpoints,
});

export default connect(mapStateToProps)(App);

