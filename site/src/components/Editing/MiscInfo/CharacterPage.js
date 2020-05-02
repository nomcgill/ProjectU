import React from 'react'
import {connect} from 'react-redux';

import NextButton from '../NextButton.js'

// import { action } from '../actions'

class CharacterPage extends React.Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.titleInput = React.createRef();
        this.levelInput = React.createRef();
        this.descriptionInput = React.createRef();
      }
    
    handleKeyPress(){
        console.log('enter press here! ')
        let oldName = document.getElementById("input-name")
        let oldTitle = document.getElementById("input-title")
    }

    handleClick(clicked){
        // TRUE OR FALSE DETERMINES TOP OR BOTTOM OF DIV TO SCROLL
        if (clicked === "name"){
            // console.log("level")
            this.nameInput.current.scrollIntoView(false)
        }
        if (clicked === "title"){
            // console.log("level")
            this.titleInput.current.scrollIntoView(false)
        }
        if (clicked === "level"){
            // console.log("level")
            this.levelInput.current.scrollIntoView(false)
        }
        if (clicked === "description"){
            // console.log("level")
            this.descriptionInput.current.scrollIntoView(false)
        }
    }

    handleSlider(){
        var slider = document.getElementById("myRange");
        var output = document.getElementById("level-display");
        output.innerHTML = slider.value;
        console.log(slider.value)
    }

    // setValue(e) {
	// 	this.setState({ value: e })
	// }
	// update() {
	// 	this.props.update(this.state)
	// }

    render(){
        return (
            <div className={"name-page choice-page"}>
                <h2 id={'new-hero-title'}></h2>
                <label ref={this.nameInput} htmlFor={'input-name'} id={'label-input-name'} className={'choice-header-box'} onClick={() => this.handleClick("name")}>
                    <h2>What is your NAME?</h2>
                    <input id={'input-name'} maxLength={'18'} className={'who-input-box'} onChange={() => this.handleKeyPress()} placeholder={'Name'}/>
                    {/* <p id={'input-name-example'} className={'who-example'}>ex. <span className={"underline"}>Harriet Striker</span> the Forsworn</p> */}
                </label>
                <label ref={this.titleInput} htmlFor={'input-title'} id={'label-input-title'} className={"choice-header-box"} onClick={() => this.handleClick("title")}>
                    <h2>Do you have a TITLE?</h2>
                    <input id={'input-title'} className={'who-input-box'} onChange={() => this.handleKeyPress()} maxLength={'18'} placeholder={'Title'} />
                    {/* <p id={'input-name-example'} className={'who-example'}>ex. Harriet Striker <span className={'underline'}>the Forsworn</span></p> */}
                    <p id={'optional'}>(optional)</p>
                </label>
                <label ref={this.levelInput} htmlFor={''} id={'label-input-level'} className={"choice-header-box"} onClick={() => this.handleClick("level")}>
                    <h2>What LEVEL are you?</h2>
                    <div id={'level-input-line'}>
                        <p id={'level-display'}></p>
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
                    </div>
                </label>
                <label ref={this.descriptionInput} htmlFor={'description-box'} onClick={() => this.handleClick("description")}>
                    <h2 className={'background-header'}>BACKGROUND</h2>
                    <p className={'background-header'}>(The below is for narrative purposes only.)</p>
                    <h3 className={'description-header'}>PAST,<span className={'tiny-description'}> such as family, birthplace, and tragedy.</span></h3>
                    <textarea className={"description-box"} placeholder={'Once upon a time, in a forest not so far away...'}></textarea>
                    <h3 className={'description-header'}>PRESENT,<span className={'tiny-description'}> such as looks and personality.</span></h3>
                    <textarea className={"description-box"} placeholder={`With a the swish of her ponytail and a twinkle in her eye...`}></textarea>
                    <h3 className={'description-header'}>FUTURE,<span className={'tiny-description'}> such as ambitions and vendettas.</span></h3>
                    <textarea className={"description-box"} placeholder={`No matter the cost, he promised himself that one day he would...`}></textarea>
                </label>

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
    level: state.level
});

export default connect(mapStateToProps)(CharacterPage);
