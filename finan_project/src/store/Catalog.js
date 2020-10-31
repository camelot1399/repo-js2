export default {
  state: {
    catalogData: [
      {"productName":"Mango  People  T-shirt","productPrice":"52","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/1.png","id": 0, "quantity": 1},
      {"productName":"Orange  People  T-shirt","productPrice":"44","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/2.png","id": 1, "quantity": 1},
      {"productName":"Sugar  People  T-shirt","productPrice":"30","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/3.png","id": 2, "quantity": 1},
      {"productName":"Rasberry  People  T-shirt","productPrice":"52","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/4.png","id": 3, "quantity": 1},
      {"productName":"Mango  People  T-shirt","productPrice":"25","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/5.png","id": 4, "quantity": 1},
      {"productName":"Mango  People  T-shirt","productPrice":"52","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/6.png","id": 5, "quantity": 1},
      {"productName":"Mango  People  T-shirt","productPrice":"52","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/7.png","id": 6, "quantity": 1},
      {"productName":"Mango  People  T-shirt","productPrice":"1","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/8.png","id": 7, "quantity": 1},
      {"productName":"Mango  People  T-shirt","productPrice":"1","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/9.png","id": 8, "quantity": 1}
  ],
  },
  getters: {
    catalogData: ({catalogData}) => catalogData,
    getItems(state) {
      return state.catalogData
    }
  },
  mutations: {
    GET_CATALOG(state, data) {
      state.loading = { ...data };
    },
  },
  actions: {
    fetchCatalogData({commit}) {
    
      setTimeout( () => {
        commit('GET_CATALOG', {"productName":"Mango  People  T-shirt","productPrice":"1","productImg":"https://raw.githubusercontent.com/camelot1399/static/master/img/catalot__product/9.png","id": 9, "quantity": 1});
      }, 2000);

    }
  },
};
