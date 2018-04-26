import { FEATHER_WEATHER } from "../actions";

export default function(state=[], action) {
    // console.log('Action received', action);
    switch(action.type) {
    case FEATHER_WEATHER:
        //use concat or [] is to make a new array instead of mutate the old one
        // return state.concat(action.payload.data)
        return [action.payload.data, ...state]
    }
    return state;
}