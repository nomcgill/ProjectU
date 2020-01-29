import React from 'react'
import {connect} from 'react-redux';

export class EditingMain extends React.Component {

    render() {
        return (
            <div>
  
            </div>
        );
    }
  }
  
  const mapStateToProps = state => ({
    name: state.name,
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source
  });

  export default connect(mapStateToProps)(EditingMain);