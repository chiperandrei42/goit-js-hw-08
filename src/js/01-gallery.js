// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const makeGalleryItem = galleryItems.map(({ original, preview, description }) => (
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
)).join("");
galleryContainer.insertAdjacentHTML('beforeend', makeGalleryItem);
let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionDelay: 250
});
gallery.on('show.simplelightbox');