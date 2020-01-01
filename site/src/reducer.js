import {ACTION} from './actions';


const initialState = {
    source: "Divine",
    role: "Knight",
    intersection: "Paladin",
    level: 1,
    name: "Kaira",
    skills: {
        given: {
            role: "Truth (passive) - For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
            source: "Your power is granted from on high. Gods and Angels provide you abilities most mortals can only dream of."
        },
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