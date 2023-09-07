export function store() {
  if (!localStorage.storeProducts) {
    document
      .querySelector('#box-show')
      .insertAdjacentHTML(
        'beforeend',
        `<div class='box-none'>Поки немає данних ❌</div>`
      );
    return;
  }
  const product = JSON.parse(localStorage.storeProducts);
}

function createTableElement(product, className, editEvent, deleteEvent) {
  const { name, quantity, price, status, description, date, category, url } =
    product;
  const tr = document.createElement('tr');

  const elements = [
    newTd(name),
    newTd(quantity),
    newTd(price),
    newTd(status ? '✅' : '❌'),
    newTd(description),
    newTd(date),
    newTd(category),
    newTd(url),
  ];
}

function newTd(props) {
  if (!props) return;
  const td = document.createElement('td');
  td.innerText = props;
  return td;
}
