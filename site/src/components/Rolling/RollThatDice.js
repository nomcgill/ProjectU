import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './rollthatdice.css'
import Dice from '../../ImageStore/dice.png'
import ActionBreakdown from './ActionBreakdown'

import {updateActionStatus, updateActionDetails, upperHandToggle, strengthOrWeak, updateStrengthen, saveTheRoll, updateSnippet} from '../../actions'

class RollThatDice extends React.Component {

    handleSlider(){
        let slider = document.getElementById("action-level-slider");
        let input = slider.value
        this.props.dispatch(updateActionStatus(input))
    }

    componentDidMount(){
        this.displayAll()
    }

    displayAll(){
        this.grayThemOut()
        let upperHandStatus = (this.props.upperHand) ? true : false
        this.displayUpperHand(upperHandStatus)
        // console.log('create action to display ' + upperHandStatus)
        let strengthLevel = (this.props.strengthened) ? this.props.strengthened : 0
        this.strengthLevelButtons(strengthLevel)
        // console.log('create action to display ' + strengthLevel)
        let diceResults = this.props.diceResults
        // console.log('diceResults: ' + diceResults)
        this.displaySuccessLevel(strengthLevel, diceResults)
        // console.log(this.props.priorResults)
    }

    grayThemOut(){
        if (document.getElementById('upper-hand-switch')){
            document.getElementById('upper-hand-switch').classList.add('gray')
        }
        let buttons = document.getElementsByClassName('affect-button')
        if (buttons){
            buttons[0].classList.add('gray')
            buttons[1].classList.add('gray')
        }
    }

    displayUpperHand(status){
        if (status){
            document.getElementById('upper-hand-switch').classList.remove('gray')
        }
    }

    strengthLevelButtons(strengthLevel){
        if(strengthLevel === 0){
            document.getElementById('strengthened-weakened').innerText = 'Normal'
        }
        if (strengthLevel > 0){
            document.getElementById('strengthen-button').classList.remove('gray')
            document.getElementById('strengthened-weakened').innerText = 'STRENGTHEN x ' + strengthLevel
        }
        if (strengthLevel < 0){
            document.getElementById('weaken-button').classList.remove('gray')            
            document.getElementById('strengthened-weakened').innerText = 'WEAKEN x ' + Math.abs(strengthLevel)
            document.getElementById('strengthened-weakened').classList.add('strengthen')
        }
    }

