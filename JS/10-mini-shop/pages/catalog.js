import dataBase from '../db.json' assert { type: 'json' };

const catalog = document.querySelector('.catalog');
const catalogSearch = document.querySelector('.filterSearch-input');
let [...allProducts] = dataBase.products;

function renderCatalog(data, rowPerPage, page) {
  let currentPage = 1;
  let rows = 10;
  catalog.innerHTML = '';
  page--;

  const start = rowPerPage * page;
  const end = start + rowPerPage;
  const paginatedData = data.slice(start, end);

  function displayPagination(data, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    const pagesCount = Math.ceil(data.length / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');
    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.append(liEl);
    }
    paginationEl.append(ulEl);
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;

    currentPage === page && liEl.classList.add('pagination__item--active');

    liEl.addEventListener('click', () => {
      currentPage = page;
      showAllProducts(data, rows, currentPage);
      let currentItemLi = document.querySelector('.pagination__item--active');
      currentItemLi.classList.remove('pagination__item--active');
      liEl.classList.add('pagination__item--active');
    });
    return liEl;
  }

  displayPagination(data, rowPerPage);

  const showAllProducts = (data.apply(this.data), rowPerPage, page) => {
    data.forEach((item, idx) => {
      const {
        brand,
        description,
        id,
        images,
        colors,
        price,
        rating,
        title,
        thumbnail,
      } = item;
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
      <img class="product-card__thumbnail"  src="${thumbnail}" alt="${title}">
      <h4 class="product-card__title">${title}</h4>
      <div class="product-card__grade">${Math.floor(rating)}</div>
      <p class="product-card__price">As low as <span class="product-card__cost">$${price}</span></p>
      <div class="product-card__colors"></div>
      <button class="product-card__add">ADD TO CART</button>
    `;

      catalog.appendChild(productCard);

      const productColors = document.createElement('div');
      productColors.classList.add('product-card__colors');
      colors.forEach((color) => {
        const colorItem = document.createElement('div');
        colorItem.classList.add('product-card__colors-item');
        colorItem.style.background = `${color}`;
        const [...productColors] = document.querySelectorAll(
          '.product-card__colors'
        );
        productColors.forEach((item) => {
          item.insertAdjacentElement('beforeend', colorItem);
        });
      });
    });
  };
}

catalogSearch.addEventListener('keyup', (e) => {
  catalog.innerHTML = ``;
  let sortedProducts = allProducts.filter((product) => {
    return product.title.toUpperCase().includes(e.target.value.toUpperCase());
  });
  // showAllProducts(sortedProducts);
  renderCatalog(sortedProducts, 10, 1);
});

if (catalogSearch.value === '') {
  // showAllProducts(allProducts);
  renderCatalog(allProducts, 10, 1);
}
