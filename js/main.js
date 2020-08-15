const products = [
  {id: 1, title: 'Iphone', price: 20000, url: 'https://img.mvideo.ru/Pdb/30047952m.jpg'},
  {id: 2, title: 'Телевизор LG 24LK451V-PZ', price: 1500, url: 'https://img.mvideo.ru/Pdb/10020719m.jpg'},
  {id: 3, title: 'Телевизор Telefunken TF-LED32S15T2S', price: 5000, url: 'https://img.mvideo.ru/Pdb/10024394m.jpg'},
  {id: 4, title: 'Телевизор Samsung UE58TU7570U', price: 4500, url: 'https://img.mvideo.ru/Pdb/10023930m.jpg'},
];

const renderProduct = (id, title, price, url) => {
  return `<div class="product__item">
            <img src="${url}" alt="${title}">
            <h3 class="product__h3">${title}</h3>
            <div class="product__buyBlock">
                <div>
                    <div class="product__price">${price} <i class="fas fa-ruble-sign"></i></div>
                    <div class="product__credit">от ${price * 0.1} <i class="fas fa-ruble-sign"></i>/мес.</div>
                </div>
                <button class="btn product__btnBuy fas fa-shopping-cart" title="купить"></button>
            </div>  
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((product) => {
    let {id: id, title: title, price: price, url: url} = product;
    return renderProduct(id, title, price, url);
  });
  document.querySelector('.products').innerHTML = productList.join('');
}

renderProducts(products);
