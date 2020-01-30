import React from 'react'
import {connect} from 'react-redux';

export class Dropdown extends React.Component {

  onClick(){
    console.log("clicked dropdown! Also, just checked the permanent ProjectU database below.")
    console.log(this.props.database)
  }

  render() {
      return (
        <div id={"dropdown"} onClick={() => this.onClick()}>
            <div id={"plus"}>+</div>
            <ul id={"menu"}>
                <li>{this.props.name}</li>
                <li>Create PDF</li>
                <li>Reset Builder</li>
                <li>Main Site</li>
            </ul>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  database: state.database
});

export default connect(mapStateToProps)(Dropdown);