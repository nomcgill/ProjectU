import React from 'react'
import {connect} from 'react-redux';

// import { action } from '../actions'

export class Homebrewed extends React.Component {
  
  render() {
    let hidden = !this.props.homebrewedSkillQuantities ? ' hidden' : ''
      return (
          <div id={'final-homebrew-note'} className={hidden}>
            <p>Homebrewed</p>
          </div>
      );
  }
}

const mapStateToProps = state => ({
    homebrewedSkillQuantities: state.homebrewedSkillQuantities,
})

export default connect(mapStateToProps)(Homebrewed);