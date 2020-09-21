import React from 'react';
import sampleProjectU from './sampleProjectU.json'

import fetchingItems from './fetchingItems.json'

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
    // const databaseURL = fetchingItems.databaseURL

    // fetch(databaseURL)
    // .then(res => {
    //     return res.json();
    // })
    // .then(database => {
    //     dispatch(fetchProjectUSuccess(database[0]))
    // })
    // .catch((error) => {
    //     console.log(error)
    // });

    dispatch(fetchProjectUSuccess(sampleProjectU))

    // let parsedSampleProjectU = JSON.parse(sampleProjectU)
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

export const updateLevelVisual = (input) => dispatch => {


    let slider = document.getElementById("myRange");
    let output = document.getElementById("level-display");
    output.innerHTML = input
    slider.value = input

    // if (input < currentLevel){
    //     alert("Are you sure? Lowering your level means forgetting skills—most recent skill choices are removed first.")
    // }
    // dispatch(updateGlobalLevel(input))
    // dispatch(acceptGlobalUpdateVisual(input))

    
    // console.log(maximums)
    // dispatch(updateLevelMaximums(maximums))
}


export const updateLevel = (currentLevel, newLevel, levelingNumbers, currentSkills) => dispatch => {

    if (newLevel && newLevel < currentLevel){
        console.log("Warning!!! You might be homebrewed for your current level!")
    }

    let level = newLevel ? newLevel : currentLevel

    let newMaximums = levelingNumbers[level]
    // console.log(currentSkills)
    dispatch(updateGlobalLevel(level, newMaximums))
    dispatch(filterOutIntersectionSkills(currentSkills, level))
}

