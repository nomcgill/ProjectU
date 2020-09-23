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

import { updateRoleSource, updateSkillBank, getHeroById } from '../../actions'

export class FindHero extends React.Component {

    handleFetch(){
        // console.log('heard')
        if (document.getElementById('find-hero-input')){
            let soughtId = document.getElementById('find-hero-input').value
            this.props.dispatch(getHeroById(soughtId))
            // console.log(soughtId)
        }
    }

    render() {
    
    return (
        <div>
            <h2>Find Saved Hero</h2>
            <div className={'profile-popup-section'}>
                <p className={'profile-popup-text'}>Recall a hero using its 24-digit code that was generated upon previous Save.</p>
                <label htmlFor={'find-hero-input'}>Code: </label>
                <input type={'text'} id={'find-hero-input'} />
                <button id={'retrieve-hero-button'} onClick={()=> this.handleFetch()}>Retrieve</button>
                <p className={'profile-popup-text italic'}>When finding new Hero data, current background Hero data will be lost.</p>
            </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  database: state.database,
  role: state.role,
  source: state.source,
  currentSkills: state.currentSkills
});

export default connect(mapStateToProps)(FindHero);