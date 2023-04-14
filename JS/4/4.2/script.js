class Worker {
  constructor(name, surName, rate, days) {
    this.name = name;
    this.surName = surName;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return console.log(
      this.name,
      this.surName + ' has ' + this.rate * this.days + ' dollars'
    );
  }
}

const Petia = new Worker('Petia', 'Sidorov', 100, 5);

class myString {
  constructor(string) {
    this.string = string;
  }

  reverse() {
    let newString = '';
    for (let i = this.string.length - 1; i >= 0; i--) {
      newString += this.string[i];
    }
    return console.log(newString);
  }

  ucFirst() {
    return console.log(
      this.string.charAt(0).toUpperCase() + this.string.slice(1)
    );
  }
  ucWords() {
    let newString = this.string.split(' ');
    newString = newString
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
    return console.log(newString);
  }
}

const testString = new myString('abcd12345 lololo tratata omg');
testString.reverse();
testString.ucFirst();
testString.ucWords();