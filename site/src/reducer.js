import {ACTION} from './actions';
import exampleState from './exampleState'

const initialState = exampleState

export const reducer = (state = initialState, action) => {

    if (action.type === ACTION) {
        return initialState
    }

    return state;
}