import {ACTION} from './actions';


const initialState = {
    source: "Divine",
    role: "Knight",
    intersection: "Paladin",
    level: 1,
    name: "Kaira"
}

export const reducer = (state = initialState, action) => {

    if (action.type === ACTION) {
        return initialState
    }

    return state;
}