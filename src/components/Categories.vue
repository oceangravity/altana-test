<template>
  <ul class="talana-categories">
    <li class="talana-categories__item"
        @mousedown="selectCategory(item.id)"
        v-for="(item, index) in computedCategories"
        :class="[{'talana-categories__item-selected' : item.id === currentCategory}]"
        :key="index">
      {{item.name}}
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { RepositoryFactory } from '../repositories/RepositoryFactory';

const CategoriesRepository = RepositoryFactory.get('categories');

export default {
  name: 'Categories',
  data() {
    return {
      isLoading: false,
      categories: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions([
      'SET_CURRENT_CATEGORY',
    ]),
    async fetch() {
      this.isLoading = true;
      const { data } = await CategoriesRepository.get();
      this.isLoading = false;
      this.categories = data;
    },
    selectCategory(id) {
      this.SET_CURRENT_CATEGORY(id);
    },
  },
  computed: {
    ...mapState([
      'currentCategory',
    ]),
    computedCategories() {
      return this.categories.slice(0, 10);
    },
  },
};
</script>

<style scoped>

</style>
