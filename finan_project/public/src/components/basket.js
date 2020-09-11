Vue.component('basket', {
    data() {
        return {
            showCart: false,
            basketItems: [],
            baseUrl: 'https://raw.githubusercontent.com/camelot1399/static/master/cartItems.json',
        }
    },
    method: {
        addProduct(product) {
            console.log(product);
        },
    },
    mounted(){
        this.$root.getJson('/api/cart')
            .then(data => {
                for(let el of data){
                    this.basketItems.push(el);
                }
            });
    },
    template: `
                <div>
                    <div class="basket" @click="showCart = !showCart">
                        <div class="basket__icon">
                            <img src="../src/assets/imgs/basket_black.png" alt="Корзина">
                            <div id="BasketItems" class="ellips">{{this.basketItems.length}}</div>
                        </div>

                        <div class="basket__box basketShow" v-show="showCart">
                        <p v-if="!basketItems.length">Корзина пуста</p>
                            <div id="basketList" class="basket__list">
                                <div class="basket__item" 
                                    v-for="item of basketItems" 
                                    :key="item.productId"
                                    :cart-item="item"
                                >
                                    <div class="basket__item_pic">
                                        <img :src="item.productImg" width="50" alt="" class="">
                                    </div>
                                    <div class="basket__item_information">
                                        <div class="basket__item_name">{{item.productName}}</div>
                                        <div class="basket__item_stars"></div>
                                        <div class="basket__item_price"><span class="basket__item_amount">1</span> x  $ {{item.productPrice}}</div>
                                    </div>
                                    <button class="fas fa-trash-alt basket__item_remove" name="delete" data-id="prod_1" data-index="prod_1" aria-hidden="true"></button>
                                </div>
                                
                                <div class="basket__footer">
                                    <div class="basket__footer_total">total: $<span class="basketTotal">44</span></div>
                                    <button class="btn basket__footer_checkout">CHECKOUT</button>
                                    <button class="btn basket__footer_goToCart">GO TO CART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
});