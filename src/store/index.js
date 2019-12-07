import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCategory: 1,
    searchString: '',
    products: [],
    cart: {},
  },
  mutations: {
    ADD_PRODUCT: (state, data) => {
      Vue.set(state.cart, data.product, data);
    },
    REMOVE_PRODUCT: (state, data) => {
      Vue.delete(state.cart, data.product);
    },
    SET_PRODUCTS: (state, data) => {
      state.products = data;
    },
    SET_SEARCH_STRING: (state, data) => {
      state.searchString = data;
    },
    SET_CURRENT_CATEGORY: (state, data) => {
      state.currentCategory = data;
    },
  },
  actions: {
    ADD_PRODUCT: ({ commit }, data) => {
      commit('ADD_PRODUCT', data);
    },
    REMOVE_PRODUCT: ({ commit }, data) => {
      commit('REMOVE_PRODUCT', data);
    },
    SET_PRODUCTS: ({ commit }, data) => {
      commit('SET_PRODUCTS', data);
    },
    SET_SEARCH_STRING: ({ commit }, data) => {
      commit('SET_SEARCH_STRING', data);
    },
    SET_CURRENT_CATEGORY: ({ commit }, data) => {
      commit('SET_CURRENT_CATEGORY', data);
    },
  },
  getters: {
    getCart: state => state.cart,
    getProductsInCart: (state) => {
      const products = [];
      Object.keys(state.cart).forEach((key) => {
        // eslint-disable-next-line max-len
        products.push({ product: state.products.filter(p => p.id === parseInt(key, 10))[0], qty: state.cart[key].qty });
      });
      return products;
    },

  },
  modules: {
  },
});
