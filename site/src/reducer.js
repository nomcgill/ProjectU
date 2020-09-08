import * as actions from './actions';
import sampleProjectU from './sampleProjectU'
import sampleChoices from './sampleChoices'
import sampleChoicesRevised from './sampleChoicesRevised.json'
import cleanSlate from './cleanSlate.json'

const initialState = sampleChoicesRevised

export const reducer = (state = initialState, action) => {

    // console.log(JSON.stringify(initialState))
    if (action.type === actions.FETCH_PROJECTU_SUCCESS) {
        return Object.assign({}, state, {
            database: action.projectu
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
            level: action.newLevel
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

    if (action.type === actions.CURRENT_SKILLS_STATE_UPDATE){

        return Object.assign({}, state, {
            currentSkills: action.revisedSkills
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

    return state;
}