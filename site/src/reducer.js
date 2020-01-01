import {ACTION} from './actions';


const initialState = {
    source: "Divine",
    role: "Knight",
    intersection: "Paladin",
    level: 1,
    name: "Kaira",
    skills: {
        basic: {
            title: "Basic", 
            moves: "bmove bmove bmove bmove bmove bmove bmove bmove bmove bmove"
        },
        advanced: {
            title: "Advanced", 
            moves: "amove amove amove amove amove amove amove amove amove amove amove"
        },
        master: {
            title: "Master",
            moves: "mmove mmove mmove mmove mmove mmove mmove mmove mmove mmove mmove"
        }
    }
}

export const reducer = (state = initialState, action) => {

    if (action.type === ACTION) {
        return initialState
    }

    return state;
}