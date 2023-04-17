class CreateNewUser {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    getLogin() {
        (`${this.name[0]}${this.surname}`).toLowerCase()
    }
}

const newUser = new CreateNewUser(prompt('Enter your name'), prompt('Enter your surname'))