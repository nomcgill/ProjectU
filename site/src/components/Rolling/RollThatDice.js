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

import {updateActionStatus, updateActionDetails} from '../../actions'

class RollThatDice extends React.Component {

    handleSlider(){
        let slider = document.getElementById("action-level-slider");
        let input = slider.value
        this.props.dispatch(updateActionStatus(input))
    }


    // saveTheTab(tab){
    //     console.log('saveTheTab is run')
    //     console.log(this.props.savedActionTab)
    //     this.props.dispatch(updateActionDetails(tab))
    // }

    render(){
        const savedActionTab = (this.props.savedActionTab) ? this.props.savedActionTab : false
        return (
            <div id={'roll-page'}>
                <div id={'dice-area'}>
                    <div id={'upper-hand-column'}>
                        <div id={'upper-hand-switch'}>Upper Hand</div>
                        <div id={'prior-roll'}>
                            <div>Prior Roll</div>
                            <div id={'prior-roll-number'}>16</div>
                        </div>
                    </div>
                    <div className={'one-dice-section'} id={'dice-1-section'}>
                        <img className={'action-dice'} src={Dice} />
                        <div className={'action-roll-result'}>20</div>
                    </div>
                    <div className={'one-dice-section'} id={'dice-2-section'}>
                        <img className={'action-dice'} src={Dice} />
                        <div className={'action-roll-result'}>20</div>
                    </div>
                </div>
                <div id={'action-description-container'}>
                    <div id={'action-description'}>
                        <div id={'affect-roll'}>
                            <div className={'affect-button'}>
                                <div>▲</div>
                                <div id={'strengthen-word'}>Strengthen</div>
                            </div>
                            <div id={'strengthened-weakened'}>STRENGTHEN x 1</div>
                            <div className={'affect-button'}>
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
                                    <div>Critical Success</div>
                                    <div>Success</div>
                                    <div>Minor Success</div>
                                <br></br>
                                    <div>Minor Setback</div>
                                    <div>Setback</div>
                                    <div>Critical Setback</div>
                            </div>
                            <div className={'remove-sides'}></div>
                        </div>
                    </div>
                    <button id={'roll-that-dice'}>ROLL</button>
                    <div id={'roll-stats-button'}>?</div>
                </div>
                <ActionBreakdown 
                    savedActionTab={savedActionTab}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    skills: state.skills,
    actionStatus: state.actionStatus,
    savedActionTab: state.savedActionTab
});

export default connect(mapStateToProps)(RollThatDice);