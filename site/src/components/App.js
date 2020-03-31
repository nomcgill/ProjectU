import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Nav from './nav';
import Character from './CharacterPane/character';
import Main from './main';

import {fetchProjectU} from '../actions'

export class App extends React.Component {

  // componentDidMount() {
  //   console.log("fetchProjectU ran")
  // }

  example(){
    return (this.props.hitpoints)
  }

  render() {
    this.props.dispatch(fetchProjectU());
      return (
        <Router>
          <Switch>
            <Redirect exact path='/' to='/editing/role' />
            <div id={"page"}>
                <div id={"fixed-top"}>
                  {/* <div id={"background-top-bar"}>
                    <div id={"background-nav-bar"} />
                    <div id={"background-character-bar"}/>
                  </div> */}
                  <Nav />
                  <Character />
                </div>
                <div id={"background-top-bar"}>
                    <div id={"background-nav-bar"} />
                    <div id={"background-character-bar"}/>
                </div>
                <div id={'back-pane'} />
                {/* <div id={"dimmer"}/> */}
                <Main />
            </div>
          </Switch>
        </Router>
      )
  }
}

const mapStateToProps = state => ({
  editing: state.editing,
  hitpoints: state.hitpoints,
});

export default connect(mapStateToProps)(App);

