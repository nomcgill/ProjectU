import React from 'react';
import sampleProjectU from './sampleProjectU.js'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

export const ACTION = 'action';
export const action = () => ({
    type: ACTION
});

export const FETCH_PROJECTU_SUCCESS = 'FETCH_PROJECTU_SUCCESS';
export const fetchProjectUSuccess = (projectu) => ({
    type: FETCH_PROJECTU_SUCCESS,
    projectu
});

export const fetchProjectU = () => dispatch => {
    dispatch(fetchProjectUSuccess(sampleProjectU))
}

export const CHARACTER_PANE_UPDATE_SUCCESS = 'CHARACTER_PANE_UPDATE';
export const characterPaneUpdateSuccess = (newStatus) => ({
    type: CHARACTER_PANE_UPDATE_SUCCESS,
    newStatus
})

export const characterPaneUpdate = (status) => dispatch => {
    dispatch(characterPaneUpdateSuccess(!status))
}

// export const RESOLVE_EDITING_FORMAT = 'RESOLVE_EDITING_FORMAT';
// export const resolveEditingFormat = () => ({
//     type: RESOLVE_EDITING_FORMAT
// })

export const formatEditingPage = (editing) => dispatch => {
    console.log("formatPage run")
    // console.log(editing)
    // debugger;
    // if (document.getElementById('name')){
        if (document.getElementById('name')){
            document.getElementById.classList.add("hidden")}
        if (document.getElementById('titles')){
            document.getElementById('titles').classList.add("hidden")}
        if (document.getElementById('arrow-box')){
            document.getElementById('arrow-box').classList.add("hidden")}
        if (document.getElementById('dimmer')){
            document.getElementById('dimmer').classList.add("hidden")}
    // }
}

export const acceptGlobalUpdateVisual = (stateLevel) => dispatch => {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("level-display");
    // debugger;
    output.innerHTML = stateLevel
    slider.value = stateLevel
}

export const updateLevel = (input) => dispatch => {
    // let slider = document.getElementById("myRange");
    // let newLevel = input ? input : slider.value
    // console.log('ternary result: ' + input)
    // console.log(newLevel + ': newLevel in actions')
    dispatch(updateGlobalLevel(input))
    dispatch(acceptGlobalUpdateVisual(input))
    // debugger;
    // output.innerHTML = newLevel;
} 

export const UPDATE_GLOBAL_LEVEL = 'UPDATE_GLOBAL_LEVEL';
export const updateGlobalLevel = (newLevel) => ({
    type: UPDATE_GLOBAL_LEVEL,
    newLevel
})

export const UPDATE_NAME = 'UPDATE_NAME';
export const updateName = (name, title) => ({
    type:UPDATE_NAME,
    name,
    title
})

export const CHANGE_BACKGROUND_TEXT = 'CHANGE_BACKGROUND_TEXT';
export const changeBackgroundText = (past, present, future) => ({
    type: CHANGE_BACKGROUND_TEXT,
    past,
    present,
    future
})

export const toggleFaves = (displayed) => dispatch => {
    let newStatus = !displayed
    dispatch(displayFaves(newStatus))
    if (newStatus){
        document.getElementById('filter-star').classList.remove('hidden')
        document.getElementById('filter-star-gray').classList.add('hidden')
    }
    else {
        document.getElementById('filter-star').classList.add('hidden')
        document.getElementById('filter-star-gray').classList.remove('hidden')
    }
}


// one of the filters!!!
export const DISPLAY_FAVES = 'DISPLAY_FAVES';
export const displayFaves = (displayed) => ({
    type: DISPLAY_FAVES,
    displayed
})

export const toggleItemFavorite = (item) => dispatch => {
    console.log(item)
    dispatch(toggleFavorite(item))
}

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const toggleFavorite = (item) => ({
    type: TOGGLE_FAVORITE,
    item
})

