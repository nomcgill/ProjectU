import {ACTION} from './actions';
import sampleProjectU from './sampleProjectU'
import sampleChoices from './sampleChoices'
import cleanSlate from './cleanSlate'

// const initialState = sampleChoices
const initialState = cleanSlate

// const initialState = {
//     database: sampleProjectU,
//     choices: sampleChoices
// }


export const reducer = (state = initialState, action) => {

    // if (action.type === ACTION) {
    //     return initialState
    // }

    return state;
}