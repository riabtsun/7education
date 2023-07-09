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

const newUser = new CreateNewUser(
  prompt('Enter your name'),
  prompt('Enter your surname'),
  prompt('Enter your birthday (dd.mm.yyyy)')
);
