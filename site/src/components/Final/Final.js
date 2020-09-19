import React from 'react'
import {connect} from 'react-redux';

import './final.css'
import FinalTopPane from './FinalTopPane'
import FinalBody from './FinalBody'

import { toggleFavorite, toggleOpen, gatherItemText, gatherFilters, updateInputState, resetFilters, updateLevel } from '../../actions'

export class Final extends React.Component {
    
    updateFilter(){
        const filters = {
            text: this.props.inputText,
            type: this.props.filterType,
            active: this.props.filterActive, 
            category: this.props.filterCategory,
            favorite: this.props.filterFavorite
        }
        this.props.dispatch(gatherFilters(this.props.currentSkills, filters))
    }

    resetFilters(){
        const promise1 = new Promise ((resolve, reject) => {
            resolve(this.props.dispatch(resetFilters()))
        })
        promise1.then(() => {
            this.updateFilter()
            document.getElementById('search-bar').value = ''
        })
    }

    componentDidMount(){
        let stateLevel = this.props.level
        this.props.dispatch(updateLevel(stateLevel, false, this.props.database.levelingNumbers, this.props.currentSkills))
    }

    render() {
        const shownSkills = (this.props.currentlyShown === undefined) ? this.props.currentSkills : this.props.currentlyShown
        return (
            <div id={'final-page'}>

                {/* <Route 
                    // path="/skillview"
                    render={() =>  */}
                        {/* <div> */}
                            <FinalTopPane 
                                updateFilter={() => this.updateFilter()}
                                resetFilters={() => this.resetFilters()}
                            />
                            <FinalBody 
                                shownSkills={shownSkills}
                                toggleFavorite={(item) => this.props.dispatch(toggleFavorite(item))}
                                toggleOpen={(item) => this.props.dispatch(toggleOpen(item))}
                                gatherItemText={(name, text) => this.props.dispatch(gatherItemText(name,text))}
                                role={this.props.role}
                                source={this.props.source}
                                intersection={this.props.intersection}
                            />
                        {/* </div> */}
                    {/* }
                /> */}

                {/* <Route 
                    // path="/skillview"
                    render={() =>  */}
                        {/* <RollThatDice /> */}
                    {/* }
                /> */} 
            </div>
        )
    }
  }
  
const mapStateToProps = state => ({
    name: state.name,
    currentSkills: state.currentSkills,
    currentlyShown: state.currentlyShown,
    intersection: state.intersection,
    role: state.role,
    source: state.source,
    inputText: state.inputText,
    filterType: state.filterType,
    filterActive: state.filterActive,
    filterCategory: state.filterCategory,
    filterFavorite: state.filterFavorite,
    level: state.level
});

  export default connect(mapStateToProps)(Final);