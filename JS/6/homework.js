// Створити клас Car , Engine та Driver.
//   Клас Driver містить поля - ПІБ, стаж водіння.
//   Клас Engine містить поля – потужність, виробник.
//   Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(),
//   які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.
//
//   Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
//   Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
//   https://storage.googleapis.com/www.examclouds.com/oop/car-ierarchy.png

class Car {
  constructor(brand, carClass, weight) {
    this.brand = brand;
    this.carClass = carClass;
    this.weight = weight;
    this.driver = new Driver();
    this.engine = new Engine();
  }

  start() {
    console.log('Поїхали');
  }
  stop() {
    console.log('Зупиняємося');
  }
  turnRight() {
    console.log('Поворот праворуч');
  }
  turnLeft() {
    console.log('Поворот ліворуч');
  }
  toString() {
    console.log(`
    Марка автомобіля - ${this.brand}
    Класс автомобіля - ${this.carClass}
    Вага автомобіля - ${this.weight}
    Ім'я водія - ${this.driver.name}
    Призвіще водія - ${this.driver.surname}
    Стаж водія - ${this.driver.stage}
    Виробник двигуна - ${this.engine.factory}
    Потужність двигуна - ${this.engine.power}
    `);
  }
}

class Engine {
  constructor(power, factory) {
    this.power = power;
    this.factory = factory;
  }
}

class Driver {
  constructor(name, surname, stage) {
    this.name = name;
    this.surname = surname;
    this.stage = stage;
  }
}

class Lorry extends Car {
  constructor(carrying, ...args) {
    super(...args);
    this.carrying = carrying;
  }
}

class SportCar extends Car {
  constructor(maxSpeed, ...args) {
    super(...args);
    this.maxSpeed = maxSpeed;
  }
}

const man = new Car(1, 2, 3);
man.toString();
