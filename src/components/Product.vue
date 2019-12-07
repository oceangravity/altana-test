<template>
  <div class="talana-product__wrapper">
    <div class="talana-product__image">
      <img :src="product.photo" alt="">
    </div>
    <div class="talana-product__name">
      {{ product.name }}
    </div>
    <div class="talana-product__price">
      {{ product.price }}
    </div>
    <div class="talana-product__add">
      <input type="text" v-model="qty"><input type="button" value="Agregar" @mousedown="addProduct">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Product',
  data() {
    return {
      qty: 1,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions([
      'ADD_PRODUCT',
      'REMOVE_PRODUCT',
    ]),
    addProduct() {
      if (this.qty > 0) {
        this.ADD_PRODUCT({ product: this.product.id, qty: this.qty });
      } else {
        this.REMOVE_PRODUCT({ product: this.product.id });
      }
    },
  },
};
</script>

<style scoped>

</style>
