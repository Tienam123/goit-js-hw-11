const API = 'https://pokeapi.co/api/v2/pokemon'

function fetchPokemon(pokemonId) {
  return fetch(`${API}/${pokemonId}/`)
    .then(res => {
      return res.json()
    });
}

export default {fetchPokemon}