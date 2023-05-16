import {
  navbarMenu,
  burgerMenu,
  bgOverlay,
  showRandomCards,
  url,
} from '../script.js';

const catalog = document.querySelector('.catalog');

function getProducts(link) {
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        showAllProducts(data.products);
      }
    });
}
getProducts(url);
const showAllProducts = (data) => {
  data.forEach((item, idx) => {
    const { brand, description, id, images, price, rating, title, thumbnail } =
      item;
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img class="product-card__thumbnail"  src="${thumbnail}" alt="${title}">
      <h4 class="product-card__title">${title}</h4>
      <div class="product-card__grade">${Math.floor(rating)}</div>
      <p class="product-card__price">As low as <span class="product-card__cost">$${price}</span></p>
      <button class="product-card__add">ADD TO CART</button>
    `;
    catalog.appendChild(productCard);
  });
};
