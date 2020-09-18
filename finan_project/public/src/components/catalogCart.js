Vue.component('catalogCart', {
    data() {
        return {
            baseUrl: 'https://raw.githubusercontent.com/camelot1399/static/master/catalog.json',
            basketUrl: '../src/assets/imgs/basket.png',
            catalogItems: [],
            filteredItems: [],
            basketAPI: this.$root.$refs.headerComponent.$refs.basket,
            singlePageAPI: '/single_page?id=',
        }
    },
    methods: {
       
    },
    mounted(){
        this.$root.getJson(this.baseUrl)
            .then(data => {
                for(let el of data){
                    this.catalogItems.push(el);
                }
                this.filteredItems = this.catalogItems;
            });
    },
    template: `
                <div>
                <div id="catalog" class="catalot__product" >
                    <div id="catalog__list" class="featuredItems__list">

                        <div class="featuredItems__item" 
                                                        v-for="item of filteredItems" 
                                                        :key="item.id">
                            <div class="featuredItems__item_box">
                                <a :href="'/single_page?id=' + item.id" class="featuredItems__img_link">
                                    <div class="featuredItems__item_img">
                                        <img :src="item.productImg" alt="" class="featuredItems__img">
                                    </div>
                                </a>
                                <div class="featuredItems__hover">
                                    <button class="featuredItems__link" name="add" @click="basketAPI.addProduct(item)">
                                        <img class="basket_featuredItems" src="src/assets/imgs/basket.png" alt="Корзина" >Add to Cart 
                                    </button>
                                </div>
                            </div>
                            <div class="featuredItems_label"><a class="shoppingCart__productDetails_item_link" href="single_page.html">{{item.productName}}</a></div>
                            <div class="featuredItems_price">$ {{item.productPrice}}</div>
                        </div>

                    </div>  
                </div>
                </div>`
});