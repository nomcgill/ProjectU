import React from 'react'
import {connect} from 'react-redux';

import FinalTopPane from './FinalTopPane'
import FinalBody from './FinalBody'

export class Final extends React.Component {

    render() {
        return (
            <div id={'final-page'}>
                <FinalTopPane />
                <FinalBody />
                <div id={"bottom-pane"}>
                    ©2020 ProjectU | All Rights Reserved
                </div>   
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

  export default connect(mapStateToProps)(Final);