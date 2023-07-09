const firstInput = document.querySelector('#input1');
const secondInput = document.querySelector('#input2');
const changeInputBtn = document.querySelector('#changeBtn');
changeInputBtn.addEventListener('click', (el) => {
  let firstValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = firstValue;
});

let [...colorBlocks] = document.querySelectorAll('.secondTaskDiv');
colorBlocks.forEach((block) => {
  block.style.background = 'green';
});

const inputGenerator = document.querySelector('.thirdTaskInput');
const blockGenerator = document.querySelector('.createBlockBtn');
const thirdTask = document.querySelector('.thirdTask');

blockGenerator.addEventListener('click', () => {
  const newBlock = document.createElement('div');
  newBlock.innerHTML = `${inputGenerator.value}`;
  thirdTask.append(newBlock);
  inputGenerator.value = '';
});

window.onload = () => {
  const changeImgBtn = document.querySelector('.changeImg');
  const resetImg = document.querySelector('.resetImage');
  resetImg.style.height = '300px';
  resetImg.src = 'https://itproger.com/img/courses/1476977240.jpg';
  let counter = 0;
  changeImgBtn.addEventListener('click', () => {
    counter += 1;
    resetImg.src = `https://itproger.com/img/courses/1476977488.jpg`;
    counter === 1
      ? (resetImg.src =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png')
      : 'https://itproger.com/img/courses/1476977240.jpg';
  });
};

const paragraphsBlock = document.querySelector('.fifthTask');
paragraphsBlock.addEventListener('click', (event) => {
  let paragraph = event.target;
  paragraph.remove();
});
