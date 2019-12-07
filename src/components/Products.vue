<template>
  <ul class="talana-product">
    <div v-if="computedProducts.length === 0">
      No hay productos disponibles :(
    </div>
    <li v-else class="talana-product__item"
        v-for="(item, index) in computedProducts"
        :key="index">
      <Product :product="item"/>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { RepositoryFactory } from '../repositories/RepositoryFactory';
import Product from '@/components/Product.vue';

const ProductsRepository = RepositoryFactory.get('products');

export default {
  name: 'Products',
  components: {
    Product,
  },
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions([
      'SET_CURRENT_CATEGORY',
      'SET_PRODUCTS',
    ]),
    async fetch() {
      this.isLoading = true;
      const { data } = await ProductsRepository.get();
      this.isLoading = false;
      this.products = data;
      this.SET_PRODUCTS(data);
    },
    selectCategory(id) {
      this.SET_CURRENT_CATEGORY(id);
    },
  },
  computed: {
    ...mapState([
      'currentCategory',
      'searchString',
    ]),
    computedProducts() {
      // eslint-disable-next-line max-len
      return this.products.filter(p => p.category.id === this.currentCategory && p.name.toLowerCase().includes(this.searchString));
    },
  },
};
</script>

<style scoped>

</style>
