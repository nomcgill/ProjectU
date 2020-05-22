import React from 'react'
import {connect} from 'react-redux';

import GoldStar from '../../ImageStore/goldstar.png'
import GrayStar from '../../ImageStore/graystar.png'

import { toggleFaves, updateFilterType, updateFilterActive, UpdateFilterCategory } from '../../actions'

export class Filters extends React.Component {

    componentDidMount(){
        this.props.dispatch(toggleFaves(!this.props.displayFavorites))
    }

    clickStar(){
        const promise1 = new Promise ((resolve, reject) => {
            resolve(this.props.dispatch(toggleFaves(this.props.displayFavorites)))
        })
        promise1.then(() => {
            this.props.updateFilter()
        })     
    }

    clickTypeFilter(){
        const currentPhase = (this.props.filterType) ? (this.props.filterType) : false
        const phases = [false, 'Muscle','Evaluate','Influence', 'Channel', false]
        const matchesPhase = (item) => item === currentPhase; 
        let newIndex = phases.findIndex(matchesPhase) + 1
        let newPhase = phases[newIndex]
        const promise1 = new Promise ((resolve, reject) => {
            resolve(this.props.dispatch(updateFilterType(newPhase)))
        })
        promise1.then(() => {
            this.props.updateFilter()
        })    
    }

    clickActiveFilter(){
        const currentPhase = (this.props.filterActive) ? (this.props.filterActive) : false
        const phases = [false, 'Active', 'Passive', false]
        const matchesPhase = (item) => item === currentPhase; 
        let newIndex = phases.findIndex(matchesPhase) + 1
        let newPhase = phases[newIndex]        
        const promise1 = new Promise ((resolve, reject) => {
            resolve(this.props.dispatch(updateFilterActive(newPhase)))
        })
        promise1.then(() => {
            this.props.updateFilter()
        })    
    }

    clickCategoryFilter(){
        const currentPhase = (this.props.filterCategory) ? (this.props.filterCategory) : false
        const phases = [false, 'Role', 'Source', 'Intersection', false]
        const matchesPhase = (item) => item === currentPhase; 
        let newIndex = phases.findIndex(matchesPhase) + 1
        let newPhase = phases[newIndex]
        const promise1 = new Promise ((resolve, reject) => {
            resolve(this.props.dispatch(UpdateFilterCategory(newPhase)))
        })
        promise1.then(() => {
            this.props.updateFilter()
        }) 
    }

    render() {
        const typeFilter = (this.props.filterType) ? this.props.filterType : "Type"
        const activeFilter = (this.props.filterActive) ? this.props.filterActive : "Act/Pas"
        const categoryFilter = (this.props.filterCategory) ? this.props.filterCategory : "Role/Source"
        const grayFaveClass = (this.props.filterFavorite) ? ' hidden' : ''
        const goldFaveClass = (!this.props.filterFavorite) ? ' hidden' : ''
        const typeClass = (this.props.filterType) ? "filter-alive" : ''
        const activeClass = (this.props.filterActive) ? "filter-alive" : '' 
        const categoryClass = (this.props.filterCategory) ? "filter-alive" : ''
        return (
            <div id={'filters'} className={'line-2'}>
                <img onClick={() => this.clickStar()} src={GoldStar} id={'filter-star'} className={'top-star' + goldFaveClass}/>
                <img onClick={() => this.clickStar()} src={GrayStar} id={'filter-star-gray'} className={'top-star' + grayFaveClass}/>
                <button onClick={() => this.clickTypeFilter()} id={'type-filter'} className={'filter-button ' + typeClass}>{typeFilter}</button>
                <button onClick={() => this.clickActiveFilter()} id={'active-filter'} className={'filter-button ' + activeClass}>{activeFilter}</button>
                <button onClick={() => this.clickCategoryFilter()} id={'rolesource-filter'} className={'filter-button ' + categoryClass}>{categoryFilter}</button>
            </div>
        )
    }
  }
  
const mapStateToProps = state => ({
    displayFavorites: state.displayFavorites,
    filterType: state.filterType,
    filterActive: state.filterActive,
    filterCategory: state.filterCategory,
    filterFavorite: state.filterFavorite
});

export default connect(mapStateToProps)(Filters);