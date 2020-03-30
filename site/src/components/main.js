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
import EditingMain from './Editing/EditingMain.js'

import './finalprofile.css'

export default function Main() {

  return (
      <main>
        <div id="main-container">
            <Route
              path="/final" 
              component={FinalProfile} 
            />
            <Route
              path="/editing"
              component={EditingMain}
            />
        </div>
      </main>
  );
}