    displaySuccessLevel(strengthLevel, diceResults){
        // var scanning = document.body.classList.contains('highlight-success')
        // console.log(scanning)
        var levelLabels = document.getElementsByClassName('success-level')
        for (let i=0; i < levelLabels.length; i++){
            let actionLabel = levelLabels[i]
            if (actionLabel.classList[1] === "highlight-success-strong"){
                actionLabel.classList.remove('highlight-success-strong')
            }
            if (actionLabel.classList[1] === "highlight-success-weak"){
                actionLabel.classList.remove('highlight-success-weak')
            }
            if (actionLabel.classList[1] === "highlight-success"){
                actionLabel.classList.remove('highlight-success')
            }
        }
        let theRoll = (diceResults) ? Math.max(...diceResults) : false
        let sortedResults = diceResults ? (diceResults.sort(function(a, b){return b-a})) : false
        this.displayRoll(sortedResults, theRoll)
        let successDigit = 
            (theRoll === 20) ? 1 :
            (theRoll === 10 || theRoll === 12 || theRoll === 14 || theRoll === 16 || theRoll === 18) ? 2 :
            (theRoll === 2 || theRoll === 4 || theRoll === 6 || theRoll === 8) ? 3 : 
            (theRoll === 1 || theRoll === 3 || theRoll === 5 || theRoll === 7 || theRoll === 9) ? 5 :
            (theRoll === 11 || theRoll === 13 || theRoll === 15 || theRoll === 17) ? 6 :
            (theRoll === 19) ? 7 : 
            4
        document.getElementById('action-level-slider').value = successDigit
        //stops here if theRoll isn't a real roll
        if (successDigit===4){
            return
        }
        // console.log(strengthLevel)
        let successRating = successDigit
        for (let i = 0; i < Math.abs(strengthLevel); i++){
            if (strengthLevel > 0 ){
                if (successRating - 1 === 4){
                    successRating = successRating - 2
                }
                else {
                    successRating = successRating - 1
                }
            }
            if (strengthLevel < 0 ){
                if (successRating + 1 === 4){
                    successRating = successRating + 2
                }
                else {
                    successRating = successRating + 1
                }
            }
        }
        let finalSuccessLabel = 
            (successRating <= 1) ? "Critical Success" :
            (successRating === 2) ? "Success" :
            (successRating === 3) ? "Minor Success" :
            (successRating === 5) ? "Minor Setback" :
            (successRating === 6) ? "Setback" :
            (successRating >= 7) ? "Critical Setback" :
            "error"
        
        let databaseActions = this.props.actionSuccess
        databaseActions.map(action => {
            if (action.title === finalSuccessLabel){
                this.props.dispatch(updateSnippet(action))
                let properNumber = 
                    (successRating <= 1) ? 1 :
                    (successRating >= 7) ? 7 :
                    successRating
                let targetId = "success-level-" + properNumber
                if (strengthLevel > 0 ){
                    document.getElementById(targetId).classList.add('highlight-success-strong')
                }
                if (strengthLevel < 0 ){
                    document.getElementById(targetId).classList.add('highlight-success-weak')
                }
                if (strengthLevel === 0 ){
                    document.getElementById(targetId).classList.add('highlight-success')
                }
                
            }

        })

    }

    displayRoll(results, chosenRoll){
        let section1 = document.getElementById('dice-1-section')
        let section2 = document.getElementById('dice-2-section')
        let roll1 = document.getElementById('dice-1-number')
        let roll2 = document.getElementById('dice-2-number')
        let diceArea = document.getElementById('dice-area')
        if (roll1.classList.contains('chosen-roll')){
            roll1.classList.remove('chosen-roll')
        }
        if (section1){
            diceArea.classList.remove('double-dice-layout')
            let results1 = results ? results[0] : '--'
            roll1.innerText = results1
            if (results1 !== '--'){
                roll1.classList.add('chosen-roll')
            }
        }
        if (section2){
            section2.classList.add('hidden')
        }
        if (this.props.upperHand){
            section2.classList.remove('hidden')
            diceArea.classList.add('double-dice-layout')
            let results2 = results.length > 1 ? results[1] : '--'
            roll2.innerText = results2
            // debugger;
        }
    }

    clearRoll(){
        const promise1 = new Promise((resolve, reject) => {
            resolve(
                this.props.dispatch(updateStrengthen(0)))
            });
        promise1.then(() => {
            this.props.dispatch(upperHandToggle(true))
        }).then(() => {
            this.props.dispatch(saveTheRoll(false))
        }).then(() =>{
            this.displayAll()
        });
    }

    upperHandSwitch(){
        const promise1 = new Promise((resolve, reject) => {
            resolve(
                this.props.dispatch(upperHandToggle(this.props.upperHand))
            )
          });
          promise1.then(() => {
            this.displayAll()
          });
    }

    strengthenSwitch(upOrDown){
        let priorStrength = (this.props.strengthened) ? this.props.strengthened : 0
        const promise1 = new Promise((resolve, reject) => {
            resolve(
                this.props.dispatch(strengthOrWeak(priorStrength, upOrDown))
            )
        });
        promise1.then(() => {
            this.displayAll()
        });
    }

    handleRollClick(){
        let howMany = (this.props.upperHand) ? 2 : 1
        this.rollThoseDice(howMany)
    }

