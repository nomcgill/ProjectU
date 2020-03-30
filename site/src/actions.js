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

export const RESOLVE_EDITING_FORMAT = 'RESOLVE_EDITING_FORMAT';
export const resolveEditingFormat = () => ({
    type: RESOLVE_EDITING_FORMAT
})

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
        // console.log("inside found")
    // }
    // dispatch(resolveEditingFormat())
}