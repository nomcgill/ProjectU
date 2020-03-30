import React from 'react'
import {connect} from 'react-redux';
import './nav.css'

import Dropdown from './dropdown'
// import { action } from '../actions'

export class Nav extends React.Component {

  render() {
      return (
          <nav>
            <h1>OVERSTEP</h1>
            {/* <h1>?</h1> */}
            <Dropdown />
          </nav>
      );
  }
}

export default connect()(Nav);