<template>
  <div class="talana-cart__wrapper">
    <div class="talana-cart__button" @mousedown="showModal">
      Cart {{ cartLength }}
    </div>
    <div class="talana-cart__modal" v-if="modalVisible">
      <div class="talana-cart__products"
           v-if="getProductsInCart.length === 0">Nada en el carrito :(</div>
      <ul v-else class="talana-cart__products">
        <li class="talana-cart__item"
            v-for="(item, index) in getProductsInCart"
            :key="index">
          <span>{{item.qty}}</span>
          {{item.product.name}}
          <a @mousedown="removeProduct(item.product.id)">Borrar</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Product',
  data() {
    return {
      qty: 0,
      modalVisible: false,
    };
  },
  methods: {
    ...mapActions([
      'REMOVE_PRODUCT',
    ]),
    addProduct() {
      this.ADD_PRODUCT({ product: this.product.id, qty: this.qty });
    },
    removeProduct(id) {
      this.REMOVE_PRODUCT({ product: id });
    },
    showModal() {
      this.modalVisible = !this.modalVisible;
    },
  },
  computed: {
    ...mapGetters([
      'getCart',
      'getProductsInCart',
    ]),
    cartLength() {
      return Object.keys(this.getCart).length;
    },
  },
};
</script>

<style scoped>

</style>
