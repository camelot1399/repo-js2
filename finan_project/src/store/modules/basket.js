export default {
  actions: {},
  mutations: {
    addItems(state, newItem) {
      let find = state.basketItems.find(el => el.id === newItem[0].id)
      if (find) {
        find.quantity++;
      } else {
        state.basketItems.push(newItem[0]);
      }
    },
    deleteItems(state, Item) {
      let find = state.basketItems.find(el => el.id === Item);
      if (find.quantity > 1) {
        find.quantity--;
      } else {
        state.basketItems.splice(state.basketItems.indexOf(Item), 1);
      }
      
    }
  },
  state: {
    basketItems: [],
  },
  getters: {
    basketItems(state) {
      return state.basketItems;
    },
    
  }
}
