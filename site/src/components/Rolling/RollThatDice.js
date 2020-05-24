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

import {updateActionStatus} from '../../actions'

class RollThatDice extends React.Component {

    handleSlider(){
        let slider = document.getElementById("action-level-slider");
        let input = slider.value
        this.props.dispatch(updateActionStatus(input))
    }

    render(){
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
                        {/* <div className={'remove-sides'}></div>  */}
                        <div id={'affect-role'}>
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
                                {/* <div> */}
                                    <div>Critical Success</div>
                                    <div>Success</div>
                                    <div>Minor Success</div>
                                {/* </div> */}
                                <br></br>
                                {/* <div> */}
                                    <div>Minor Setback</div>
                                    <div>Setback</div>
                                    <div>Critical Setback</div>
                                {/* </div> */}
                            </div>
                            <div className={'remove-sides'}></div>
                            {/* <table id={'roll-stats-box'}> */}
                                {/* <tr> */}
                                    {/* <td id={'roll-stats-button'}>?</td> */}
                                {/* </tr> */}
                            {/* </table> */}
                        </div>
                        {/* <div className={'remove-sides'}></div>  */}
                    </div>
                    {/* <div id={'roll-that-dice-row'}> */}
                        <button id={'roll-that-dice'}>ROLL</button>
                    {/* </div> */}
                <div id={'roll-stats-button'}>?</div>
                </div>
                <div id={'action-breakdown'}>
                    <div id={'button-breakdown-row'}>
                        <button className={'action-button'}>Muscle</button>
                        <button className={'action-button'}>Evaluate</button>
                        <button className={'action-button'}>Influence</button>
                        <button className={'action-button'}>Channel</button>
                    </div>
                    <div className={'action-details'}>
                        <h4>Action Info:</h4>
                        <p>Use that thinking cap to get a pressing question truthfully—if not in detail—answered by the GM. </p>
                    </div>
                </div>
                {/* </div> */}
                {/* <div className={'bottom-fill'}>-</div> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    skills: state.skills,
    actionStatus: state.actionStatus
});

export default connect(mapStateToProps)(RollThatDice);