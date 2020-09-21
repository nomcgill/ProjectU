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

// import Arrow from '../../ImageStore/fliparrow.png'
// import { action } from '../actions'

import Popup from '../Popup/Popup'
import FindHero from './FindHero'
import SaveHero from './SaveHero'

import './profilepopup.css'

export default function EditingPane(props) {

    function onClick(input){
        let elementPopup = document.getElementById(input)
        elementPopup.classList.remove('hidden')
    }    

    // console.log(props)
    
    return (
        <div id={'character-editing-pane'}>
            <Link to={'/final/title/'} className={'button'}>
                <div>
                    <h2>View This Hero</h2>
                </div>
            </Link>
            <div className={'vertical-stacked'}>
                <div className={'button'} onClick={() => onClick('popup-find')} ><h2>Find</h2></div>
                <div className={'button'} onClick={() => onClick('popup-save')} ><h2>Save</h2></div>
            </div>
            <Popup 
                popupContent={
                    <FindHero 
                        elementId={''}
                        rolesource={''}
                    />
                }
                popupId={'popup-find'}
                popupClass={'profile-popup'}
            />
            <Popup 
                popupContent={
                    <SaveHero 
                        elementId={''}
                        rolesource={''}
                    />
                }
                popupId={'popup-save'}
                popupClass={'profile-popup'}
            />
        </div>
    );
}