import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { browserHistory } from 'react-router'
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

        const promise1 = new Promise((resolve, reject) => {
            if (document.getElementById('find-hero-input')){
                let soughtId = document.getElementById('find-hero-input').value
                // console.log(soughtId)
                resolve(
                    this.props.dispatch(getHeroById(soughtId))    
                );
            }
            else {
                console.log("Wot in tarnation, how are you trying to search without the page being loaded?")
            }
        });
          
        promise1.then((value) => {
            // console.log('heard')
        });
    }

    render() {

    if (this.props.redirect){
        return <Redirect push to={{ pathname: '/final/title'}} />
    }
    
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
    redirect: state.redirect,
    name: state.name,
    database: state.database,
    role: state.role,
    source: state.source,
    currentSkills: state.currentSkills
});

export default connect(mapStateToProps)(FindHero);