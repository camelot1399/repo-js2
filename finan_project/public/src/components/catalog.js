const imgURL = 'https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop/';
let NAMES = [
    'MANGO PEOPLE T-SHIRT', 
    'BANANA PEOPLE T-SHIRT', 
    'STRAWBERRY PEOPLE T-SHIRT',
    'ORANGE PEOPLE T-SHIRT',
    'PUMKIN PEOPLE T-SHIRT',
    'PINEAPPLE PEOPLE T-SHIRT',
    'CUCUMBER PEOPLE T-SHIRT',
    'TOMATO PEOPLE T-SHIRT'
];
let PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

function getArrayOfObjects() {
    let local = [];

    for (let i = 0; i < NAMES.length; i++) {
        local.push({
            productName: NAMES[i],
            productPrice: PRICES[i],
            productImg: `${imgURL}featuredItem${i + 1}.jpg`,
            productId: 'prod_' + i
            //rates (звезды)
        })
    }
    return local;
}

let catalog = {
    container: null,
    items: [],
    init() {
        this.container = document.querySelector('#catalog');
        this._fillCatalog();
        this._render();
    },
    _fillCatalog() { //Инкапсуляция (условная для JS)
        this.items = getArrayOfObjects();
    },
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += createItemTemplate(item);
        });
        this.container.innerHTML = htmlStr;
    }
}

function createItemTemplate(item) {
    return `<div class="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 col-lg-3 feturedItems ">
                <div class="feturedItem">
                    <div class="feturedImgWrap">
                        <div class="feturedBuy">
                            <button>
                                <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                            </button>
                        </div>
                        <img class="feturedProduct" src="${item.productImg}" alt="product1">
                    </div>
                    <div>
                        <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                            <div class="feturedItemName">${item.productName}</div>
                            <div class="feturedItemPrice">$${item.productPrice}</div>
                            <button class="d-md-none">
                                <div><i class="fas fa-shopping-cart"></i> Add to Cart</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
}


catalog.init();