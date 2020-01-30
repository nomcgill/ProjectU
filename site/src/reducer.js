import * as actions from './actions';
import sampleProjectU from './sampleProjectU'
import sampleChoices from './sampleChoices'
import cleanSlate from './cleanSlate'

const database = sampleProjectU
const initialState = cleanSlate

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

    return state;
}