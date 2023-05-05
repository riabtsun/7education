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
let display = document.querySelector('.display input');
let equal = document.querySelector('#eq');

let result = 0;
let firstNum = '';
let secondNum = '';
let sign = '';
let finish = false;

const showDisplayInfo = (digits) => {
  let acc = '';
  digits.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.value > 0 && e.target.value < 10) {
        acc += e.target.value;
        display.value = acc;
      } else if (e.target.value === 'C') {
        resetCalc();
        display.value = '0';
        acc = '';
      }
    });
  });
  return !firstNum ? (firstNum = acc) : (secondNum = acc);
};
showDisplayInfo(blackButtons);
actions.forEach((btn) => {
  if (firstNum) {
    btn.addEventListener('click', (e) => {
      sign = e.target.value;
      calcAction(sign);
    });
  }
});

equal.addEventListener('click', (e) => {
  if (firstNum && secondNum) {
    e.target.disabled = false;
  }
});
const calcAction = (sign) => {
  switch (sign) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
      break;
  }
};
const resetCalc = () => {
  result = 0;
  firstNum = '';
  secondNum = '';
  sign = '';
  finish = false;
  display.value = 0;
};
