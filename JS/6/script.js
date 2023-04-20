const url = 'https://fakestoreapi.com/products';

class Card {
  constructor(name, img, price, description) {
    this.name = name;
    this.img = img;
    this.productPrice = price;
    this.productDescription = description;
  }
}

async function createCards() {
  const response = await fetch(url);
  const data = await response.json();

  let products = [];
  data.forEach((card) => {
    products.push(
      new Card(card.title, card.image, card.productPrice, card.description)
    );
  });

  console.log(products);

  products.forEach((card) => {
    document.write(`
              <div class="card" style="width: 18rem;">
                <img src="${card.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${card.name}</h5>
                  <p class="card-text">${card.productDescription}.</p>
                  <a href="#" class="btn btn-primary">${card.productPrice}</a>
                </div>
              </div>`);
  });
}
createCards();
