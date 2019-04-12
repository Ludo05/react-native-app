import {GET_CHARACTERS} from "./actionConstants";

export const getCharacters =  () => dispatch => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(results => results.json())
        .then(characters => {
            return dispatch({
                type: GET_CHARACTERS,
                payload: characters.results,
            });
        })
};