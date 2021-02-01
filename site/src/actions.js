  
  // import Swal from 'sweetalert2'
  // import withReactContent from 'sweetalert2-react-content'
  
  import fetchingItems from './fetchingItems.json'
  
  // only one of the below sampleProjectU should ever be commented.
  // -----------------------
//   import sampleProjectU from './sampleProjectU.json'
  let sampleProjectU = false


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

    // console.log(sampleProjectU)
    // let sampleProjectU = sampleProjectU ? sampleProjectU : false

    // Sample Database is open for business?
    if (sampleProjectU){
        // console.log('heard')
        dispatch(fetchProjectUSuccess(sampleProjectU))
        return
    }
    // No it isn't.
    else {
        console.log('heard')
        const databaseURL = fetchingItems.databaseURL
        
        fetch(databaseURL)
        .then(res => {
            return res.json();
        })
        .then(database => {
            dispatch(fetchProjectUSuccess(database[0]))
        })
        .catch((error) => {
            alert(error)
        });
    }
}

export const getHeroById = (id) => dispatch => {
    console.log(id)
    const heroURL = fetchingItems.heroURL + id

    fetch(heroURL)
    .then(res => {
        return res.json();
    })
    .then(heroData => {
        // console.log(heroData._id) ID STRING
        // console.log(heroData.name) NAME 
        // console.log(typeof heroData) OBJECT
        // console.log(heroData)
        // return heroData._id
        dispatch(updateStateWithNewHero(heroData))
        return heroData
    })
    .then(()=>alert("Hero has been loaded!"))
    .then(()=> dispatch(updateForRedirect(true)) )
    .catch((error) => {
        console.log(error)
    });
}

export const UPDATE_FOR_REDIRECT = 'UPDATE_FOR_REDIRECT';
export const updateForRedirect = (redirect) => ({
    type: UPDATE_FOR_REDIRECT,
    redirect
})

export const UPDATE_STATE_WITH_NEW_HERO = 'UPDATE_STATE_WITH_NEW_HERO';
export const updateStateWithNewHero = (fetchedHero) => ({
    type: UPDATE_STATE_WITH_NEW_HERO,
    fetchedHero
})

