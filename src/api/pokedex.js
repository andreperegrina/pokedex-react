const axios = require('axios');

function getPokemons() {
    return axios.get('http://localhost:3001/pokemon')
        .then(function (response) {
            const callPokemons = [];
            const listPokemonsCalls = response.data.results;

            const pokemons = response.data.results;
            for (let i = 0; i < 20; i++) {
                const pokemonToCall = listPokemonsCalls[i];
                callPokemons.push(axios.get(pokemonToCall.url));
            }

            return axios.all(callPokemons).then(axios.spread((...responses) => {
                for (let i = 0; i < responses.length; i++) {
                    const response = responses[i];
                    pokemons[i]=response.data;
                }
                return pokemons;
            }));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

module.exports = {
    getPokemons: getPokemons
};
