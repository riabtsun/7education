/*
* У папці calculator дана верстка макета калькулятора. 
Потрібно зробити цей калькулятор робочим.
* При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
* При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.
* Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
* При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
*/

const [...blackButtons] = document.querySelectorAll('.black');
const [...actions] = document.querySelectorAll('.pink');
const digits = blackButtons
  .map((el) => {
    return +el.value;
  })
  .filter((el) => el >= 0);

const actionsSings = actions.map((el) => {
  return el.value;
});
const keys = document.querySelector('.keys');
let display = document.querySelector('.display');
let displayInput = document.querySelector('.display input');
let equal = document.querySelector('#eq');

let firstNum = '';
let secondNum = '';
let sign = '';
let finish = false;
let memory = null;

keys.addEventListener('click', (e) => {
  const key = e.target.value;
  if (key === 'C') return resetCalc();

  if (digits.includes(+key) || key === '.') {
    equal.disabled = false;

    if (secondNum === '' && sign === '') {
      firstNum += key;
      displayInput.value = firstNum;
    } else if (firstNum !== '' && secondNum !== '' && finish) {
      secondNum = key;
      displayInput.value = secondNum;
      equal.disabled = false;
    } else {
      secondNum += key;
      displayInput.value = secondNum;
    }
    console.log(firstNum, sign, secondNum);
    return;
  }

  if (actionsSings.includes(key)) {
    sign = key;
    return;
  }
  if (key === '=') {
    calcAction(sign);
    finish = false;
    displayInput.value = firstNum;
  }
  if (key === 'm+') {
    memory = displayInput.value;
    let m = document.createElement('span');
    m.innerText = `${key}`;
    m.style.display = 'block';
    m.style.marginTop = '-40px';
    m.style.left = '5px';
    m.style.zIndex = '2';
    m.style.position = 'relative';
    display.style.position = 'relative';
    display.style.zIndex = '1';
    display.appendChild(m);
  }
  if (key === 'mrc' && memory) {
    displayInput.value = memory;
  }
  if (key === 'm-') {
    memory = '';
    let m = document.querySelector('.display span');
    display.removeChild(m);
  }
});

const calcAction = (sign) => {
  switch (sign) {
    case '+':
      firstNum = +firstNum + +secondNum;
      break;
    case '-':
      firstNum = +firstNum - +secondNum;
      break;
    case '*':
      firstNum = +firstNum * +secondNum;
      break;
    case '/':
      firstNum = +firstNum / +secondNum;
      break;
  }
  displayInput.value = firstNum;
  secondNum = '';
  finish = true;
};
const resetCalc = () => {
  firstNum = '';
  secondNum = '';
  sign = '';
  displayInput.value = 0;
  finish = false;
  equal.disabled = true;
};
