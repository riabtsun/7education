window.addEventListener('load', () => {
  document.getElementsByTagName('ol')[0].addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = 'green';
    e.target.style.opacity = '.3';
    e.target.style.fontSize = '.8rem';
  });
});

let newDiv = document.createElement('div');
newDiv.style.height = '100px';
newDiv.style.width = '100px';
newDiv.style.border = '1px solid black';
newDiv.style.marginLeft = '150px';
document.body.append(newDiv);
// console.log(newDiv.style.marginLeft);

const timer = document.querySelector('.container-stopwatch');
const timerDisplay = document.querySelector('.stopwatch-display');
const timerBtns = document.querySelector('.stopwatch-control');

const startBtn = timerBtns.firstElementChild;
const resetBtn = timerBtns.lastElementChild;
const stopBtn = startBtn.nextElementSibling;

let displaySeconds = 0;

let timeCounter = 0;
let timerInterval;
let ms = timerDisplay.lastElementChild;
let minute = timerDisplay.firstElementChild;
let second = minute.nextElementSibling;

const startTimer = () => {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeCounter += 1 / 60;
    let msVal = Math.floor((timeCounter - Math.floor(timeCounter)) * 100);
    let secondVal = Math.floor(timeCounter) - Math.floor(timeCounter / 60) * 60;
    let minuteVal = Math.floor(timeCounter / 60);
    ms.innerHTML = msVal < 10 ? '0' + msVal.toString() : msVal;
    second.innerHTML = secondVal < 10 ? '0' + secondVal.toString() : secondVal;
    minute.innerHTML = minuteVal < 10 ? '0' + minuteVal.toString() : minuteVal;
  }, 1000 / 60);
};
startBtn.addEventListener('click', () => {
  startTimer();
  timer.classList.add('green');
  timer.classList.remove('silver');
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timeCounter = 0;
  ms.innerHTML = '00';
  minute.innerHTML = '00';
  second.innerHTML = '00';

  timer.classList.remove('green');
  timer.classList.remove('red');
  timer.classList.add('silver');
});
stopBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timer.classList.remove('green');
  timer.classList.remove('silver');
  timer.classList.add('red');
});

let phoneBlock = document.createElement('div');
let phoneInput = document.createElement('input');
let savePhone = document.createElement('button');
let errorDiv = document.createElement('div');
document.body.append(phoneBlock);
phoneBlock.classList.add('phoneBlock');
phoneBlock.append(phoneInput);
savePhone.innerText = 'Перевірити номер';
phoneBlock.append(savePhone);
phoneInput.type = 'tel';

const regexp = /0\d{2}-\d{3}-\d{2}-\d{2}/;

savePhone.addEventListener('click', () => {
  regexp.test(phoneInput.value)
    ? setTimeout(() => {
        document.location.href =
          'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
      }, 3000)
    : phoneBlock.prepend(errorDiv),
    (errorDiv.innerText = 'Невірний формат телефона');
});
