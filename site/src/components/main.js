import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Final from './Final/Final.js'
// import FinalProfile from './FinalProfile'
import EditingMain from './Editing/EditingMain.js'
import RollThatDice from './Rolling/RollThatDice'

export default function Main() {

  return (
      <main>
        <div id="main-container">
            <Route
              path="/final" 
              component={Final} 
            />
            <Route
              path="/editing"
              component={EditingMain}
            />
            <Route
              path="/rolling"
              component={RollThatDice}
            />
            {/* <Redirect exact from="/rolling" to={"/rolling/muscle"} /> */}
        </div>
      </main>
  );
}