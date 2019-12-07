<template>
  <div class="talana-search__wrapper">
    <label>
      <input type="text" v-model="searchString">
    </label>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Product',
  data() {
    return {
      searchString: '',
    };
  },
  watch: {
    searchString: {
      immediate: true,
      deep: true,
      handler(searchString) {
        this.SET_SEARCH_STRING(searchString);
      },
    },
  },
  methods: {
    ...mapActions([
      'SET_SEARCH_STRING',
    ]),
  },
};
</script>

<style scoped>

</style>
