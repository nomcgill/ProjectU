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

import './popup.css'

export class Popup extends React.Component {

    hidePopups(hideAll){
        let keepExposed =[]
        if (document.getElementsByClassName('popup')){
            let elements = document.getElementsByClassName('popup')
            // let exposedItem = document.getElementById('')
            // debugger;
            for (let i = 0; i <elements.length; i++){
                let element = elements[i]
                if (element.classList[2] !== "hidden"){
                    // console.log(element)
                    keepExposed.push(element)
                    element.classList.add('hidden')
                }
                // if (element){
                // }
            }
        }
        if (keepExposed.length > 0 && !hideAll){
            // console.log(keepExposed[0])
            keepExposed[0].classList.remove('hidden')
        }
    }
        
    componentDidMount(){
        this.hidePopups(true)
        // console.log('mount')
    }
    
    componentDidUpdate(){
        this.hidePopups(false)
        // console.log('update')
    }

    hideWindow(){
        let elementId = document.getElementById(this.props.popupId)
        elementId.classList.add("hidden")
    }

    // let className = props.popupId === "popup-Knight" ? " hidden" : " hidden"
    render(){
        return (
            //add hidden to class name
            <div className={"popup " + this.props.popupClass} id={this.props.popupId}>
                <div className={'popup-inside'}>
                    {this.props.popupContent}
                    <div className={'popup-x'} onClick={() => this.hideWindow()}>x</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    who: state.who,
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    database: state.database
});

export default connect(mapStateToProps)(Popup);