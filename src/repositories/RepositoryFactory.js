import CategoriesRepository from './categoriesRepository';
import ProductsRepository from './productsRepository';

const repositories = {
  categories: CategoriesRepository,
  products: ProductsRepository,
};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
};
