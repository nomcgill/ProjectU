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

import { postNewHero,overwriteHero } from '../../actions'

export class SaveHero extends React.Component {

  createHeroObject(){
    let hero = new Object();
    hero.backgroundFuture = this.props.backgroundFuture
    hero.backgroundPast = this.props.backgroundPast
    hero.backgroundPresent = this.props.backgroundPresent
    hero.currentBackground = this.props.currentBackground
    hero.currentSkills = this.props.currentSkills
    hero.displayFavorites = this.props.displayFavorites
    hero.level = this.props.level
    hero.quantityChosen = this.props.quantityChosen
    hero.name = this.props.name
    hero.role = this.props.role
    hero.source = this.props.source
    hero.rollHistory = this.props.rollHistory
    hero.title = this.props.title
    hero.heroNotes = this.props.heroNotes
    return hero
  }


  // PUT
  onOverwriteExistingHeroClick(){
    let existingId = document.getElementById('existing-id').innerText
    this.props.dispatch(overwriteHero(this.createHeroObject(), existingId))

  }

  //POST
  onNewHeroClick(){
    const promise1 = new Promise((resolve, reject) => {
        resolve(
            this.props.dispatch(postNewHero(this.createHeroObject()))
        );
    });
    promise1.then(() => {
      let newHeroId = this.props.heroID
      alert("Your new Hero Code for this profile is: " + newHeroId)
      // document.getElementById('existing-id').innerText = newHeroId
    });    
  }

  
  render() {
    let name = this.props.name ? this.props.name : "Your un-named character"
    let existingHeroIdBox = this.props.heroID ? (
        <div className={'profile-popup-section'}>
          <p className={'profile-popup-text'}>{name}'s permanent database code is: </p>
          <p className={'profile-popup-text'} id={'existing-id'}>{this.props.heroID}</p>
          <input onClick={()=> this.onOverwriteExistingHeroClick()} type={'submit'} value={'SAVE'} id={'save-hero-button'}/>
          <p className={'italic profile-popup-text'}>This Save will overwrite the data using the current 24-digit Hero code for the current session.</p>
      </div>
    ) : ''
    // let existingID = this.props.heroID ? this.props.heroID : ''

    // console.log(this.props)
    return (
        <div>
            <h2>Save Your Hero</h2>
            <p className={'profile-popup-text'}>To recall your Hero, you will need to retain a 24-digit code. 
            This random code will be automatically generated upon Save.</p>
            {existingHeroIdBox}
            <div className={'profile-popup-section'}>
                {/* <p className={'profile-popup-text'}>5f237b0ba6bfc62ad08afb64</p> */}
                <input onClick={()=> this.onNewHeroClick()} type={'submit'} value={'SAVE AS NEW'} id={'save-hero-button'}/>
                <p className={'italic profile-popup-text'}>This Save will create a new Hero code.</p>
            </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  heroID: state.heroID,
  //// Below is to save to hero profile
  backgroundFuture: state.backgroundFuture,
  backgroundPast: state.backgroundPast,
  backgroundPresent: state.backgroundPresent,
  currentBackground: state.currentBackground,
  currentSkills: state.currentSkills,
  displayFavorites: false,
  level: state.level,
  quantityChosen: state.quantityChosen,
  name: state.name,
  role: state.role,
  source: state.source,
  rollHistory: state.rollHistory,
  title: state.title,
  heroNotes: state.heroNotes,
});

export default connect(mapStateToProps)(SaveHero);