import { Loader } from './render-functions.js';
import iziToast from 'izitoast';

const API_KEY = '41512134-7ce1694d07a59eb7d39c787c8';

export class PixabayApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchArticles() {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type="photo"&orientation="horisontal"&safesearch="true"`;
    Loader.show();
    return fetch(url)
      .then(responce => responce.json())
      .then(data => {
        Loader.hide();
        return data;
      })
      .catch(err => {
        iziToast.show({
          message: err.message,
          backgroundColor: '#fc3d03',
          messageColor: '#fff',
          close: false,
          progressBarColor: '#fff',
          position: 'topRight',
          timeout: 1000,
        });
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

}