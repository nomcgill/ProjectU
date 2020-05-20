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
                console.log(skill.favorite)
            }
            return skill
        })
        return Object.assign({}, state, {
            currentSkills: editedSkills
        })
    }

    return state;
}