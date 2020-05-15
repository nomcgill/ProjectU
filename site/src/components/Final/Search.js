import React from 'react'
import {connect} from 'react-redux';

export class Search extends React.Component {

    render() {
        return (
            <div id={'search'}>
                <input placeholder={'...?'}/>
                <div id={'reset-filters'}>
                    Reset
                </div>
            </div>
        )
    }
  }
  
const mapStateToProps = state => ({
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source
});

export default connect(mapStateToProps)(Search);