const wallet = {
  name: 'User',
  btc: {
    name: 'Bitcoin',
    logo: `<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'>`,
    course: '24000',
    value: 2,
  },
  eth: {
    name: 'Ethereum',
    logo: `<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'>`,
    course: '1800',
    value: 5,
  },
  xlm: {
    name: 'Stellar',
    logo: `<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'>`,
    course: '500',
    value: 3,
  },

  show(coin) {
    document.querySelector('#wallet').innerHTML = `Доброго дня, ${
      wallet.name
    }! На вашому балансі ${wallet[coin].name} ${wallet[coin].logo} залишилося ${
      wallet[coin].value
    } монет, якщо ви сьогодні продасте їх те, отримаєте ${
      wallet[coin].value * 40 * wallet[coin].course
    } грн.
`;
  },
};

wallet.show('eth');