export const UPDATE_GLOBAL_LEVEL = 'UPDATE_GLOBAL_LEVEL';
export const updateGlobalLevel = (newLevel, newMaximums) => ({
    type: UPDATE_GLOBAL_LEVEL,
    newLevel,
    newMaximums
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

export const updateActionStatus = input => dispatch => {
    // console.log(`slider level: ` + input)
}

export const UPDATE_ACTION_DETAILS = 'UPDATE_ACTION_DETAILS';
export const updateActionDetails = tab => ({
    type: UPDATE_ACTION_DETAILS,
    tab
})

export const UPPER_HAND_TOGGLE = 'UPPER_HAND_TOGGLE';
export const upperHandToggle = priorState => ({
    type: UPPER_HAND_TOGGLE,
    priorState
})

export const strengthOrWeak = (priorState, upOrDown) => dispatch => {
    // debugger;
    if (upOrDown && priorState < 5){
        let newState = priorState + 1
        dispatch(updateStrengthen(newState))
    }
    if (!upOrDown && priorState > -5){
        let newState = priorState - 1
        dispatch(updateStrengthen(newState))
    }
    // dispatch(updatStrengthen(1))
}

export const UPDATE_STRENGTHEN = 'UPDATE_STRENGTHEN';
export const updateStrengthen = newState => ({
    type: UPDATE_STRENGTHEN,
    newState
})

export const SAVE_THE_ROLL = 'SAVE_THE_ROLL';
export const saveTheRoll = array => ({
    type: SAVE_THE_ROLL,
    array
})

export const UPDATE_SNIPPET = 'UPDATE_SNIPPET';
export const updateSnippet = action => ({
    type: UPDATE_SNIPPET,
    action
})

export const ADD_TO_PRIOR = 'ADD_TO_PRIOR';
export const addToPrior = priorResults => ({
    type: ADD_TO_PRIOR,
    priorResults
})

export const updateRoleSource = (currentSkills, database, roleSource, title, priorRole, priorSource) => dispatch => {
    // console.log(currentSkills)
    // console.log(database)
    // console.log(roleSource)
    // console.log(title)
    // console.log(priorRole)
    // console.log(priorSource)
    if (roleSource === "role" && priorRole){
        let filteredSkills = []
        currentSkills.forEach(skill => {
            if (skill.category === "Role" || skill.category === "Intersection"){
                return
            }
            filteredSkills.push(skill)
        })
        let newGivenSkills = []
        database.roles.forEach(role => {
            if (role.title === title){

                newGivenSkills.push(...role.traits)
            }
        })

        let revisedSkills = [...newGivenSkills, ...filteredSkills]

        dispatch(currentSkillsStateUpdate(revisedSkills))
        dispatch(roleSourceStateUpdate(title, priorSource))
    }

    if (roleSource ===  "source" && priorSource){
        let decisionTraits = currentSkills.filter(skill=>{
            return skill.decisionTrait === true
        })
        // console.log(decisionTraits)
        let filteredSkills = []
        currentSkills.forEach(skill => {
            // console.log(skill)

            if (skill.category === "Source" || skill.category === "Intersection"){
                return
            }
            filteredSkills.push(skill)
        })
        let newGivenSkills = []
        database.sources.forEach(source => {
            if (source.title === title && source.traits){
                newGivenSkills.push(...source.traits)
            }
        })

        let revisedSkills = [...newGivenSkills, ...filteredSkills, ...decisionTraits]
        // console.log(revisedSkills)

        dispatch(currentSkillsStateUpdate(revisedSkills))
        dispatch(roleSourceStateUpdate(priorRole, title))
    }

    //state is currently not changing!
    // console.log(roleSource, title)
}

export const updateSkillsFromSkillsList = (selected, currentSkills, roleOrSource) => dispatch => {
    // console.log(roleOrSource)
    //filter out previous role or source skills from currentSkills, creating a new array without them
    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    let capitalRoleOrSource = capitalizeFirstLetter(roleOrSource)
    function isRoleOrSourceSkill(currentSkill){
        return currentSkill.category !== capitalRoleOrSource || currentSkill.skillLevel === "Given"
        // console.log(currentSkill)
    }

    let cleansedFromRoleOrSource = currentSkills.filter(isRoleOrSourceSkill)
    let revisedSkills = [...selected, ...cleansedFromRoleOrSource]
    
    // merge 'selected' with that array


    // console.log(selected)
    // console.log(currentSkills)
    // console.log(cleansedFromRoleOrSource)
    // console.log(revisedSkills)

    dispatch(currentSkillsStateUpdate(revisedSkills))
    dispatch(tallyUpChoices(revisedSkills))
}

export const updateSkillsFromIntersection = (selectedNames, currentSkills, database) => dispatch => {
    // console.log(selectedNames)
    // console.log(currentSkills)
    let selectedSkills = []
    selectedNames.forEach(skillName => {
        database.intersections.forEach(intersection => {
            intersection.traits.forEach(skill=>{
                // console.log(skillName)
                let dashedDatabaseName= skill.name.replace(/ /g, "-")
                // console.log(dashedDatabaseName)
                if (skillName === dashedDatabaseName){
                    // console.log(skill.name)
                    selectedSkills.push(skill)
                }
            })
        })
    }) 
    // console.log(selectedSkills)
    
    let noIntersection = currentSkills.filter(skill=> skill.category !== "Intersection")
    let mergeWithSelectedIntersections = [...noIntersection,...selectedSkills]
    
    let revisedSkills = mergeWithSelectedIntersections
    dispatch(currentSkillsStateUpdate(revisedSkills))
}

export const filterOutIntersectionSkills = (currentSkills, level) => dispatch => {
    // console.log(currentSkills)
    function notAnIntersection(skill){
        return skill.category !== "Intersection"
    }       
        // filter out ALL intersections
        if (level < 6){
            // console.log('less than 6')
            let notIntersections = currentSkills.filter(notAnIntersection)
            dispatch(currentSkillsStateUpdate(notIntersections))
        }
        // filter out the master intersections
        else if (level < 11) {
            // console.log('between 6 and 10')
            let masterIntersections = []
            currentSkills.forEach(skill => {
                if (skill.category === "Intersection"){
                    if (skill.skillLevel === "Master"){
                        masterIntersections.push(skill)
                    }
                }
            })
            let noMasterIntersections = currentSkills.filter(skill => {
                return skill !== masterIntersections[0]
            })
            dispatch(currentSkillsStateUpdate(noMasterIntersections))
        }
        else {
            // console.log('level 11 or 12')
            dispatch(currentSkillsStateUpdate(currentSkills))
        }
}

export const CURRENT_SKILLS_STATE_UPDATE = 'CURRENT_SKILLS_STATE_UPDATE';
export const currentSkillsStateUpdate = revisedSkills => ({
    type: CURRENT_SKILLS_STATE_UPDATE,
    revisedSkills
})

export const ROLE_SOURCE_STATE_UPDATE = 'ROLE_SOURCE_STATE_UPDATE';
export const roleSourceStateUpdate = (role, source) => ({
    type: ROLE_SOURCE_STATE_UPDATE,
    role,
    source
})

export const updateSkillBank = (database, role, source, intersection) => dispatch => {

    let skillBank = new Object()
    let roleSkills = []
    let sourceSkills = []
    let intersectionSkills = []
    database.roles.forEach(oneRole => {
        if (oneRole.title === role){
            let allSkills = [...oneRole.skills.basic,...oneRole.skills.advanced,...oneRole.skills.master]
            roleSkills.push(...allSkills)
        }
    }) 
    database.sources.forEach(oneSource => {
        if (oneSource.title === source){
            let allSkills = [...oneSource.skills.basic,...oneSource.skills.advanced,...oneSource.skills.master]
            sourceSkills.push(...allSkills)
        }
    })
    database.intersections.forEach(oneIntersection => {
        return
        // return (oneIntersection.title === source ? intersectionSkills.push(oneIntersection) : false)
        // return (oneSource.title === source ? sourceSkills.push(oneSource) : false)
    })
    skillBank.role = roleSkills.length > 0 ? roleSkills : false
    skillBank.source = sourceSkills.length > 0 ? sourceSkills : false
    skillBank.intersection = intersectionSkills.length > 0 ? intersectionSkills : false

    // console.log(skillBank)
}

export const tallyUpChoices = (currentSkills) => dispatch => {
    // console.log(currentSkills)
    let roleBasic = []
    let roleAdvanced = []
    let roleMaster = []
    let sourceBasic = []
    let sourceAdvanced = []
    let sourceMaster = []

    currentSkills.forEach(oneSkill => {
        if (oneSkill.category === "Role"){
            return oneSkill.skillLevel === "Basic" ? roleBasic.push(oneSkill) :
            oneSkill.skillLevel === "Advanced" ? roleAdvanced.push(oneSkill) :
            oneSkill.skillLevel === "Master" ? roleMaster.push(oneSkill) : 
            false
        }
        if (oneSkill.category === "Source"){
            return oneSkill.skillLevel === "Basic" ? sourceBasic.push(oneSkill) :
            oneSkill.skillLevel === "Advanced" ? sourceAdvanced.push(oneSkill) :
            oneSkill.skillLevel === "Master" ? sourceMaster.push(oneSkill) : 
            false
        }
    })

    //check for tattoos!
    currentSkills.forEach(oneSkill=> {
        if (oneSkill.name.substring(0,6) === "Tattoo"){
            sourceBasic.push(oneSkill)
        }
    })

    let totals = {
        Role: {
            Basic: roleBasic.length,
            Advanced: roleAdvanced.length,
            Master: roleMaster.length
        },
        Source: {
            Basic: sourceBasic.length,
            Advanced: sourceAdvanced.length,
            Master: sourceMaster.length
        }
    }

    dispatch(changeChoiceTally(totals))
}

export const CHANGE_CHOICE_TALLY = 'CHANGE_CHOICE_TALLY';
export const changeChoiceTally = totals => ({
    type: CHANGE_CHOICE_TALLY,
    totals
})

export const SKILLBANK_STATE = 'SKILLBANK_STATE';
export const skillBankState = skillBank => ({
    type: SKILLBANK_STATE,
    skillBank
})

export const updateCurrentBackground = (backgroundTitle, backgroundOptions) => dispatch => {
    backgroundOptions.forEach(background => {
        if (background.title === backgroundTitle){
            dispatch(updateBackgroundFeatureState(background))
        }
    })
}

export const UPDATE_BACKGROUND_FEATURE_STATE = 'UPDATE_BACKGROUND_FEATURE_STATE';
export const updateBackgroundFeatureState = newBackground => ({
    type: UPDATE_BACKGROUND_FEATURE_STATE,
    newBackground
})

export const LAST_ROLL_STATE = 'LAST_ROLL_STATE';
export const lastRollState = lastRoll => ({
    type: LAST_ROLL_STATE,
    lastRoll
})

// This action checks the required choices to make before the Choose button becomes available.
export const checkRoleSource = (roleSource, turnoff, allStateData) => dispatch => {
    // console.log(roleSource)
    if (
        roleSource === "Tactician" ||
        roleSource === "Shade" ||
        roleSource === "Sayer" ||
        roleSource === "Divine" ||
        roleSource === "Nature" ||
        roleSource === "Chakrah"
    ){
        dispatch(chooseRoleSourceButtonAvailable(true))
    }
    else if(roleSource === "Knight"){
        console.log(allStateData)

    }
    else if(roleSource === "Elementalist"){
        console.log(allStateData)
        
    }
    else if(roleSource === "Bounty Hunter"){
        console.log(allStateData)
        
    }
    else if(roleSource === "Morph"){
        console.log(allStateData)
        
    }
    else if(roleSource === "Demonic"){
        // console.log(allStateData)
        let foundOrigin = allStateData.currentSkills.filter(skill=>{
            return skill.name === "Fiend" || skill.name === "Abomination" || skill.name === "Devil"
        })
        if (foundOrigin.length > 0){
            // console.log(foundOrigin)
            dispatch(chooseRoleSourceButtonAvailable(true))
        }
        
    }
    else {
        //if false will make all rolesource accept buttons unavailable
        return dispatch(chooseRoleSourceButtonAvailable(turnoff))
    }
}

export const CHOOSE_ROLESOURCE_BUTTON_AVAILABLE = 'CHOOSE_ROLESOURCE_BUTTON_AVAILABLE';
export const chooseRoleSourceButtonAvailable = boolean => ({
    type: CHOOSE_ROLESOURCE_BUTTON_AVAILABLE,
    boolean
})

export const roleSourceReady = (roleSource) => dispatch => {
    // return true
}

export const doubleCheckDecisionTraits = (allData) => dispatch => {
    // console.log(allData)
    let role = allData.role
    let source = allData.source
    // console.log(allData.currentSkills)

    if (source !== "Demonic"){
        // debugger;
        let noDemonicOrigin = allData.currentSkills.filter(skill=>{
            return (skill.name !== "Fiend" && skill.name !== "Devil" && skill.name !== "Abomination")
        })
        // console.log("not demonic!")
        dispatch(currentSkillsStateUpdate(noDemonicOrigin))
    }
    if (source !== "Chakrah"){

        let noChakrahTattoos = allData.currentSkills.filter(skill=>{
            return (skill.name.substring(0,6) !== "Tattoo")
        })
        dispatch(currentSkillsStateUpdate(noChakrahTattoos))
    }
    
}

export const updateDemonic = (origin, currentSkills) => dispatch => {

    let removedPossibleOrigin = currentSkills.filter(skill => {
        return (skill.name !== "Fiend" && skill.name !== "Devil" && skill.name !== "Abomination")
    })
    let revisedSkills = [...removedPossibleOrigin, origin]
    dispatch(currentSkillsStateUpdate(revisedSkills))
}

export const updateChakrah = (tattooSkill, currentSkills, add) => dispatch => {
    // add means checkbox is checked, so we add
    if (add){
        let removePossibleDuplicate = currentSkills.filter(skill => {
            return (skill.name !== tattooSkill.name)
        })
        let revisedSkills = [...removePossibleDuplicate, tattooSkill]
        dispatch(currentSkillsStateUpdate(revisedSkills))
    }   
    else {
        let removedTattoo = currentSkills.filter(skill => {
            return (skill.name !== tattooSkill.name)
        })
        let revisedSkills = [...removedTattoo]
        dispatch(currentSkillsStateUpdate(revisedSkills))
    }

}