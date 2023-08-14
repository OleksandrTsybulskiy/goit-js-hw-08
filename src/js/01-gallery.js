// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function createImages(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallary__item"> 
         <a class="galary__link" href="${original}"> 
         <img class="gallery__image" src="${preview}" alt="${description}"/>
         </a> 
         </li>`
    )
    .join('');
} 

gallery.insertAdjacentHTML('beforeend', createImages(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});