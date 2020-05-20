import React from 'react'
import {connect} from 'react-redux';

import './final.css'
import FinalTopPane from './FinalTopPane'
import FinalBody from './FinalBody'

import { toggleItemFavorite } from '../../actions'

export class Final extends React.Component {
    
    render() {
        const shownSkills = this.props.currentSkills
        return (
            <div id={'final-page'}>
                <FinalTopPane />
                <FinalBody 
                    shownSkills={shownSkills}
                    toggleFavorite={(item) => this.props.dispatch(toggleItemFavorite(item))}
                />
                <div id={"bottom-pane"}>
                    ©2020 ProjectU | All Rights Reserved
                </div>   
            </div>
        )
    }
  }
  
  const mapStateToProps = state => ({
    name: state.name,
    currentSkills: state.currentSkills,
    intersection: state.intersection,
    role: state.role,
    source: state.source
  });

  export default connect(mapStateToProps)(Final);