const axios = require('axios');

const API_URL= process.env.API_URL;

function getPokemons() {
    return axios.get(API_URL+'/pokemon')
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
                    pokemons[i] = response.data;
                }
                return pokemons;
            }));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

function getPokemonsInfo(pokemonList) {
    const callPokemons = [];
    for (let i = 0; i < pokemonList.length; i++) {
        const pokemonToCall = pokemonList[i];
        callPokemons.push(axios.get(pokemonToCall.url));
    }

    return axios.all(callPokemons).then(axios.spread((...responses) => {
        const pokemons=[];
        for (let i = 0; i < responses.length; i++) {
            const response = responses[i];
            pokemons.push(response.data);
        }
        return pokemons;
    })).catch(function (error) {
        // handle error
        console.log(error);
    });
}

function getAllPokemonsInformation(pokemon) {
}

module.exports = {
    getPokemons: getPokemons,
    getPokemonsInfo: getPokemonsInfo,
    getAllPokemonsInformation: getAllPokemonsInformation
};