export const overwriteHero = (data, id) => dispatch => {

    console.log("PUT overwriting with...")
    // console.log(id)
    // console.log(data)

    let heroURL = fetchingItems.heroURL + id

    fetch(heroURL, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Your hero has been updated in the database!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

export const postNewHero = (data) => dispatch => {
    
    // console.log('Trying to post new hero...')
    // console.log(data)

    fetch(fetchingItems.heroURL, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        dispatch(updateHeroIdState(data._id))
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export const UPDATE_HERO_ID = 'UPDATE_HERO_ID';
export const updateHeroIdState = (id) => ({
    type: UPDATE_HERO_ID,
    id
})

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
        // console.log("Warning!!! You might be homebrewed for your current level!")
    }

    let level = newLevel ? newLevel : currentLevel

    // console.log(currentSkills)
    dispatch(tallyUpChoices(currentSkills, levelingNumbers, level))
    dispatch(filterOutIntersectionSkills(currentSkills, level))

}

export const updateLevelingNumbers = (level, levelingNumbers, totals) => dispatch => {
    // console.log(level)
    let maximums = levelingNumbers[level]
    dispatch(updateGlobalLevel(level, maximums))
    dispatch(checkHomebrewSkillTotals(totals, maximums))
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

export const TOGGLE_ALL_STATE = 'TOGGLE_ALL_STATE';
export const toggleAllState = (open) => ({
    type: TOGGLE_ALL_STATE,
    open
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
    // each variable passes on the next variable if it doesn't filter any out. The 'else' condition returns previous variable into next line.
    let filteredText = (filters.text) ? currentSkills.filter(skill => skill.fullText.includes(filters.text.toUpperCase())) : currentSkills

    let filteredType = 
        filters.type ? filteredText.filter(skill => {
            if (typeof skill.action === "string"){
                return filters.type === skill.action
            }
            if (Array.isArray(skill.action)){
                for (let i = 0; i <= skill.action.length; i++){
                    if (filters.type === skill.action[i]){
                        return skill
                    }
                }
            }
        }) 
        : filteredText

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

export const UPDATE_INTERSECTION = 'UPDATE_INTERSECTION'
export const updateIntersection = intersection => ({
    type: UPDATE_INTERSECTION,
    intersection
})

export const updateRoleSource = (currentSkills, database, roleSource, title, priorRole, priorSource) => dispatch => {

    if (roleSource === "role"){
        let decisionTraits = currentSkills.filter(skill=>{
            return skill.decisionTrait === true
        })
        // console.log(decisionTraits)
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

        let revisedSkills = [...newGivenSkills, ...filteredSkills, ...decisionTraits]

        dispatch(currentSkillsStateUpdate(revisedSkills))
        dispatch(roleSourceStateUpdate(title, priorSource))
    }

    else if (roleSource ===  "source"){
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

export const updateSkillsFromSkillsList = (selected, currentSkills, roleOrSource, levelingNumbers, level) => dispatch => {
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
    dispatch(tallyUpChoices(revisedSkills, levelingNumbers, level))
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

export const tallyUpChoices = (currentSkills, levelingNumbers, level) => dispatch => {
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
    // console.log(levelingNumbers)
    // console.log(level)

    let maximums = levelingNumbers[level]
    dispatch(changeChoiceTally(totals))
    // console.log(totals)
    // console.log(maximums)
    dispatch(checkHomebrewSkillTotals(totals, maximums))
}

export const checkHomebrewSkillTotals = (totals, maximums) => dispatch => {
    // console.log("checking for homebrew skills totals")
    if (totals && maximums){
        let basicRoleDiff = maximums.Role.Basic - totals.Role.Basic
        let basicSourceDiff = maximums.Source.Basic - totals.Source.Basic
        let advancedRoleDiff = maximums.Role.Advanced - totals.Role.Advanced
        let advancedSourceDiff = maximums.Source.Advanced - totals.Source.Advanced
        let masterRoleDiff = maximums.Role.Master - totals.Role.Master
        let masterSourceDiff = maximums.Source.Master - totals.Source.Master
        // console.log([basicRoleDiff,basicSourceDiff,advancedRoleDiff,advancedSourceDiff,masterRoleDiff,masterSourceDiff])
        if (
            basicRoleDiff < 0 || 
            basicSourceDiff < 0 || 
            advancedRoleDiff < 0 || 
            advancedSourceDiff < 0 || 
            masterRoleDiff < 0 || 
            masterSourceDiff < 0 
        ){
            dispatch(homebrewedSkillNumbers(true))
        }
        else {dispatch(homebrewedSkillNumbers(false))}
    }
    // console.log('reaching false')
    // console.log(totals)
    // console.log(maximums)
    // debugger;
}

export const HOMEBREWED_SKILL_NUMBERS = 'HOMEBREWED_SKILL_NUMBERS';
export const homebrewedSkillNumbers = (status) => ({
    type: HOMEBREWED_SKILL_NUMBERS,
    status
})

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

export const updateCurrentBackground = (backgroundTitle, backgroundOptions, currentSkills) => dispatch => {

    let skillsWithoutBackground = currentSkills.filter(skill => {
        return skill.category !== "Background"
    })

    backgroundOptions.forEach(background => {
        if (background.title === backgroundTitle){

            dispatch(updateBackgroundFeatureState(background))


            let backGroundObject = new Object();
            backGroundObject.name = background.title
            backGroundObject.action = "Passive"
            backGroundObject.skillLevel = "Given"
            backGroundObject.category = "Background"
            backGroundObject.damage = false
            backGroundObject.flavor = " "
            backGroundObject.impact = background.description

            let revisedSkills = [...skillsWithoutBackground, backGroundObject]
            // console.log(revisedSkills)
            dispatch(currentSkillsStateUpdate(revisedSkills))
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
// true will successfully disable the button
export const checkRoleSource = (roleSource, turnoff, allStateData) => dispatch => {
    // console.log('heard')
    // console.log(roleSource)
    // console.log(turnoff)
    dispatch(chooseRoleSourceButtonAvailable(false))
    // debugger;

    //updating all them buttons upon popup open! (but there's not always a need if it's not being fed the state)
    if (allStateData){
        dispatch(updateAllChoicesVisually(allStateData.currentSkills))
    }
    // console.log(roleSource)
    if (
        roleSource === "Tactician" ||
        roleSource === "Shade" ||
        roleSource === "Sayer" ||
        roleSource === "Divine" ||
        roleSource === "Nature" ||
        roleSource === "Chakrah" ||
        roleSource === "Knight"
    ){
        dispatch(chooseRoleSourceButtonAvailable(true))
    }
    else if(roleSource === "Elementalist"){
        let foundCore = allStateData.currentSkills.filter(skill=>{
            return (skill.name.substring(0,7) === "Core of")        
        })
        // console.log(foundCore)
        if (foundCore.length > 0){
            dispatch(chooseRoleSourceButtonAvailable(true))
        }
        
    }
    else if(roleSource === "Bounty Hunter"){
        // console.log(allStateData)
        // debugger;
        let foundSpecialty = allStateData.currentSkills.filter(skill=> {
            return skill.decisionTrait && skill.bountyCategory
        })
        // console.log(foundSpecialty)
        if (foundSpecialty.length > 0){
            dispatch(chooseRoleSourceButtonAvailable(true))
        }
    }
    else if(roleSource === "Morph"){
        // console.log(allStateData)
        let foundForm = allStateData.currentSkills.filter(skill=>{
            if (skill.decisionTrait){
                let endOfSkillName = skill.name.slice(skill.name.length - 11);
                return (endOfSkillName === "Small Beast" || endOfSkillName === "Large Beast" || endOfSkillName === "edium Beast")
            }
        })
        if (foundForm.length > 0){
            dispatch(chooseRoleSourceButtonAvailable(true))
        }
        
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

    let revisedSkills = [...allData.currentSkills]

    if (source !== "Demonic"){
        let noDemonicOrigin = revisedSkills.filter(skill=>{
            return (skill.name !== "Fiend" && skill.name !== "Devil" && skill.name !== "Abomination")
        })
        revisedSkills = [...noDemonicOrigin]
    }
    // console.log(revisedSkills)
    if (role !== "Morph"){
        let noBeastForms = revisedSkills.filter(skill=>{
        let endOfSkillName = skill.name.slice(skill.name.length - 11);
            return (endOfSkillName !== "Small Beast" && endOfSkillName !== "Large Beast" && endOfSkillName !== "edium Beast")
        })
        revisedSkills = [...noBeastForms]
    }
    // console.log(revisedSkills)
    if (role !== "Elementalist"){
        let noElementalistCore = revisedSkills.filter(skill=>{
            return (skill.name.substring(0,7) !== "Core of")
        })
        revisedSkills = [...noElementalistCore]
    }
    // console.log(revisedSkills)
    if (source !== "Chakrah"){
        let noChakrahTattoos = revisedSkills.filter(skill=>{
            return (skill.name.substring(0,6) !== "Tattoo")
        })
        revisedSkills = [...noChakrahTattoos]
    }
    if (role !== "Bounty Hunter"){
        let noBountySpecialization = revisedSkills.filter(skill=>{
            return !skill.bountyCategory
        })
        revisedSkills = [...noBountySpecialization]   
    }
    // console.log(revisedSkills)
    dispatch(currentSkillsStateUpdate(revisedSkills))
}

export const updateDemonic = (origin, currentSkills) => dispatch => {

    let removedPossibleOrigin = currentSkills.filter(skill => {
        return (skill.name !== "Fiend" && skill.name !== "Devil" && skill.name !== "Abomination")
    })
    let revisedSkills = [...removedPossibleOrigin, origin]
    dispatch(currentSkillsStateUpdate(revisedSkills))
}

export const updateMorph = (beast, currentSkills, animalTextId) => dispatch => {
    
    let removedPossibleBeast = currentSkills.filter(skill => {
        let endOfSkillName = skill.name.slice(skill.name.length - 11);
        return (endOfSkillName !== "Small Beast" && endOfSkillName !== "Large Beast" && endOfSkillName !== "edium Beast")
    })

    let beastText = document.getElementById(animalTextId).value
    let newAnimalTitle = beastText.length > 0 ? beastText + ' Form - ' + beast.name : 'Animal Form - ' + beast.name

    // console.log(newAnimalTitle)

    let target = {...beast};
    let source = {beastName: newAnimalTitle};

    const sameBeastNewTitle = Object.assign(target, source);
    // console.log(sameBeastNewTitle)

    // console.log(sameBeastNewTitle)
    let revisedSkills = [...removedPossibleBeast, sameBeastNewTitle]
    dispatch(currentSkillsStateUpdate(revisedSkills))

}

export const updateCore = (core, currentSkills) => dispatch => {
    let removedPossibleCore = currentSkills.filter(skill => {
        return (skill.name.substring(0,7) !== "Core of")
    })
    let revisedSkills = [...removedPossibleCore, core]
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
    // otherwise it's unchecked, so we remove
    else {
        let removedTattoo = currentSkills.filter(skill => {
            return (skill.name !== tattooSkill.name)
        })
        let revisedSkills = [...removedTattoo]
        dispatch(currentSkillsStateUpdate(revisedSkills))
    }
}

export const updateBounty = (specialtySkills, currentSkills) => dispatch => {

    // console.log(currentSkills)
    let newSpecialty = specialtySkills[0].bountyCategory
    let oppositeSpecialty = 
        newSpecialty === "Ranged" ? "Melee" :
        newSpecialty === "Melee" ? "Ranged" :
        console.log('Something went wrong.')

    let removedPreexistingDecision = currentSkills.filter(skill => {
        return !skill.decisionTrait
    })

    let removedOppositeSpecialtySkills = removedPreexistingDecision.filter(skill=> {
        return skill.bountyCategory !== oppositeSpecialty
    })

    // console.log(removedPreexistingSpecialtySkills)
    let revisedSkills = [...removedOppositeSpecialtySkills, ...specialtySkills]
    dispatch(currentSkillsStateUpdate(revisedSkills))
}



export const updateDemonicVisual = (currentSkills) => dispatch => {
    Array.from(document.getElementsByClassName('demon-decision-button')).forEach(element=> 
        element.classList.remove('selected-decision-trait'))
    let foundOrigin = currentSkills.filter(skill=>{
        return skill.name === "Fiend" || skill.name === "Abomination" || skill.name === "Devil"
    })
    if (foundOrigin[0]){
        if (document.getElementById(foundOrigin[0].name)){
            document.getElementById(foundOrigin[0].name).classList.add('selected-decision-trait')
        }
    }
}

export const updateMorphVisual = (currentSkills) => dispatch => {
    // console.log('run')
    // console.log(currentSkills)
    Array.from(document.getElementsByClassName('beast-decision-button')).forEach(element=> 
        element.classList.remove('selected-decision-trait'))
    Array.from(document.getElementsByClassName('beast-name-inputs')).forEach(element=>
        element.classList.add('hidden'))
    let foundBeast = currentSkills.filter(skill=> {
        let endOfSkillName = skill.name.slice(skill.name.length - 11);
        return (endOfSkillName === "Small Beast" || endOfSkillName === "Large Beast" || endOfSkillName === "edium Beast")
    })
    if (foundBeast[0]){
        function joinWords(string){
            let joined = string.split(" ").join("")
            return joined.replace(/[^\w\s]/gi, '')
        }
        let beastId = joinWords(foundBeast[0].name)
        if (document.getElementById(beastId)){
            document.getElementById(beastId + '-radio').checked = true
            document.getElementById(beastId).classList.add('selected-decision-trait')
            document.getElementById('name-'+beastId).classList.remove('hidden')
            document.getElementById('animal-'+beastId).classList.remove('hidden')
            // The input text placeholder for beastName below
            // console.log(foundBeast[0].beastName)
            if (foundBeast[0].beastName.slice(0, 7) !== "Animal "){
                let foundBeastName = foundBeast[0].beastName
                let getFormIndex = (str) => str.indexOf('Form')
                let tinyBeastName = foundBeastName.slice(0, getFormIndex(foundBeastName))
                let placeholder = tinyBeastName.length > 1 ? tinyBeastName : '  '
                document.getElementById('name-' + beastId).placeholder = placeholder
            }
            else {
                document.getElementById('name-' + beastId).placeholder = ''
            }
        }
    }
}

export const updateElementalistVisual = (currentSkills) => dispatch => {
    Array.from(document.getElementsByClassName('core-decision-button')).forEach(element=> 
        element.classList.remove('selected-decision-trait'))
    let foundCore = currentSkills.filter(skill=> {
        return (skill.name.substring(0,7) === "Core of")        
    })
    if (foundCore[0]){
        function joinWords(string){
            let joined = string.split(" ").join("")
            return joined.replace(/[^\w\s]/gi, '')
        }
        let coreId = joinWords(foundCore[0].name)
        if (document.getElementById(coreId)){
            document.getElementById(coreId).classList.add('selected-decision-trait')
        }
    }
}

export const updateBountyVisual = (currentSkills) => dispatch => {
    Array.from(document.getElementsByClassName('specialty-decision-button')).forEach(element=> 
        element.classList.remove('selected-decision-trait'))
    let existingSpecialtySkills = currentSkills.filter(skill=>{
        return (skill.bountyCategory && skill.skillLevel === "Given")
    })
    if (existingSpecialtySkills.length > 0){
        let specialtyId = existingSpecialtySkills[0].bountyCategory
        if (document.getElementById(specialtyId)){
            document.getElementById(specialtyId).classList.add('selected-decision-trait')
        }
    }
}    

export const updateChakrahVisual = (currentSkills) => dispatch => {
    Array.from(document.getElementsByClassName('chakrah-decision-button')).forEach(element=> 
        element.classList.remove('selected-decision-trait'))
    let foundTattoos = currentSkills.filter(skill=>{
        return skill.name.substring(0,6) === "Tattoo" && skill.category === "Source"
    })
    foundTattoos.forEach(tattoo=>{
        function joinWords(string){
            let joined = string.split(" ").join("")
            return joined.replace(/[^\w\s]/gi, '')
        }
        let tattooId = joinWords(tattoo.name)
        if (document.getElementById(tattooId)){
            document.getElementById(tattooId).classList.add('selected-decision-trait')
        }
    })
}

export const updateAllChoicesVisually = (currentSkills) => dispatch => {
    dispatch(updateDemonicVisual(currentSkills))
    dispatch(updateMorphVisual(currentSkills))
    dispatch(updateElementalistVisual(currentSkills))
    dispatch(updateBountyVisual(currentSkills))
    dispatch(updateChakrahVisual(currentSkills))
}
