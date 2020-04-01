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

import Arrow from './fliparrow.png'
import Dice from './dice.png'


// import { action } from '../actions'

export class TrackingPane extends React.Component {

    updateOverstep(){
        var checkbox = document.getElementById("overstep-check")
        console.log("Should be overstepped?")
        console.log(checkbox.checked)
    }

    updateHP(){
        console.log('updating hp')
    }

    // if (document.getElementById('name')){
    //     document.getElementById('name').classList.remove("hidden")
    //     document.getElementById('titles').classList.remove("hidden")
    //     document.getElementById('arrow-box').classList.remove("hidden")
    // }

    // if (document.getElementById('character-pane-skills-numbers')){
    //     document.getElementById('character-pane-skills-numbers').classList.add('hidden')
    // }

    // if (document.getElementById('dimmer')){
    //     document.getElementById('dimmer').classList.add('hidden')
    // }
    render(){
        return (
            <div id={'character-tracking-pane'}>
                <label className={'character-pane-box'} id={'overstep-box'} for={'overstep-check'}>
                    <h3>Overstep</h3>
                    <input type={'checkbox'} id={'overstep-check'} name={'overstep-check'} onClick={() => this.updateOverstep()} />
                    {/* <span class="checkmark"></span> */}
                </label>
                <div className={'character-pane-box'} id={'hp-box'}>
                    <h3>HP</h3>
                    <div id={'hp-line'}>
                        <h2 id={'current-hp'} onClick={() => this.updateHP()}>20 </h2>
                        <h3>/20</h3>
                    {/* <h4>20</h4> */}
                    </div>
                    {/* <h3><span>20</span> / 20</h3> */}
                </div>
                <div className={'character-pane-box'} id={'damage-box'}>
                    <h3>DMG</h3>
                    <h2>5</h2>
                </div>
                <div id={'dice-box'} className={'character-pane-box'}>
                    <img src={Dice} id={'dice'}/>
                </div>
                <Link to={'/final/title'}>
                <div id={'arrow-box'} className={'character-pane-box'}>
                    <img id={'flip-arrow'} src={Arrow} />
                </div>
                </Link>
            </div>    
        );
    }
}

const mapStateToProps = state => ({
    hitpoints: state.hitpoints,
  });
  
  export default connect(mapStateToProps)(TrackingPane);