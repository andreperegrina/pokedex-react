import {getPokemons, getPokemonsInfo, getAllPokemonsInformation} from '../api/pokedexAPI'

export const setListPokemons = (pokemonsList) => ({
    type: 'LIST_POKEMONS',
    pokemonsList
});

export const setPokemonSelected = (pokemonSelected) => ({
    type: 'SET_POKEMON_SELECTED',
    pokemonSelected
});


export const setSearchListPokemon = (pokemonSearchList) => ({
    type: 'SET_SEARCH_LIST_POKEMON',
    pokemonSearchList
});

export const startListPokemon = () => (dispatch, getState) => {
    return getPokemons().then((pokemonsList) => {
        dispatch(setListPokemons(pokemonsList));
    });
};

export const startGetPokemonsInfo = (from, to) => (dispatch, getState) => {
    const listPokemonsRedux = getState().pokemons.pokemonsList;
    const pokemonListGetInfo = [];
    for (let i = from; i < to; i++) {
        pokemonListGetInfo.push(listPokemonsRedux[i]);
    }
    return getPokemonsInfo(pokemonListGetInfo).then((pokemonsList) => {
        if (pokemonsList) {
            let j = 0;
            for (let i = from; i < to; i++) {
                listPokemonsRedux[i] = pokemonsList[j];
                j++;
            }
            dispatch(setListPokemons(listPokemonsRedux));
        }
    });
};


export const startGetAllPokemonInformation = (pokemon) => (dispatch, getState) => {
    return getAllPokemonsInformation(pokemon).then((pokemon) => {
        dispatch(setPokemonSelected(pokemon));
    });
};


export const startSetPokemonSelected = (pokemon) => (dispatch, getState) => {
    dispatch(setPokemonSelected(pokemon));
};


export const startSearchPokemon = (searchText) => (dispatch, getState) => {
    const {pokemonsList} = getState().pokemons;
    const result = pokemonsList.filter(pokemon => pokemon.name.startsWith(searchText));
    const resultWithoutTotalInfo = result.filter(pokemon => (pokemon.height === undefined || pokemon.height === null));
    const resultWithTotalInfo = result.filter(pokemon => (pokemon.height !== undefined && pokemon.height !== null));
    if (resultWithoutTotalInfo.length > 0)
        getPokemonsInfo(resultWithoutTotalInfo).then((pokemonsList) => {
            const allMarge=resultWithTotalInfo.concat(pokemonsList);
            dispatch(setSearchListPokemon(allMarge));
        });
    else
        dispatch(setSearchListPokemon(result));
};


export const startSetSearchPokemon = (value) => (dispatch, getState) => {
    dispatch(setSearchListPokemon(value));
};

