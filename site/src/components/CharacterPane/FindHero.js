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

export class FindHero extends React.Component {

    
    render() {
    
    return (
        <div>
            <form>
                <h2>Find Saved Hero</h2>
                <div className={'profile-popup-section'}>
                    <p className={'profile-popup-text'}>Recall a hero using its 24-digit code that was generated upon previous Save.</p>
                    <label htmlFor={'find-hero-input'}>Code: </label>
                    <input type={'text'} id={'find-hero-input'} />
                    <p className={'profile-popup-text italic'}>When finding new Hero data, current background Hero data will be lost.</p>
                </div>
            </form>
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