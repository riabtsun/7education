const category = document.location.search.substr(1);
document.querySelector('title').innerHTML = category;

async function req(url) {
  const data = await fetch(url);
  return data.json();
}

if (category === 'characters') {
  req('https://rickandmortyapi.com/api/character')
    .then((data) => {
      showInfo(data);
    })
    .catch((err) => {
      console.error(err);
    });
} else if (category === 'locations') {
  req('https://rickandmortyapi.com/api/location')
    .then((data) => {
      showInfo(data);
    })
    .catch((err) => {
      console.error(err);
    });
} else if (category === 'episodes') {
  req('https://rickandmortyapi.com/api/episode')
    .then((data) => {
      showInfo(data);
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  console.error('error');
}

function showInfo(data) {
  console.log(data);
  const divs = data.results.map((el) => {
    const div = document.createElement('div');
    div.className = 'card';
    const pattern = `
      <div> 
        ${
          el.image
            ? `<img src=${el.image} alt=${el.name}>`
            : el.type
            ? el.type
            : el.air_date
        }
      </div>
      <h3>${el.name}</h3>
      ${
        el.species
          ? `<p>${el.species}</p>`
          : el.episode
          ? `<p>${el.episode}</p>`
          : ''
      }
    `;
    div.insertAdjacentHTML('beforeend', pattern);
    div.addEventListener('click', (e) => {
      openInfo(el, e);
    });
    return div;
  });
  document.querySelector('.cards').append(...divs);
}

function openInfo(card, event) {
  const modal = document.querySelector('.box-modal');
  modal.classList.add('active');
  document.querySelector('#modal-close').addEventListener('click', () => {
    modal.classList.remove('active');
    document.querySelector('.modal-body').innerHTML = '';
  });
  document.querySelector('.modal-body').innerHTML += `
     ${
       card.image
         ? `<img class='modal-body__img' src='${card.image}' alt='${card.name}'>`
         : ''
     } 
     <div class='modal-body__info'>
      <span>Name: ${card?.name}</span> 
      ${card?.status ? `<span>Status: ${card.status}</span>` : ''}
      ${card?.species ? `<span>Species: ${card.species}</span>` : ''}
       
      ${card?.type && `<span>Type: ${card.type}</span>`}  
      ${card?.gender ? `<span>Gender: ${card.gender}</span>` : ''} 
      ${
        card?.origin
          ? `<span>Origin: <a href='${card.origin.url}'>${card.origin.name}</a></span>`
          : ''
      }
      
      ${
        card?.location
          ? `<span>Location: <a href='${card.location.url}'>${card.location.name}</a></span>`
          : ''
      }
      
    </div>
`;
}
