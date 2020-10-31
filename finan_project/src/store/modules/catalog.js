export default {
  actions: {
    async fetchCatalogList({commit}) {
      const res = await fetch('https://raw.githubusercontent.com/camelot1399/static/master/catalog.json');
      const list = await res.json();
      commit('getCatalogList', list)
    }

  },
  mutations: {
    getCatalogList(state, list) {
      state.catalog = list;
    },
    createCurrentItem(state, item) {
      state.currentItem.push(state.catalog.find(el => el.id === item))
    }
  },
  state: {
    catalog: [],
    currentItem: [],
  },
  getters: {
    catalogList(state) {
      return state.catalog;
    },
    catalogListCount(state) {
      return state.catalog.length;
    },
    getItemsById: state => id => {
      return state.catalog.find(el => el.id === id)
    }
  }
}
