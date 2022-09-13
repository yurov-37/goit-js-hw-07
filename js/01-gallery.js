import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const imageGallery = document.querySelector(".gallery");
const imagesMarkup = createImageCardsMarkup(galleryItems);

imageGallery.insertAdjacentHTML("beforeend", imagesMarkup);
imageGallery.addEventListener("click", onGalleryClick);

function createImageCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const currentImage = event.target.getAttribute("data-source");
  //   console.log(event.target.dataset.source);
  //   console.log(currentImage);
  console.log(event);

  const instance = basicLightbox.create(`
<img src="${currentImage}" width="800" height="600">
`);
  instance.show();

  imageGallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}
