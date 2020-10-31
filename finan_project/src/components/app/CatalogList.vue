<template>
  <div id="catalog" class="catalot__product">
    <div>Всего товаров: {{catalogListCount}}</div>
    
    <div id="catalog__list" class="featuredItems__list">
      <div class="featuredItems__item"
        v-for="item in catalogList"
        :key="item.id"
      >
      <div class="featuredItems__item_box">
        <router-link
          to="single_page/2"
          tag="a"
        >
          <a href="#" class="featuredItems__img_link">
            <div class="featuredItems__item_img">
                <img :src="item.productImg" alt="" class="featuredItems__img">
            </div>
          </a>
        </router-link>
        <div class="featuredItems__hover">
            <button class="featuredItems__link" @click="addToBasketItem(item.id)">
                <img class="basket_featuredItems" src="@/assets/imgs/basket.png" alt="Корзина">Add to Cart 
            </button>
        </div>
        <div class="featuredItems_label">
          <router-link
            to="single_page"
            tag="a"
          >
            <a class="shoppingCart__productDetails_item_link" href="#">{{item.productName}}</a>
            
          </router-link>
        </div>
        <div class="featuredItems_price">{{item.productPrice}}$</div>
      </div>
      </div>
    </div>  
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  name: 'catalogList',
  computed: mapGetters(['catalogList', 'catalogListCount']),
  methods: {
    ...mapActions(['fetchCatalogList', 'addBasketItems']),
    ...mapMutations(['addItems']),
    addToBasketItem(item) {
      this.addItems(this.catalogList.filter(el => el.id === item))
    }
  },
  async mounted() {
    // this.$store.dispatch('fetchCatalogList');
    this.fetchCatalogList()
  },
}
</script>
