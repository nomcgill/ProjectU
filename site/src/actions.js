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