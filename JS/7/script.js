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
