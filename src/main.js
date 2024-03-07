import { PixabayApiService } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  searchForm: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
};

const pixabayApiService = new PixabayApiService();

refs.searchForm.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  let inputValue = event.target.elements.query.value.trim();
  if (inputValue === '') {
    iziToast.show({
      message: 'Поле не может быть пустым',
      backgroundColor: '#fc3d03',
      messageColor: '#fff',
      close: false,
      progressBarColor: '#fff',
      position: 'topRight',
      timeout: 1000,
    });
    return;
  }
  if (inputValue.length > 100) {
    iziToast.show({
      message: 'Поле не может быть больше 100 символов',
      backgroundColor: '#fc3d03',
      messageColor: '#fff',
      close: false,
      progressBarColor: '#fff',
      position: 'topRight',
      timeout: 1000,
    });
  }
  inputValue = inputValue.split(' ')
    .join('+');
  pixabayApiService.query = inputValue;
  refs.gallery.innerHTML = '';
  pixabayApiService.fetchArticles()
    .then(articles => {
      if (!articles.hits.length) {
        iziToast.show({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#fc3d03',
          messageColor: '#fff',
          close: false,
          progressBarColor: '#fff',
          position: 'topRight',
          timeout: 1000,
        });
      } else {
        refs.gallery.insertAdjacentHTML('afterbegin', createMarkup(articles.hits));
        let gallery = new SimpleLightbox('.gallery a', {
          captions: true,
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
      }
    });
}



