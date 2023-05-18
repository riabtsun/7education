// Open and Close Navbar Menu
import dataBase from '../db.json' assert { type: 'json' };

const navbarMenu = document.getElementById('menu');
const burgerMenu = document.getElementById('burger');
const searchBlock = document.querySelector('.search-block');
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

let [...allProducts] = dataBase.products;
const searchInput = document.querySelector('#search');

const headerSearchList = document.createElement('ul');
headerSearchList.classList.add('searchList');
searchBlock.append(headerSearchList);
function renderList(event) {
  let newList;
  if (event === '' || event === null) {
    headerSearchList.innerHTML = '';
  } else {
    newList = allProducts.filter((product) => {
      return product.title.toUpperCase().includes(event.toUpperCase());
    });
  }
  newList.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${product.title}`;
    headerSearchList.append(listItem);
  });
}
searchInput.addEventListener('keyup', (e) => {
  renderList(e.target.value);
});
