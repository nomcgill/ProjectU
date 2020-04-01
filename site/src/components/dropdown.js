import React from 'react'
import {connect} from 'react-redux';

export class Dropdown extends React.Component {

  eventListener(x){
    let dropdown = document.getElementById('dropdown')
    let menu = document.getElementById('menu')
    // menu.classList.toggle("hidden")
    menu.classList.toggle("retracted")
    document.addEventListener("click", function handler(event){
      let isClickInside = dropdown.contains(event.target);        
      if (isClickInside) {}
      else {
        // console.log('You clicked outside')
        if (menu.classList.contains("retracted")){}
        else {
          // menu.classList.toggle("hidden")
          menu.classList.toggle("retracted")
          x.classList.toggle("change");
        }
      }
      this.removeEventListener('click', handler);
    })
  }

  shrink(x){
      x.classList.toggle("change");
      this.eventListener(x)
  }

  render() {
      return (
        <div id={"dropdown"}>
            {/* <div id={"plus"} onClick={() => this.onClick()}>+</div> */}
            {/* <div id={"plus"} onClick={() => this.onClick(open)}>Menu</div> */}
            {/* <div id={"minus"} onClick={() => this.onClick()} className={"hidden"}>-</div> */}
            <div className={"menu-box"} onClick={() => this.shrink(document.getElementsByClassName('menu-box')[0])}>
              <div className={"bar1"}></div>
              <div className={"bar2"}></div>
              <div className={"bar3"}></div>
            </div>
            <ul id={"menu"} onClick={() => this.shrink(document.getElementsByClassName('menu-box')[0])} className={"retracted"}>
                {/* About ProjectU */}
                <li>{this.props.database.link1.label}</li>
                {/* Rules */}
                <li>{this.props.database.link2.label}</li>
                {/* Main site */}
                <li>{this.props.database.link3.label}</li>
                <li className={"tool-options"}>Create PDF</li>
                <li className={"tool-options"}>Reset Builder</li>
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