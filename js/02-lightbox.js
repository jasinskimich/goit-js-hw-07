import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const generateGallery = (galleryItem) => {
  const galleryImage = document.createElement("img");

  galleryImage.classList.add("gallery__image");
  galleryImage.setAttribute("src", galleryItem.preview);
  galleryImage.setAttribute("alt", galleryItem.description);

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.setAttribute("href", galleryItem.original);
  galleryLink.append(galleryImage);



  return galleryLink;
};

const generateImages = (galleryItems) => {
  galleryItems.forEach((item) => {
    gallery.append(generateGallery(item));
  });
};
generateImages(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });