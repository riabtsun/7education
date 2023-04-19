// Створити конструктор Animal та розширюючі його конструктори Dog, Cat, Horse.
//   Конструктор Animal містить змінні food, location і методи makeNoise, eat, sleep.
//   Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
//   Dog, Cat, Horse перевизначають методи makeNoise, eat.
//   Додайте змінні до конструкторів Dog, Cat, Horse, що характеризують лише цих тварин.
//   Створіть конструктор Ветеринар, у якому визначте метод який виводить в консоль treatAnimal(Animal animal).
//   Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
//   У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.

class Animal {
  constructor(name, food, location) {
    this.food = 'Kovbasa';
    this.location = 'Earth';
    this.name = name;
  }
}

Animal.prototype.makeNoise = function () {
  console.log(` ${this.name} Така тварина спить`);
};
Animal.prototype.eat = function () {
  console.log(`${this.name}Така тварина їсть`);
};
Animal.prototype.sleep = function () {
  console.log(`тварина спить`);
};

function Dog(isHunter) {
  this.isHunter = true;
  this.makeNoise = (name) => {
    console.log(` ${name} Така тварина не спить`);
  };
}

function Cat(isHunter) {
  this.isHunter = true;
}

function Horse(isHunter) {
  this.isHunter = true;
}

Dog.prototype = new Animal();
Dog.prototype.makeNoise = function () {
  console.log(` ${this.name} Така тварина спить 10 годин`);
};

Cat.prototype = new Animal();
Horse.prototype = new Animal();

function Veterinarian() {}

Veterinarian.prototype.treatAnimal = function (animal) {
  console.log(Object.values(animal));
};

function main() {
  const animals = [new Dog(), new Cat(), new Horse()];
  animals.forEach((el) => {
    new Veterinarian().treatAnimal(el);
  });
}
