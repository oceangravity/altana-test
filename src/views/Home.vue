<template>
  <div class="talana-main-layout">
    <div class="talana-logo">
      <div class="talana-logo__wrapper">
        <span>LOGO</span>
      </div>
    </div>
    <div class="talana-head">
      <Search />
      <Cart />
    </div>
    <div class="talana-categories">
      <Categories />
    </div>
    <div class="talana-content">
      <Products />
    </div>
  </div>
</template>

<script>
import Categories from '@/components/Categories.vue';
import Products from '@/components/Products.vue';
import Cart from '@/components/Cart.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'home',
  components: {
    Categories,
    Products,
    Cart,
    Search,
  },
};
</script>
