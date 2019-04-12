import {combineReducers} from 'redux'
import {GET_CHARACTERS} from "../actions/actionConstants";

export const getCharactersList = (state = [], action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    getCharactersList: getCharactersList
});