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

export const UPDATE_OVERSTEPPED = 'UPDATE_OVERSTEPPED';
export const updateOverstepped = (newStatus) => ({
    type: UPDATE_OVERSTEPPED,
    newStatus
}) 

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
    output.innerHTML = stateLevel
    slider.value = stateLevel
}

export const updateLevel = (input) => dispatch => {
    dispatch(updateGlobalLevel(input))
    dispatch(acceptGlobalUpdateVisual(input))
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
    dispatch(updateFilterFavorite(newStatus))
}


// one of the filters!!!
export const DISPLAY_FAVES = 'DISPLAY_FAVES';
export const displayFaves = (displayed) => ({
    type: DISPLAY_FAVES,
    displayed
})

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const toggleFavorite = (item) => ({
    type: TOGGLE_FAVORITE,
    item
})

export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = (item) => ({
    type: TOGGLE_OPEN,
    item
})

export const GATHER_ITEM_TEXT = 'GATHER_ITEM_TEXT';
export const gatherItemText = (name, text) => ({
    type: GATHER_ITEM_TEXT,
    name,
    text
})

export const UPDATE_INPUT_STATE = 'UPDATE_INPUT_STATE';
export const updateInputState = (inputText) => ({
    type: UPDATE_INPUT_STATE,
    inputText
})

export const UPDATE_FILTER_ACTIVE = 'UPDATE_FILTER_ACTIVE';
export const updateFilterActive = (filterActive) => ({
    type: UPDATE_FILTER_ACTIVE,
    filterActive
})

export const UPDATE_FILTER_CATEGORY = 'UPDATE_FILTER_CATEGORY';
export const UpdateFilterCategory = (filterCategory) => ({
    type: UPDATE_FILTER_CATEGORY,
    filterCategory
})

export const UPDATE_FILTER_TYPE = 'UPDATE_FILTER_TYPE';
export const updateFilterType = (filterType) => ({
    type: UPDATE_FILTER_TYPE,
    filterType
})

export const UPDATE_FILTER_FAVORITE = 'UPDATE_FILTER_FAVORITE';
export const updateFilterFavorite = (filterFavorite) => ({
    type: UPDATE_FILTER_FAVORITE,
    filterFavorite
})

export const gatherFilters = (currentSkills, filters) => dispatch => {
    let filteredText = (filters.text) ? currentSkills.filter(skill => skill.fullText.includes(filters.text.toUpperCase())) : currentSkills
    let filteredType = (filters.type) ? filteredText.filter(skill => skill.action === filters.type) : filteredText
    function createActionType(skill) {    
        return (skill.action === "Passive") ? "Passive" : "Active"
    }
    let filteredActive = (filters.active) ? filteredType.filter((skill) => createActionType(skill) === filters.active) : filteredType
    let filteredCategory = (filters.category) ? filteredActive.filter((skill) => skill.category === filters.category) : filteredActive
    let filteredFavorite = (filters.favorite) ? filteredCategory.filter((skill) => skill.favorite === filters.favorite) : filteredCategory
    let currentlyShown = filteredFavorite
    dispatch(updateCurrentlyShown(currentlyShown))
}

export const UPDATE_CURRENTLY_SHOWN = 'UPDATE_CURRENTLY_SHOWN';
export const updateCurrentlyShown = (currentlyShown) => ({
    type: UPDATE_CURRENTLY_SHOWN,
    currentlyShown
})

export const RESET_FILTERS = 'RESET_FILTERS';
export const resetFilters = () => ({
    type: RESET_FILTERS
})

export const updateActionStatus = () => dispatch => {
    console.log(`let's update this actionStatus`)
}

export const UPDATE_ACTION_DETAILS = 'UPDATE_ACTION_DETAILS';
export const updateActionDetails = tab => ({
    type: UPDATE_ACTION_DETAILS,
    tab
})