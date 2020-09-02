const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    searchProducts: [],
    CartNull: 'Нет данных',
    cart: [],
    show: false,
    isVisibleCart: false,
    searchTovarNull: false,
    searchLine: '',
    imgCatalog: 'https://placehold.it/200x150'
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      let find = this.cart.findIndex(item => item.id_product == +product.id_product);
      if (find == -1) {
        Vue.set(product, 'quantity', 1);
        this.cart.push(product);
      } else {
        this.cart[find].quantity++;
      }
  
    },
    FilterGoods() {
      let find = this.products.findIndex(item => item.product_name.toLowerCase() == this.searchLine.toLowerCase().trim());

      this.searchProducts = [];
      if (find != -1 && this.searchLine.length != 0) {
        this.searchTovarNull = false;
        this.searchProducts.push(this.products[find]);
      } else {
        this.searchTovarNull = true;
      }

      if (this.searchLine.length == 0) {
        this.searchTovarNull = false;
        this.searchProducts = this.products;
      }

    }
  },
  created(){
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
      });

      this.searchProducts = this.products;
  }
});
