const url = 'https://rickandmortyapi.com/api';

async function getData(url, method = 'GET') {
  const data = await fetch(url, { method });
  return data.json();
}

getData(url).then((info) => {
  const arr = Object.entries(info);
  if (!Array.isArray(arr)) return;
  arr.forEach((item) => {
    createCard(item);
  });
});

function createCard(element) {
  const [key] = element;
  const card = document.createElement('div');
  card.innerText = key;
  card.className = 'card';
  card.addEventListener('click', () => {
    window.open(`/page/index.html?${key}`);
  });
  document.querySelector('.cards').append(card);
}
