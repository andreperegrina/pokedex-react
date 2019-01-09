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
        default:
            return state;
    }
};
