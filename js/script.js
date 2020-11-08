import galleryItems from './data/gallery-items.js';

// console.log("Исходные данные галлереи");
// console.log(galleryItems);


const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  overlay: document.querySelector('.lightbox__overlay'),
  lightboxImg: document.querySelector('.lightbox__image'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
};

const galleryItemsMarkup = createGalleryItems(galleryItems);

refs.gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);


// Создание и рендер разметки по массиву данных 

function createGalleryItems(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join('');
}