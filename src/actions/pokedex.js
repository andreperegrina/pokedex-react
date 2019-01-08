import {firebase, googleAuthProvider} from '../firebase/firebase';
import {getPokemons} from '../api/pokedex'

export const setListPokemons = (pokemonsList) => ({
    type: 'LIST_POKEMONS',
    pokemonsList
});

export const startListPokemon = () => (dispatch, getState) => {
    return getPokemons().then((pokemonsList) => {
        dispatch(setListPokemons(pokemonsList));
    });
};

