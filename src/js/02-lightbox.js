import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

(function createMarkup (){
    const itemMarkup= galleryItems.map(({ original, preview, description })=>{
    return `
    <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    }).join("");
    gallery.insertAdjacentHTML('beforeend', itemMarkup)
}());

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsType: "alt",
    captionDelay: 250,
});
console.log(galleryItems);