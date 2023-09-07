class Worker {
  static counter = 0;
  static index = 12345;
  constructor(name, surname, phone, position, date) {
    Worker.counter++;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.position = position;
    this.registr = new Date();
    if (Worker.counter % 5 === 0 && Worker.counter !== 0) {
      Worker.index = Math.floor(Math.random() * (99999 - 10000));
    }
    this.index = Worker.index;
  }

  get info() {
    return `Працівник: ${this.name[0].toUpperCase()}.${this.surname} ${
      this.position
    } ${this.details ? this.details.join('; ') : ''}`;
  }

  set info(data) {
    if (this.details) {
      this.details.push(data);
      return;
    }
    this.details = [data];
  }
}
function createWorker(name, surname, phone, position) {
  const user = new Worker(name, surname, phone, position, new Date());
  user.count = 0;
  Object.defineProperty(user, 'name', { writable: false });
  Object.defineProperty(user, 'surname', { writable: false });
  return function () {
    user.count++;
    return user;
  };
}

const petroIvanov = createWorker('Petro', 'Ivanov', 7719995, 'Cleaner');
const IPdata = petroIvanov();
console.log(IPdata.info);
