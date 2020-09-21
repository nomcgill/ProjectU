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
import { checkRoleSource, doubleCheckDecisionTraits } from '../../actions';

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
        // if (this.props.popupId){
        //     window.addEventListener('click', function(e){   
        //         if (document.getElementById(this.props.popupId).contains(e.target)){
        //             console.log('inside')
        //         } else{
        //             console.log('outside')
        //         }
        //     });
        // }
    }
    
    componentDidUpdate(){
        this.hidePopups(false)
        // console.log('update')
    }

    hideWindow(){
        let elementId = document.getElementById(this.props.popupId)
        elementId.classList.add("hidden")
        Array.from(document.getElementsByClassName('accept-rolesource-button')).forEach(element => {
          element.classList.add('non-select')  
        })
        this.props.dispatch(checkRoleSource(false,false))
        this.props.dispatch(doubleCheckDecisionTraits(this.props.allData))
    }

    // let className = props.popupId === "popup-Knight" ? " hidden" : " hidden"
    render(){            
        // console.log(this.props.popupId)
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
    allData: state,
    who: state.who,
    // skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    database: state.database,
    roleSourceReady: state.roleSourceReady
});

export default connect(mapStateToProps)(Popup);