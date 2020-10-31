<template>
  <div class="basket">
      <div class="basket__icon" @click="basketShow = !basketShow">
          <img src="../../assets/imgs/basket_black.png" alt="Корзина">
          <div id="BasketItems" class="ellips">{{basketItems.length}}</div>
      </div>

      <div v-show="basketShow" class="basket__box basketShow">
        <p v-show="basketItems.length == 0">Корзина пуста</p>
            <div v-show="basketItems" id="basketList" class="basket__list">
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
                    <button 
                      class="fas fa-trash-alt basket__item_remove" 
                      name="delete" data-id="prod_1" 
                      data-index="prod_1" 
                      aria-hidden="true"
                      @click="deleteFromBasket(item.id)"
                    ></button>
                </div>
                
                <div class="basket__footer">
                    <div class="basket__footer_total"></div>
                        <router-link
                          to="/checkout"
                        >
                          <a class="btn basket__footer_checkout" href="#">CHECKOUT</a>
                        </router-link>
                        <router-link
                          to="/product_details"
                        >
                          <a class="btn basket__footer_goToCart" href="#">GO TO CART</a>
                        </router-link>
                        
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  name: 'Basket',
  data() {
    return {
      showCart: false,
      basketShow: false
    }
  },
  computed: mapGetters(['basketItems']),
  methods: {
    ...mapMutations(['deleteItems']),
    deleteFromBasket(item) {
      this.deleteItems(item)
    },
  },
  mounted() {}
}
</script>
