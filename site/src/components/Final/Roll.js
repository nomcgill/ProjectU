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

import Dice from '../../ImageStore/dice.png'

export class Roll extends React.Component {

    render() {
        function onMouseOver(){
            document.getElementById('diagonal-background').classList.add('hovering-roll-border')
        }
        function onMouseOut(){
            document.getElementById('diagonal-background').classList.remove('hovering-roll-border')
        }
        function onMouseDown(){
            document.getElementById('diagonal-background').classList.add('click-roll')
        }
        function onMouseUp(){
            document.getElementById('diagonal-background').classList.remove('click-roll')
        }
        return (
            <div 
                onMouseOver={() => onMouseOver()} 
                onMouseOut={() => onMouseOut()} 
                onMouseDown={() => onMouseDown()}
                onMouseUp={() => onMouseUp()}
                id={'roll'}>
                    <Link to={'/rolling'}>
                        <div id={'diagonal-background'} />
                        <img id={'d20'} src={Dice} />
                    </Link>
                </div>
        )
    }
}
  
const mapStateToProps = state => ({
    name: state.name,
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source
});

export default connect(mapStateToProps)(Roll);

