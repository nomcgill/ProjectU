import React from 'react'
import {connect} from 'react-redux';

import Popup from '../../Popup/Popup'
import RoleSourceDetails from './RoleSourceDetails'

// import Knight from '../../../ImageStore/knight.png'

export default function RoleSourceOption(props) {

    function onClick(input){
        let elementPopup = document.getElementById('popup-' + props.elementId)
        elementPopup.classList.remove('hidden')
    }

    return (
        <div>
            <div className={"choice-box"} id={'choice-box-' + props.section.title} onClick={() => onClick(props.section)}>
                <h3 className={'edit-section-title'}>{props.section.title}</h3>
                <p className={'edit-tagline'}>{props.section.tagline}</p>
                <img src={props.img} className={'role-icon-img'} id={props.elementId + '-img'}/>
                {/* <p>Given Skills: Justice, Soulbind</p> */}
                {/* <div className={props.section.title + "-traits-dropdown"}>{props.section.traits[0].description} traits dropdown</div> */}
            </div>
            <Popup 
                popupContent={
                    <RoleSourceDetails 
                        details={props.section} 
                        img={props.img}
                        elementId={props.elementId}
                        rolesource={props.rolesource}
                    />
                }
                popupId={'popup-' + props.elementId}
                popupClass={'role-source-popup'}
            />
        </div>
    );
}