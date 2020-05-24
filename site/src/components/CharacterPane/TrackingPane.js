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

import Arrow from '../../ImageStore/fliparrow.png'
import Dice from '../../ImageStore/dice.png'

import {updateOverstepped} from '../../actions'

export class TrackingPane extends React.Component {

    componentDidMount() {
        var checkbox = document.getElementById("overstep-check")
        if (this.props.overstepped){
            checkbox.checked = this.props.overstepped
        }
    }

    updateOverstep(){
        var checkbox = document.getElementById("overstep-check")
        this.props.dispatch(updateOverstepped(checkbox.checked))
    }

    render(){   
        return (
            <div id={'character-tracking-pane'}>
                <label className={'character-pane-box'} id={'overstep-box'} htmlFor={'overstep-check'}>
                    <h3>Overstep</h3>
                    <input type={'checkbox'} id={'overstep-check'} name={'overstep-check'} onClick={() => this.updateOverstep()} />
                </label>
                <div className={'character-pane-box'} id={'hp-box'}>
                    <h3>HP</h3>
                    <div id={'hp-line'}>
                        <h2 id={'current-hp'} onClick={() => this.updateHP()}>20 </h2>
                        <h3>/20</h3>
                    </div>
                </div>
                <div className={'character-pane-box'} id={'damage-box'}>
                    <h3>DMG</h3>
                    <h2>5</h2>
                </div>
                <Link to={'/final/title'}>
                    <div id={'arrow-box'} className={'character-pane-box'}>
                        <img id={'flip-arrow'} src={Arrow} />
                        <p>HERO</p>
                    </div>
                </Link>
            </div>    
        );
    }
}

const mapStateToProps = state => ({
    hitpoints: state.hitpoints,
    overstepped: state.overstepped
  });
  
  export default connect(mapStateToProps)(TrackingPane);