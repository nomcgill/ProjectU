import React from 'react'
import {connect} from 'react-redux';

import Dice from '../../ImageStore/dice.png'

// import { action } from '../actions'

export class Roll extends React.Component {

    render() {
        return (
            <div id={'roll'}>
                <div id={'diagonal-background'} />
                <img id={'d20'} src={Dice} />
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

