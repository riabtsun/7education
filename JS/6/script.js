class CreateNewUser {
  constructor(name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
  }

  getLogin() {
    `${this.name[0]}${this.surname}`.toLowerCase();
  }
  getAge() {
    const date = new Date().getFullYear();
    const userBirthYear = this.birthday.split('.')[2];
    const age = date - userBirthYear;
    console.log(`User has ${age} years`);
  }
  getPassword() {
    console.log(
      this.name[0].toUpperCase() +
        this.surname.toLowerCase() +
        this.birthday.split('.')[2]
    );
  }
}

// const newUser = new CreateNewUser(
//   prompt('Enter your name'),
//   prompt('Enter your surname'),
//   prompt('Enter your birthday (dd.mm.yyyy)')
// );

const url = 'https://fakestoreapi.com/products';

class Card {
  constructor(name, img, price, description) {
    this.name = name;
    this.img = img;
    this.productPrice = price;
    this.productDescription = description;
  }
}
let products = [];

async function createCards() {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);

  data.forEach((card) => {
    products.push(
      new Card(card.title, card.image, card.productPrice, card.description)
    );
  });
}
createCards();
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
