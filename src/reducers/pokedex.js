export default (state = {}, action) => {
  switch (action.type) {
    case 'LIST_POKEMONS':
      return {
          pokemonsList: action.pokemonsList
      };
    default:
      return state;
  }
};
