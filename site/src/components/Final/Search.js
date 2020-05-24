import React from 'react'
import {connect} from 'react-redux';

import { updateInputState } from '../../actions'


export class Search extends React.Component {

    handleTyping(event){
        // console.log('handleTyping')
        let typedText = event.target.value
        const promise1 = new Promise ((resolve, reject) => {
            resolve(this.props.dispatch(updateInputState(typedText)))
        })
        promise1.then(() => {
            this.props.updateFilter()
        })
    }

    componentDidMount(){
        document.getElementById('search-bar').value = this.existingText()
    }
    
    existingText(){
        return (this.props.inputText) ? this.props.inputText : ''
    }

    handleReset(){
        this.props.resetFilters()
    }

    render() {
        // console.log(this.props.typedText)
        return(
            <div id={'search'}>
                <input id={'search-bar'} onChange={(event) => this.handleTyping(event)} placeholder={'...?'}/>
                <div onClick={() => this.handleReset()} id={'reset-filters'}>
                    Reset
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inputText: state.inputText,
});

  export default connect(mapStateToProps)(Search);
  