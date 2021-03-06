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

import Popup from '../Popup/Popup'
import './trackingpopup.css'

import Arrow from '../../ImageStore/fliparrow.png'
import Notepad from '../../ImageStore/notepad.png'
// import Dice from '../../ImageStore/dice.png'

import {updateOverstepped} from '../../actions'
import Hitpoints from './Hitpoints'

export class TrackingPane extends React.Component {

    componentDidMount() {
        var checkbox = document.getElementById("overstep-check")
        if (this.props.overstepped){
            checkbox.checked = this.props.overstepped
        }
    }

    updateHP(input){
        // let elementPopup = document.getElementById(input)
        // elementPopup.classList.remove('hidden')
        // console.log('updating HP')
        
    }

    updateOverstep(){
        var checkbox = document.getElementById("overstep-check")
        this.props.dispatch(updateOverstepped(checkbox.checked))
    }

    render(){

        let roleDataArray = this.props.databaseRoles.filter(oneRole => oneRole.title === this.props.role) 
        let roleData = roleDataArray[0]
        let roleDataHp = roleData ? roleData.hp : '?'
        // console.log(roleData)
        let currentHP = 
            this.props.currentHP ? this.props.currentHP : '?'
        let damage = roleData ? roleData.damage : '?'

        return (
            <div id={'character-tracking-pane'}>
                <label className={'character-pane-box'} id={'overstep-box'} htmlFor={'overstep-check'}>
                    <h3>Overstep</h3>
                    <input type={'checkbox'} id={'overstep-check'} name={'overstep-check'} onClick={() => this.updateOverstep()} />
                </label>
                <div id={'tracking-notes-button'}>
                    <div id={'tracking-notes'}>
                        <img src={Notepad} id={'notepad'} />
                    </div>
                    <div className={'character-pane-box'} id={'hp-box'} onClick={() => this.updateHP('popup-hp')}>
                        <h3>HP</h3>
                        <div id={'hp-line'}>
                            <h2 id={'current-hp'}>{currentHP} </h2>
                            <h3>/{roleDataHp}</h3>
                        </div>
                    </div>
                    <div className={'character-pane-box'} id={'damage-box'}>
                        <h3>DMG</h3>
                        <h2>{damage}</h2>
                    </div>
                </div>
                <Link to={'/final/title'}>
                    <div id={'arrow-box'} className={'character-pane-box'}>
                        <img id={'flip-arrow'} src={Arrow} />
                        <p>HERO</p>
                    </div>
                </Link>
                <Popup 
                    popupContent={
                        <Hitpoints 
                            elementId={''}
                            rolesource={''}
                            roleHP={roleDataHp}
                        />
                    }
                    popupId={'popup-hp'}
                    popupClass={'tracking-popup'}
            />
            </div>    
        );
    }
}

const mapStateToProps = state => ({
    hitpoints: state.hitpoints,
    overstepped: state.overstepped,
    currentHP: state.currentHP,
    role: state.role,
    databaseRoles: state.database.roles
  });
  
  export default connect(mapStateToProps)(TrackingPane);