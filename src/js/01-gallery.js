// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imgList = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (
      /* html */
      acc +
      ` <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>`
    );
  },
  ''
);

gallery.innerHTML = imgList;

const SimpleLightBox = new SimpleLightBox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
