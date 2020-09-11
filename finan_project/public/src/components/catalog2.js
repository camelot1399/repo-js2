let NAMES = [
    'Mango  People  T-shirt',
    'Orange  People  T-shirt',
    'Sugar  People  T-shirt',
    'Rasberry  People  T-shirt',
    'Mango  People  T-shirt',
    'Mango  People  T-shirt',
    'Mango  People  T-shirt',
    'Mango  People  T-shirt',
    'Mango  People  T-shirt'
];
let imgURL = 'https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/';
let PRICES = ['52', '44', '30', '52', '25', '52', '52', '1', '1'];

function getArrayOfObjects() {
    let tmp = [];

    for (let i = 0; i < NAMES.length; i++) {
        tmp.push({
            productName: NAMES[i],
            productPrice: PRICES[i],
            productImg: `${imgURL}${i + 1}.png`,
            productId: 'prod_' + i
        }); 
    }
    return tmp;
}

let catalog = {
    container: null,
    items: [],
    init() {
        this.container = document.querySelector('#catalog__list');
        this._fillCatalog();
        this._render();
    },
    _fillCatalog() {
        this.items = getArrayOfObjects();
    },
    _render() {
        let htmlStr = '';
        this.items.forEach( item => {
            htmlStr += createItemTemplate(item);
        });
        this.container.innerHTML = htmlStr;
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
                <a href="#" class="featuredItems__link">
                    <img class="basket_featuredItems" src="../src/assets/imgs/basket.png" alt="Корзина">Add to Cart 
                </a>
            </div>
        </div>
        <div class="featuredItems_label"><a class="shoppingCart__productDetails_item_link" href="single_page.html">${item.productName}</a></div>
        <div class="featuredItems_price">$${item.productPrice}</div>
    </div>
    `;
}