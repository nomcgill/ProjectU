import React from 'react'
import {connect} from 'react-redux';

import NextButton from '../NextButton.js';

import {updateLevel, acceptGlobalUpdateVisual, updateName, changeBackgroundText} from '../../../actions.js';
// import {acceptGlobalUpdateVisual} from '../../../actions'


// import { action } from '../actions'

class CharacterPage extends React.Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.titleInput = React.createRef();
        this.levelInput = React.createRef();
        this.descriptionInput = React.createRef();
    }
      
    componentDidMount(){
        let stateLevel = this.props.level
        this.props.dispatch(acceptGlobalUpdateVisual(stateLevel))

        let theName = (this.props.name === 'Nameless') ? '' : this.props.name
        let theTitle = (this.props.title === '') ? '' : this.props.title
        document.getElementById("input-name").value = theName
        document.getElementById("input-title").value = theTitle
        this.handleKeyPress()

        let past = (this.props.backgroundPast) ? this.props.backgroundPast : ''
        let present = (this.props.backgroundPresent) ? this.props.backgroundPresent : ''
        let future = (this.props.backgroundFuture) ? this.props.backgroundFuture : ''
        document.getElementById('input-past').value = past
        document.getElementById('input-present').value = present
        document.getElementById('input-future').value = future

    }

    handleKeyPress(){
        let inputName = document.getElementById("input-name").value ? document.getElementById("input-name").value : 'Nameless'
        let inputTitle = document.getElementById("input-title").value ? document.getElementById("input-title").value : ''
        document.getElementById('new-hero-name').innerText = inputName
        document.getElementById('new-hero-title').innerText = inputTitle
        this.props.dispatch(updateName(inputName,inputTitle))
    }

    handleClick(clicked){
        // TRUE OR FALSE DETERMINES TOP OR BOTTOM OF DIV TO SCROLL
        if (clicked === "name"){
            this.nameInput.current.scrollIntoView({block: "end", behavior: "smooth"})
        }
        if (clicked === "title"){
            this.titleInput.current.scrollIntoView({block: "end", behavior: "smooth"})
        }
        if (clicked === "level"){
            // this.levelInput.current.scrollIntoView(false)
        }
        if (clicked === "description"){
            this.descriptionInput.current.scrollIntoView({block: "end", behavior: "smooth"})
        }
    }

    handleSlider(){
        let slider = document.getElementById("myRange");
        let input = slider.value
        this.props.dispatch(updateLevel(input))
    }

    levelChangeClick(change){
        let slider = document.getElementById("myRange");
        let oldLevel = Number(slider.value)
        if (change === true && oldLevel < 12){
            let newLevel = oldLevel + 1
            this.props.dispatch(updateLevel(newLevel))
        }
        if (change === false && oldLevel > 1){
            let newLevel = oldLevel - 1
            this.props.dispatch(updateLevel(newLevel))
        }
    }

    handleBackgroundChange(){
        let past = document.getElementById('input-past').value
        let present = document.getElementById('input-present').value
        let future = document.getElementById('input-future').value
        this.props.dispatch(changeBackgroundText(past,present,future))
    }

    render(){
        return (
            <div className={"name-page choice-page"}>
                {/* <div className={'editing-pane-section'}> */}
                    <h2 id={'new-hero-name'}>Nameless</h2>
                    <h3 id={'new-hero-title'}></h3>
                {/* </div> */}
                <div className={'editing-pane-section'}>
                    <label ref={this.nameInput} htmlFor={'input-name'} id={'label-input-name'} className={'choice-header-box'} onClick={() => this.handleClick("name")}>
                        <h2>What is your NAME?</h2>
                        <input id={'input-name'} maxLength={'18'} className={'who-input-box'} onChange={() => this.handleKeyPress()} placeholder={'Nameless'} autoComplete={'off'}/>
                        {/* <p id={'input-name-example'} className={'who-example'}>ex. <span className={"underline"}>Harriet Striker</span> the Forsworn</p> */}
                    </label>
                    <label ref={this.titleInput} htmlFor={'input-title'} id={'label-input-title'} className={"choice-header-box"} onClick={() => this.handleClick("title")}>
                        <h2>Do you have a TITLE?</h2>
                        <input id={'input-title'} className={'who-input-box'} autoComplete={'off'} onChange={() => this.handleKeyPress()} maxLength={'30'} placeholder={'the Usurper'} />
                        {/* <p id={'input-name-example'} className={'who-example'}>ex. Harriet Striker <span className={'underline'}>the Forsworn</span></p> */}
                        <p id={'optional'}>(optional)</p>
                    </label>
                </div>
                <div className={'editing-pane-section'}>
                    <label ref={this.levelInput} htmlFor={''} id={'label-input-level'} className={"choice-header-box"} onClick={() => this.handleClick("level")}>
                        <h2>What LEVEL are you?</h2>
                        <div id="interior-level-box">
                            <p id={'level-display'}></p>
                            <div id="level-input-line">
                                <div className={"level-button"} id={'level-down'} onClick={() => this.levelChangeClick(false)}>-</div>
                                <input 
                                    type={'range'} 
                                    onChange={() => this.handleSlider()}
                                    // onChange={this.setValue.bind(this)} 
                                    // onAfterChange={this.update.bind(this)} 
                                    // value={this.props.level} 
                                    min={"1"}
                                    max={'12'}
                                    step={'1'}
                                    className={'slider'}
                                    id={'myRange'} />
                                <div className={"level-button"} id={'level-up'} onClick={() => this.levelChangeClick(true)}>+</div>
                            </div>
                        </div>
                    </label>
                </div>
                <div className={'editing-pane-section'}>
                    <label ref={this.descriptionInput} htmlFor={'description-box'} onClick={() => this.handleClick("description")}>
                        <h2 className={'background-header'} id={'background-header-title'}>BACKGROUND</h2>
                        <p className={'background-header'}>(The below is for narrative purposes only.)</p>
                        <h3 className={'description-header'}>PAST,<span className={'tiny-description'}> such as family, birthplace, and tragedy.</span></h3>
                        <textarea id={'input-past'} onChange={() => this.handleBackgroundChange()} className={"description-box"} placeholder={'Once upon a time, in a forest not so far away...'}></textarea>
                        <h3 className={'description-header'}>PRESENT,<span className={'tiny-description'}> such as looks and personality.</span></h3>
                        <textarea id={'input-present'} onChange={() => this.handleBackgroundChange()} className={"description-box"} placeholder={`With a the swish of her ponytail and a twinkle in her eye...`}></textarea>
                        <h3 className={'description-header'}>FUTURE,<span className={'tiny-description'}> such as ambitions and vendettas.</span></h3>
                        <textarea id={'input-future'} onChange={() => this.handleBackgroundChange()} className={"description-box"} placeholder={`No matter the cost, he promised himself that one day he would...`}></textarea>
                    </label>
                </div>

                <NextButton next={this.props.next} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    who: state.who,
    skills: state.skills,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    database: state.database,
    level: state.level,
    name: state.name,
    title: state.title,
    backgroundPast: state.backgroundPast,
    backgroundPresent: state.backgroundPresent,
    backgroundFuture: state.backgroundFuture
});

export default connect(mapStateToProps)(CharacterPage);
