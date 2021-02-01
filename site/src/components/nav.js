import React from 'react'
import {connect} from 'react-redux';
import './nav.css'

import Dropdown from './dropdown'
// import { action } fro./Final/homebreweds'

export class Nav extends React.Component {

  render() {
      return (
          <nav>
            <h1 id={'game-title'}>OVERSTEP</h1>
            <Dropdown />
          </nav>
      );
  }
}

export default connect()(Nav);