    rollThoseDice(howMany){
        const promise1 = new Promise((resolve, reject) => {
                let resultsArray = []
                for (let i=0;i<howMany;i++){
                    let result = Math.floor(Math.random() * 20) + 1
                    resultsArray.push(result)
                }
                resolve(this.props.dispatch(saveTheRoll(resultsArray)))
        });
        promise1.then(() => {
            this.displayAll()
        });        
    }

    render(){
        const savedActionTab = (this.props.savedActionTab) ? this.props.savedActionTab : false
        return (
            <div id={'roll-page'}>
                <div id={'dice-area'}>
                    <div id={'upper-hand-column'}>
                        <div id={'upper-hand-switch'} onClick={()=> this.upperHandSwitch()}>Upper Hand</div>
                        <div id={'prior-roll'}>
                            <div>Prior Roll</div>
                            <div id={'prior-roll-number'}>16</div>
                        </div>
                    </div>
                    <div className={'one-dice-section'} id={'dice-1-section'}>
                        <img className={'action-dice'} src={Dice} />
                        <div className={'action-roll-result'} id={'dice-1-number'}></div>
                    </div>
                    <div className={'one-dice-section hidden'} id={'dice-2-section'}>
                        <img className={'action-dice'} src={Dice} />
                        <div className={'action-roll-result'} id={'dice-2-number'}></div>
                    </div>
                </div>
                <div id={'action-description-container'}>
                    <div id={'action-description'}>
                        <div id={'affect-roll'}>
                            <div className={'affect-button'} id={'strengthen-button'} onClick={() => this.strengthenSwitch(true)}>
                                <div>▲</div>
                                <div id={'strengthen-word'}>Strengthen</div>
                            </div>
                            <div id={'strengthened-weakened'}></div>
                            <div className={'affect-button'} id={'weaken-button'} onClick={() => this.strengthenSwitch(false)}>
                                <div id={'weaken-word'}>Weaken</div>
                                <div>▼</div>
                            </div>
                        </div>
                        <div id={'action-level'}>
                            <div className={'remove-sides'}></div>
                            <input 
                                id={'action-level-slider'} 
                                type={'range'} 
                                onChange={() => this.handleSlider()}
                                min={"1"}
                                max={'7'}
                                step={'1'}
                                className={''} />
                            <div id={'action-level-names'}>
                                    <div className={'success-level'} id={'success-level-1'}>Critical Success</div>
                                    <div className={'success-level'} id={'success-level-2'}>Success</div>
                                    <div className={'success-level'} id={'success-level-3'}>Minor Success</div>
                                <br></br>
                                    <div className={'success-level'} id={'success-level-5'}>Minor Setback</div>
                                    <div className={'success-level'} id={'success-level-6'}>Setback</div>
                                    <div className={'success-level'} id={'success-level-7'}>Critical Setback</div>
                            </div>
                            <div className={'remove-sides'}></div>
                        </div>
                    </div>
                    <div id={'clear-roll-row'}>
                        {/* <div id={'clear-roll'} onClick={() => this.clearRoll()}>C</div> */}
                        <button className={'roll-that-dice'} id={'the-roll-button'} onClick={() => this.handleRollClick()}>ROLL</button>
                        <button className={'roll-that-dice'} id={'the-clear-button'} onClick={() => this.clearRoll()}>CLEAR</button>
                    </div>
                    <div id={'roll-stats-button'}>?</div>
                </div>
                <ActionBreakdown 
                    savedActionTab={savedActionTab}
                    actionSuccess={this.props.actionSuccess}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    skills: state.skills,
    actionStatus: state.actionStatus,
    savedActionTab: state.savedActionTab,
    upperHand: state.upperHand,
    strengthened: state.strengthened,
    diceResults: state.diceResults,
    priorResults: state.priorResults,
    actionSuccess: state.database.actionSuccess
});

export default connect(mapStateToProps)(RollThatDice);