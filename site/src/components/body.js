import React from 'react'
import {connect} from 'react-redux';
// import {
//   Route,
//   BrowserRouter as Router,
// } from 'react-router-dom'


// import { action } from '../actions'

export class Body extends React.Component {

  render() {
      return (
          <div>
            <h2>
                {this.props.name}
            </h2>
            <h3>
                Basic
            </h3>
            <h3>
                Advanced
            </h3>
            <h3>
                Master
            </h3>           
          </div>
      );
  }
}

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(Body);