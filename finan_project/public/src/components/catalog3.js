let basket = {
    items: [],
    container: null,
    totalPrice: 0,
    init() {
        this.container = document.querySelector('#basketList');
        this._render();
        this.handleActions();
    },
    _render() {
        let htmlStr = '';
        this.totalPrice = 0;
        this.items.forEach( el => {
            htmlStr += createBasketTemplate(el);
            this.totalPrice = this._calcPrice(el.productPrice);
        });

        htmlStr += createBasketFooter();
        this.container.innerHTML = htmlStr;
        document.querySelector('.basketTotal').innerHTML = this.totalPrice;
        document.querySelector('#BasketItems').innerHTML = basket.items.length;
    },
    _calcPrice(price) {
        return this.totalPrice + +price; 
    },
    handleActions() {
        let basketList = document.querySelector('#basketList');
        basketList.addEventListener('click', event => {

            if (event.target.name == 'delete') {
                this.deleteItem(event.target.dataset.id);
            }
            this._render();
        });
    },
    _addToBasket(product) {
        let find = this.items.find(el => el.productId == product.productId);
        if (!find) {
            this.items.push(Object.assign(product, { amount: 1 }));
        } else {
            find.amount++;
        }
        this._render();
    },
    deleteItem(id) {
        let find = this.items.find(el => el.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1)
        }
        this._render();
    }
}

basket.init();

function createBasketTemplate(el) {
    return `
    <div class="basket__item">
        <div class="basket__item_pic">
            <img src="${el.productImg}" width="50" alt="" class="">
        </div>
        <div class="basket__item_information">
            <div class="basket__item_name">${el.productName}</div>
            <div class="basket__item_stars"></div>
            <div class="basket__item_price"><span class="basket__item_amount">${el.amount}</span> x  $${el.productPrice}</div>
            
        </div>
        <button class="fas fa-trash-alt basket__item_remove" name="delete" data-id="${el.productId}" data-index="${el.productId}"></button>
    </div>
    `;
}

function createBasketFooter() {
    return `
    <div class="basket__footer">
        <div class="basket__footer_total">total: $<span class="basketTotal">0</span></div>
        <button class="btn basket__footer_checkout">CHECKOUT</button>
        <button class="btn basket__footer_goToCart">GO TO CART</button>
    </div>
    `;
}

let catalog = {
    container: null,
    topSize: null,
    range: null,
    items: [],
    size: [],
    baseUrl: 'https://raw.githubusercontent.com/camelot1399/static/master/catalog.json',
    init() {
        this.container = document.querySelector('#catalog__list');
        this.linkToBasket = document.querySelector('#catalog__list');
        this.topSize = document.querySelector('.topFilter__item_param_size');
        this.range = document.querySelector('.rangeChange');
        this.getItems();
        
    },
    getItems() {
        this.getData(this.baseUrl)
        .then(items => { this.items = items })
        .finally(() => {
            this._render()
            this._handleActions()
        })
    },
    getData(url) {
        return fetch(url)
        .then(data => data.json())
    },
    _render() {
        let htmlStr = '';
        this.items.forEach( item => {
            htmlStr += createItemTemplate(item);
        });
        this.container.innerHTML = htmlStr;
    },
    _handleActions() {
        
        this.linkToBasket.addEventListener('click', event => {
            if (event.target.name == 'add') {
                let dataset = event.target.dataset;
                let product = {
                    "productName": dataset.name,
                    "productId": dataset.id,
                    "productImg": dataset.image,
                    "productPrice": dataset.price
                }
                basket._addToBasket(product);
            }
        }); 

        this.topSize.addEventListener('click', event => {
           
            if (event.target.name == 'checkbox') {
                this.size.push(event.target.dataset.size);
            }
        });

        this.range.addEventListener('click', event => {
            console.log(event.target);
            if (event.target.name == 'range') {
                console.log(event.target);
            }
        });
    }
}
catalog.init();

function createItemTemplate(item) {
    return `
    <div class="featuredItems__item ${item.productId}">
        <div class="featuredItems__item_box">
            <a href="single_page.html" class="featuredItems__img_link">
                <div class="featuredItems__item_img">
                    <img src="${item.productImg}" alt="" class="featuredItems__img">
                </div>
            </a>
            <div class="featuredItems__hover">
                <button class="featuredItems__link" 
                    id="${item.productId}" 
                    name="add"
                    data-id="${item.productId}" 
                    data-price="${item.productPrice}" 
                    data-name="${item.productName}" 
                    data-image="${item.productImg}"
                    >
                    <img class="basket_featuredItems" src="../src/assets/imgs/basket.png" alt="Корзина">Add to Cart 
                </button>
            </div>
        </div>
        <div class="featuredItems_label"><a class="shoppingCart__productDetails_item_link" href="single_page.html">${item.productName}</a></div>
        <div class="featuredItems_price">$${item.productPrice}</div>
    </div>
    `;
}

let basketBox = document.querySelector('.basket__icon');
let basketDrop = document.querySelector('.basket__box');
basketBox.addEventListener('click', event => {
    basketDrop.classList.toggle("basketShow");
});