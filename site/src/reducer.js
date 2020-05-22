import * as actions from './actions';
import sampleProjectU from './sampleProjectU'
import sampleChoices from './sampleChoices'
import sampleChoicesRevised from './sampleChoicesRevised'
import cleanSlate from './cleanSlate'

const database = sampleProjectU
// const initialState = sampleChoices
const initialState = sampleChoicesRevised

// const initialState = {
//     database: sampleProjectU,
//     choices: sampleChoices
// }


export const reducer = (state = initialState, action) => {

    if (action.type === actions.FETCH_PROJECTU_SUCCESS) {
        return Object.assign({}, state, {
            database: database
        })
    }

    if (action.type === actions.CHARACTER_PANE_UPDATE_SUCCESS) {
        return Object.assign({}, state, {
            navBar: action.newStatus
        })
    }

    // if (action.type === actions.RESOLVE_EDITING_FORMAT){
    //     return state
    // }

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

    return state;
}