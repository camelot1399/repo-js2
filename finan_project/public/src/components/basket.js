Vue.component('basket', {
    data() {
        return {
            showCart: false,
            basketItems: [],
            baseUrl: 'https://raw.githubusercontent.com/camelot1399/static/master/cartItems.json',
        }
    },
    methods: {
        addProduct(product) {
            let find = this.basketItems.find(el => el.id === product.id);
            if(find){
                this.$root.putJson(`/api/cart/${find.id}`, {quantity: 1}).then(() => {
                    find.quantity++; 
                });
                
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$root.postJson('/api/cart', prod)
                  .then(data => {
                      if (data.result === 1) {
                          this.basketItems.push(prod);
                      }
                  });
            }
        },
        removeProduct(item) {
            let find = this.basketItems.find(el => el.id === item.id);

            if (find.quantity === 1) {
                this.$root.deleteJson(`/api/cart/${find.id}`).then(() => {
                    this.basketItems.splice(this.basketItems.indexOf(item), 1);
                });
                
            } else {
                this.$root.putJson(`/api/cart/${find.id}`, {quantity: -1}).then(() => {
                    find.quantity--;
                });
                
            }
            
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
                    <div class="basket" >
                        <div class="basket__icon" @click="showCart = !showCart">
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
                                        <div class="basket__item_price"><span class="basket__item_amount">{{item.quantity}}</span> x  $ {{item.productPrice * item.quantity}}</div>
                                    </div>
                                    <button  @click="removeProduct(item)" class="fas fa-trash-alt basket__item_remove" name="delete" data-id="prod_1" data-index="prod_1" aria-hidden="true"></button>
                                </div>
                                
                                <div class="basket__footer">
                                    <div class="basket__footer_total"></div>
                                        <button class="btn basket__footer_checkout">CHECKOUT</button>
                                        <a class="btn basket__footer_goToCart" href="product_details">GO TO CART</a>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
});