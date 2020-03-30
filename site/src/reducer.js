import * as actions from './actions';
import sampleProjectU from './sampleProjectU'
import sampleChoices from './sampleChoices'
import cleanSlate from './cleanSlate'

const database = sampleProjectU
const initialState = sampleChoices

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

    if (action.type === actions.RESOLVE_EDITING_FORMAT){
        return state
    }

    return state;
}