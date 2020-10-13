import * as actions from './actions';
// import sampleChoices from './sampleChoices'
// import sampleChoicesRevised from './sampleChamps/sampleChoicesRevised.json'
import cleanSlate from './cleanSlate.json'
// import sampleProjectU from './sampleProjectU'


// import newArthur from './sampleChamps/newArthur.json'
// const initialState = newArthur

const initialState = cleanSlate

export const reducer = (state = initialState, action) => {

    // console.log(JSON.stringify(initialState))
    if (action.type === actions.FETCH_PROJECTU_SUCCESS) {
        return Object.assign({}, state, {
            database: action.projectu
        })
    }

    if (action.type === actions.UPDATE_HERO_ID) {
        return Object.assign({}, state, {
            heroID: action.id
        })
    }

    if (action.type === actions.UPDATE_STATE_WITH_NEW_HERO){
        // console.log(action.fetchedHero)
        return Object.assign({}, state, {
            backgroundFuture: action.fetchedHero.backgroundFuture,
            backgroundPast: action.fetchedHero.backgroundPast,
            backgroundPresent: action.fetchedHero.backgroundPresent,
            currentBackground: action.fetchedHero.currentBackground,
            currentSkills: action.fetchedHero.currentSkills,
            displayFavorites: action.fetchedHero.displayFavorites,
            level: action.fetchedHero.level,
            quantityChosen: action.fetchedHero.quantityChosen,
            name: action.fetchedHero.name,
            role: action.fetchedHero.role,
            source: action.fetchedHero.source,
            rollHistory: action.fetchedHero.rollHistory,
            title: action.fetchedHero.title,
            heroNotes: action.fetchedHero.heroNotes,
            hitpoints: action.fetchedHero.hitpoints,
            overstepped: action.fetchedHero.overstepped,
            currentHP: action.fetchedHero.currentHP,
            intersection: action.fetchedHero.intersection,
            heroID: action.fetchedHero._id
        })
    }

    if (action.type === actions.CHARACTER_PANE_UPDATE_SUCCESS) {
        return Object.assign({}, state, {
            navBar: action.newStatus
        })
    }

    if (action.type === actions.UPDATE_OVERSTEPPED) {
        return Object.assign({}, state, {
            overstepped: action.newStatus
        })
    }

    if (action.type === actions.UPDATE_GLOBAL_LEVEL){
        return Object.assign({}, state, {
            level: action.newLevel,
            levelingNumbers: action.newMaximums
        })
    }

    if (action.type === actions.UPDATE_NAME){
        return Object.assign({}, state, {
            name: action.name,
            title: action.title
        })
    }

    if (action.type === actions.CHANGE_BACKGROUND_TEXT){
        return Object.assign({}, state, {
            backgroundPast: action.past,
            backgroundPresent: action.present,
            backgroundFuture: action.future
        })
    }

    // one of the filters!!!
    if (action.type === actions.DISPLAY_FAVES){
        return Object.assign({}, state, {
            displayFavorites: action.displayed
        })
    }

    if (action.type === actions.TOGGLE_FAVORITE){
        let editedSkills = state.currentSkills.map(skill => {
            if (skill.name === action.item){
                skill.favorite = !skill.favorite
            }
            return skill
        })
        return Object.assign({}, state, {
            currentSkills: editedSkills
        })
    }

    if (action.type === actions.TOGGLE_OPEN){
        let editedOpen = state.currentSkills.map(skill => {
            if (skill.name === action.item){
                skill.open = !skill.open
            }
            return skill
        })
        return Object.assign({}, state, {
            currentSkills: editedOpen
        })
    }

    if (action.type === actions.TOGGLE_ALL_STATE){
        let toggledSkills = state.currentSkills.map(skill => {
            skill.open = action.open
            return skill 
        })
        return Object.assign({}, state, {
            currentSkills: toggledSkills
        })
    }

    if (action.type === actions.GATHER_ITEM_TEXT){
        let editedAddedText = state.currentSkills.map(skill => {
            if (skill.name === action.name){
                skill.fullText = action.text
            }
            return skill
        })
        return Object.assign({}, state, {
            currentSkills: editedAddedText
        })
    }

    if (action.type === actions.UPDATE_INPUT_STATE){
        // console.log(action.inputText)
        return Object.assign({}, state, {
            inputText: action.inputText
        })
    }
    if (action.type === actions.UPDATE_FILTER_TYPE){
        return Object.assign({}, state, {
            filterType: action.filterType
        })
    }
    if (action.type === actions.UPDATE_FILTER_ACTIVE){
        return Object.assign({}, state, {
            filterActive: action.filterActive
        })
    }
    if (action.type === actions.UPDATE_FILTER_CATEGORY){
        return Object.assign({}, state, {
            filterCategory: action.filterCategory
        })
    }
    if (action.type === actions.UPDATE_FILTER_FAVORITE){
        return Object.assign({}, state, {
            filterFavorite: action.filterFavorite
        })
    }
    
    if (action.type === actions.UPDATE_CURRENTLY_SHOWN){
        return Object.assign({}, state, {
            currentlyShown: action.currentlyShown
        })
    }

    if (action.type === actions.RESET_FILTERS){
        return Object.assign({}, state, {
            inputText: false,
            filterType: false,
            filterActive: false,
            filterCategory: false,
            filterFavorite: false
        })
    }

    if (action.type === actions.UPDATE_ACTION_DETAILS){
        return Object.assign({}, state, {
            savedActionTab: action.tab
        })
    }

    if (action.type === actions.UPPER_HAND_TOGGLE){
        return Object.assign({}, state, {
            upperHand: !action.priorState
        })        
    }

    if (action.type === actions.UPDATE_STRENGTHEN){
        return Object.assign({}, state, {
            strengthened: action.newState
        })
    }

    if (action.type === actions.SAVE_THE_ROLL){
        return Object.assign({}, state, {
            diceResults: action.array
        })
    }

    if (action.type === actions.UPDATE_SNIPPET){

        return Object.assign({}, state, {
            actionSnippet: action.action
        })
    }

    if (action.type === actions.ADD_TO_PRIOR){
        let priorResults = action.priorResults
        // console.log(state.rollHistory)
        return Object.assign({}, state, {
            rollHistory: [priorResults, ...state.rollHistory]
        })
    }

    if (action.type === actions.SKILLBANK_STATE){

        return Object.assign({}, state, {
            skillBank: action.skillBank
        })
    }

    if (action.type === actions.UPDATE_FOR_REDIRECT){

        return Object.assign({}, state, {
            redirect: action.redirect
        })
    }

    if (action.type === actions.CURRENT_SKILLS_STATE_UPDATE){
        // console.log("run")

        let noDuplicates = []
        //Might as well check for duplicates
        //Loop through each of the object in the original array
        action.revisedSkills.forEach(function(item) {
            if (noDuplicates.length !== 0) {
                var _isPresent = noDuplicates.find(function(secItem) {
                    // the below line is for if checking for duplicates of more than one key value
                    // return secItem.name === item.name && secItem.full_empty === item.full_empty
                    return secItem.name === item.name
                })
                // If element is not present then push this json pbject
                if (_isPresent == undefined) {
                    noDuplicates.push(item)
                }
            } else {  // this will execute only once when noDuplicates length is 0
                noDuplicates.push(item)
            }
        })

        // console.log(action.revisedSkills)
        return Object.assign({}, state, {
            currentSkills: noDuplicates
        })
    }

    if (action.type === actions.CHANGE_CHOICE_TALLY){
        return Object.assign({}, state, {
            quantityChosen: action.totals
        })
    }

    if (action.type === actions.ROLE_SOURCE_STATE_UPDATE){
        // console.log(action.role)
        // console.log(action.source)

        return Object.assign({}, state, {
            role: action.role,
            source: action.source,
            intersection: false
        })
    }

    if (action.type === actions.UPDATE_BACKGROUND_FEATURE_STATE){
     
        return Object.assign({}, state, {
            currentBackground: action.newBackground,
        })
    }

    if (action.type === actions.LAST_ROLL_STATE){

        return Object.assign({}, state, {
            lastRoll: action.lastRoll
        })
    }

    if (action.type === actions.CHOOSE_ROLESOURCE_BUTTON_AVAILABLE){
        // console.log(action.boolean)
        return Object.assign({}, state, {
            roleSourceReady: action.boolean
        })
    }

    if (action.type === actions.UPDATE_INTERSECTION){

        return Object.assign({}, state, {
            intersection: action.intersection
        })
    }

    return state;
}