import React from 'react'
import {connect} from 'react-redux';

import GoldStar from '../../ImageStore/goldstar.png'
import GrayStar from '../../ImageStore/graystar.png'

import { toggleFaves } from '../../actions'

export class Filters extends React.Component {

    componentDidMount(){
        this.props.dispatch(toggleFaves(!this.props.displayFavorites))
    }

    clickStar(){
        this.props.dispatch(toggleFaves(this.props.displayFavorites))
    }


    render() {
        return (
            <div id={'filters'} className={'line-2'}>
                <img onClick={() => this.clickStar()} src={GoldStar} id={'filter-star'} className={'top-star'}/>
                <img onClick={() => this.clickStar()} src={GrayStar} id={'filter-star-gray'} className={'top-star'}/>
                <button id={'type-filter'} className={'filter-button'}>Type</button>
                <button id={'active-filter'} className={'filter-button'}>Act/Pas</button>
                {/* <button id={'type-filter'} className={'filter-button selected'}>Influence</button>
                <button id={'active-filter'} className={'filter-button selected'}>Passive</button> */}
                <button id={'rolesource-filter'} className={'filter-button'}>Role/Source</button>
            </div>
        )
    }
  }
  
const mapStateToProps = state => ({
    displayFavorites: state.displayFavorites
});

export default connect(mapStateToProps)(Filters);