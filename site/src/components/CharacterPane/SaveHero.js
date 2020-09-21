import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

// import { updateRoleSource, updateSkillBank } from '../../../actions'

export class SaveHero extends React.Component {


  render() {
    // console.log(this.props)
    return (
        <div>
            <h2>Save Your Hero</h2>
            <div className={'profile-popup-section'}>
                <p className={'profile-popup-text'}>Your Hero's permanent database code is: </p>
                {/* <p className={'profile-popup-text'}>To recall your Hero, you will need to retain a 24-digit code. 
                This random code will be automatically generated upon Save.</p> */}
                <p className={'profile-popup-text'}>5f237b0ba6bfc62ad08afb64</p>
                <input type={'submit'} value={'SAVE'} id={'save-hero-button'}/>
                <p className={'italic profile-popup-text'}>This Save will overwrite the data using the current 24-digit Hero code.</p>
            </div>
            <div className={'profile-popup-section'}>
                <input type={'submit'} value={'SAVE AS NEW'} id={'save-hero-button'}/>
                <p className={'italic profile-popup-text'}>This Save will create a new Hero code.</p>
            </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  backgroundFuture: state.backgroundFuture,
  backgroundPast: state.backgroundPast,
  backgroundPresent: state.backgroundPresent,
  currentSkills: state.currentSkills,
  displayFavorites: false,
  level: state.level,
  quantityChosen: state.quantityChosen,
  name: state.name,
  role: state.role,
  source: state.source,
  rollHistory: state.rollHistory,
  title: state.title,
  heroNotes: state.heroNotes
});

export default connect(mapStateToProps)(SaveHero);