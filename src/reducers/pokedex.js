export default (state = {}, action) => {
    switch (action.type) {
        case 'LIST_POKEMONS':
            return {
                ...state,
                pokemonsList: action.pokemonsList
            };
        case 'SET_POKEMON_SELECTED':
            return {
                ...state,
                pokemonSelected: action.pokemonSelected
            };
        case 'SET_SEARCH_LIST_POKEMON':
            return {
                ...state,
                pokemonSearchList: action.pokemonSearchList
            };
        default:
            return state;
    }
};
