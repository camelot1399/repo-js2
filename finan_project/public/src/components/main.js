const routes = [
  {
    path: '',
    components: {
      promo: promo,
      promo2: promo2,
      offer30: offer30,
      subscribe: subscribe
    }
  },
  { path: '/catalog', 
    components: {
      catalogbox: catalogbox,
      breadcrumb: breadcrumb,
      offer3list: offer3list,
      subscribe: subscribe
    } 
  },
  {
    path: '/product_details',
    components: {
      userInfo: userInfo,
      subscribe: subscribe
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
    router,
    el: '#app',
    data: {
        
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
              .catch(error => {
                  this.$refs.error.setError(error);
              });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
              .catch(error => {
                  this.$refs.error.setError(error);
              });
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
              .catch(error => {
                  this.$refs.error.setError(error);
              });
        },
    },
    mounted() {
        console.log(this);
    }
}).$mount('#app');