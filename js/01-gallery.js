import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const generateGallery = (galleryItem) => {
  const galleryImage = document.createElement("img");

  galleryImage.classList.add("gallery__image");
  galleryImage.setAttribute("src", galleryItem.preview);
  galleryImage.setAttribute("alt", galleryItem.description);
  galleryImage.dataset.source = galleryItem.original;

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.setAttribute("href", galleryItem.original);
  galleryLink.append(galleryImage);

  const galleryContainter = document.createElement("div");
  galleryContainter.classList.add("gallery__item");
  galleryContainter.append(galleryLink);

  return galleryContainter;
};

const generateImages = (galleryItems) => {
  galleryItems.forEach((item) => {
    gallery.append(generateGallery(item));
  });
};
generateImages(galleryItems);

let lightbox;

const linkClick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    lightbox = basicLightbox.create(
      `<img width="1400" height="900" src=${e.target.dataset.source}>`
    );
    lightbox.show();
  }
};
const closeLightBoxWithEsc = (e) => {
  if (e.key === "Escape" && basicLightbox.visible()) {
    lightbox.close();
  }
};
gallery.addEventListener("click", linkClick);
gallery.addEventListener("keydown", closeLightBoxWithEsc);
