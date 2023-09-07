import { showForm } from './functions.js';

const modal = document.querySelector('.container-modal');
const modalBody = document.querySelector('.modal-window');
const addProduct = document.querySelector('#btn-add-product');
const modalClose = document.querySelector('#modal-close');
const productSelect = document.querySelector('#product-select');

addProduct.addEventListener('click', () => {
  modal.classList.remove('hide');
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hide');
});

productSelect.addEventListener('change', (e) => {
  showForm(e.target.value.toLowerCase());
});
