import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import FinalProfile from './FinalProfile.js'
import EditingMain from './EditingMain.js'

import './finalprofile.css'

export default function Main() {

  return (
    <Router>
      <main>
        <Switch>
          <Route 
            exact 
            path="/final" 
            component={FinalProfile} 
          />
          <Route
            path="/"
            component={EditingMain}
          />
        </Switch>
      </main>
    </Router>
  );
}