import {ACTION} from './actions';


const initialState = {
    exampleState: "Action/reducer is flowing!"
}

export const reducer = (state = initialState, action) => {

    if (action.type === ACTION) {
        return initialState
    }

    return state;
}