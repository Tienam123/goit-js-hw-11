import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import { Notify } from 'notiflix';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.form-group'),
};

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  let searchQuery = form.elements.query.value;
  API.fetchPokemon(searchQuery)
     .then(renderPokemonCard)
     .catch(onFetchError)
     .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML += markup;
}

function onFetchError(error) {
  Notify.failure('OOps Something going on. And we are don\'t find your pokemon')
}

//-----------------------------------//---------------------------------------
fetch(
  'https://pixabay.com/api/?key=41512134-7ce1694d07a59eb7d39c787c8&q=dog&image_type=photo&pretty=true&orienation=vertical')
  .then(res => res.json())
  .then(res => console.log(res.hits));
