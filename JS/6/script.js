const url = 'https://fakestoreapi.com/products';

class Card {
  constructor(name, img, price, description) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.productDescription = description;
  }
}

async function createCards() {
  const response = await fetch(url);
  const data = await response.json();

  let products = [];

  data.forEach((card) => {
    products.push(
      new Card(card.title, card.image, card.price, card.description)
    );
  });

  let cards = document.querySelector('.cards');
  products.forEach((card) => {
    const itemCard = `<div class="card" style="width: 18rem;">
                <img style="max-height: 300px" src="${card.img}" class="card-img-top" alt=${card.name}>
                <div class="card-body">
                  <h5 class="card-title">${card.name}</h5>
                  <p class="card-text">${card.productDescription}.</p>
                  <a href="#" class="btn btn-primary">${card.price}</a>
                </div>
              </div>`;
    cards.insertAdjacentHTML('beforeend', itemCard);
  });
}
createCards();
