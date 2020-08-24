class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];  //список товаров, данные с сервера
    this.allProducts = []; //готовые экземпляры (сгенерированные сущности)
    this.linkToBasket = document.querySelector('#basket');
    this.productList = document.querySelector('.products');
    this.#fetchGoods();
    this.#render();
    this.calcGoods();
    this.#handleAction();
  }

  calcGoods() {
    this.summ = this.goods.reduce( (total, item) => {
      return total + item.price
    }, 0);
    console.log(this.summ);
  }

  #fetchGoods() {
    this.goods = [
      {id: 1, title: 'Iphone', price: 10, img: 'https://img.mvideo.ru/Pdb/30047952m.jpg'},
      {id: 2, title: 'Телевизор LG 24LK451V-PZ', price: 20, img: 'https://img.mvideo.ru/Pdb/10020719m.jpg'},
      {id: 3, title: 'Телевизор Telefunken TF-LED32S15T2S', price: 30, img: 'https://img.mvideo.ru/Pdb/10024394m.jpg'},
      {id: 4, title: 'Телевизор Samsung UE58TU7570U', price: 40, img: 'https://img.mvideo.ru/Pdb/10023930m.jpg'},
    ];
  }

  #render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
  #handleAction() {
    this.productList.addEventListener('click', event => {
      if (event.target.dataset.control == 'add') {
        console.log('add to basket');
        let dataset = event.target.dataset;
        let product = {
          title: dataset.title,
          id: dataset.id,
          img: dataset.img,
          price: dataset.price
        }
        
        basket._addToBasket(product);
      }
    });
  }
}

class ProductItem {
  constructor (product) {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = product.img;
    this.amount = 1;
  }
  render() {
    return `
    <div class="product__item">
      <img src="${this.img}" alt="${this.title}">
      <h3 class="product__h3">${this.title}</h3>
      <div class="product__buyBlock">
          <div>
              <div class="product__price">${this.price} <i class="fas fa-ruble-sign"></i></div>
              <div class="product__credit">от ${this.price * 0.1} <i class="fas fa-ruble-sign"></i>/мес.</div>
          </div>
          <button class="btn product__btnBuy fas fa-shopping-cart" title="купить" 
          data-control="add"
          data-title="${this.title}"
          data-price="${this.price}"
          data-id="${this.id}"
          data-img="${this.img}"
          ></button>
      </div>  
    </div>`;
  }
  renderInBasket() {
    return `
    <div class="basket__item" >
        <img src="${this.img}" alt="" width="100">
        <div class="basket__title">${this.title}</div>
        <div class="basket__price">${this.price}</div>
        <div class="basket__amount">${this.amount}</div>
        <button class="basket__delete" data-control="delete" data-id="${this.id}">удалить</button>
    </div>`;
  }
}

const list = new ProductList();

class Basket {
  constructor() {
    this.allProducts = []; // товары в корзине
    this.container = document.querySelector('#basket');
    this.#handleAction();
  }
  #handleAction() {
    this.container.addEventListener('click', event => {
    
      if (event.target.dataset.control == 'delete') {
        this._deleteItem(event.target.dataset.id);
      }
      
    });
  }
  _addToBasket(product) {
    this.items = [];
    let find = this.allProducts.find(el => el.id == product.id);
    if (!find) {
        this.items.push(Object.assign(product, { amount: 1 }));
    } else {
        find.amount++;
    }
    this.render();
  }
  _deleteItem(id) {
    let find = this.allProducts.find(el => el.id == id);
    if (find.amount > 1) {
        find.amount--;
    } else {
        this.allProducts.splice(this.allProducts.indexOf(find), 1)
    }
    console.log(this.allProducts);
    
  }
  render() {
    let block = document.querySelector('#basket');
    for (let product of this.items) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.renderInBasket());
    }
  }
}

let basket = new Basket();


// const products = [
//   {id: 1, title: 'Iphone', price: 20000, url: 'https://img.mvideo.ru/Pdb/30047952m.jpg'},
//   {id: 2, title: 'Телевизор LG 24LK451V-PZ', price: 1500, url: 'https://img.mvideo.ru/Pdb/10020719m.jpg'},
//   {id: 3, title: 'Телевизор Telefunken TF-LED32S15T2S', price: 5000, url: 'https://img.mvideo.ru/Pdb/10024394m.jpg'},
//   {id: 4, title: 'Телевизор Samsung UE58TU7570U', price: 4500, url: 'https://img.mvideo.ru/Pdb/10023930m.jpg'},
// ];

// const renderProduct = (id, title, price, url) => {
  // return `<div class="product__item">
  //           <img src="${url}" alt="${title}">
  //           <h3 class="product__h3">${title}</h3>
  //           <div class="product__buyBlock">
  //               <div>
  //                   <div class="product__price">${price} <i class="fas fa-ruble-sign"></i></div>
  //                   <div class="product__credit">от ${price * 0.1} <i class="fas fa-ruble-sign"></i>/мес.</div>
  //               </div>
  //               <button class="btn product__btnBuy fas fa-shopping-cart" title="купить"></button>
  //           </div>  
  //         </div>`;
// };

// const renderProducts = (list) => {
//   const productList = list.map((product) => {
    
//     let {id: id, title: title, price: price, url: url} = product;
//     return renderProduct(id, title, price, url);
//   });
//   document.querySelector('.products').innerHTML = productList.join('');
// }

// renderProducts(products);
