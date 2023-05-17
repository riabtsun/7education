const url = 'https://dummyjson.com/products/?limit=100';
import dataBase from './db.json' assert { type: 'json' };

let [...allProducts] = dataBase.products;

console.log('***', allProducts);

const searchInput = document.querySelector('#search');
let salesBlock = document.querySelector('.sales-cards');

const getRandomCards = (data) => {
  if (salesBlock) {
    salesBlock.innerHTML = ``;
    let randomSales = [];
    for (let i = 0; i < 4; i++) {
      randomSales.push(Math.floor(Math.random() * 100));
    }
    randomSales.forEach((num) => {
      data.forEach((item, idx) => {
        const {
          brand,
          description,
          id,
          images,
          price,
          rating,
          title,
          thumbnail,
        } = item;
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        if (num === idx) {
          productCard.innerHTML = `
      <img class="product-card__thumbnail"  src="${thumbnail}" alt="${title}">
      <h4 class="product-card__title">${title}</h4>
      <div class="product-card__grade">${Math.floor(rating)}</div>
      <p class="product-card__price">As low as <span class="product-card__cost">$${price}</span></p>
      <button class="product-card__add">ADD TO CART</button>
    `;
          salesBlock.appendChild(productCard);
        }
      });
    });
  }
};
getRandomCards(allProducts);

// Open and Close Navbar Menu
const navbarMenu = document.getElementById('menu');
const burgerMenu = document.getElementById('burger');
const bgOverlay = document.querySelector('.overlay');

if (burgerMenu && bgOverlay) {
  burgerMenu.addEventListener('click', () => {
    navbarMenu.classList.add('is-active');
    bgOverlay.classList.toggle('is-active');
  });

  bgOverlay.addEventListener('click', () => {
    navbarMenu.classList.remove('is-active');
    bgOverlay.classList.toggle('is-active');
  });
}

// Close Navbar Menu on Links Click
document.querySelectorAll('.menu-link').forEach((link) => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('is-active');
    bgOverlay.classList.remove('is-active');
  });
});
export { navbarMenu, burgerMenu, bgOverlay, url, allProducts };
let filteredData = allProducts.filter((product) => {
  searchInput.addEventListener('change', (e) => {
    return product.title === e.target.value;
  });
});
