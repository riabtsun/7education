{
  function calc() {
    let a = prompt('enter first num');
    let b = prompt('enter second num');

    let sign = prompt('enter note');

    let sum = (a, b) => a + b;
    let dif = (a, b) => a - b;
    let multy = (a, b) => a * b;
    let div = (a, b) => a / b;

    switch (sign) {
      case '+':
        alert(sum(a, b));
        break;

      case '-':
        alert(dif(a, b));
        break;

      case '*':
        alert(multy(a, b));
        break;

      case '/':
        alert(div(a, b));
        break;
    }
  }

  // calc()
}

{
  let arr = [1, 2, 3, 4, 5];

  function map(fn, array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(fn(array[i]));
    }
    console.log(newArr);
    return newArr;
  }

  function ex(arg) {
    return arg + 1;
  }

  map(ex, arr);
}

// {
//     function checkAge(age) {
//         return age > 18 ? true : confirm('Батьки дозволили?');
//     }
//
//     checkAge(17);
// }

let str = 'var_text_hello';
str = str.split('_');
str = str.map((word) => {
  return word.charAt(0).toLocaleUpperCase() + word.slice(1);
});
str = str.join('');
console.log(str);

function ggg(fn1, fn2) {
  let res = fn2 + fn1;
  console.log(fn1);
  return res;
}

ggg(
  function () {
    return 3;
  },
  function () {
    return 4;
  }
);
