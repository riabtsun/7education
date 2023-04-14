// Створити конструктор Animal та розширюючі його конструктори Dog, Cat, Horse.
//   Конструктор Animal містить змінні food, location і методи makeNoise, eat, sleep.
//   Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
//   Dog, Cat, Horse перевизначають методи makeNoise, eat.
//   Додайте змінні до конструкторів Dog, Cat, Horse, що характеризують лише цих тварин.
//   Створіть конструктор Ветеринар, у якому визначте метод який виводить в консоль treatAnimal(Animal animal).
//   Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
//   У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.

function Animal(food, location) {
  this.food = food;
  this.location = location;

  this.makeNoise = (name) => {
    console.log(` ${name} Така тварина спить`);
  };
  this.eat = function () {
    console.log(`Така тварина їсть`);
  };
  this.sleep = function () {
    console.log(`Така тварина спить`);
  };
}

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

const dog1 = new Dog();

function Veterinarian() {
  this.treatAnimal = function () {
    console.log(`treatAnimal(Animal animal)`);
  };
}
