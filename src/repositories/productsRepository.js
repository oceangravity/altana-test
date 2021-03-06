import Repository from './Repository';

const resource = '/product';
export default {
  get() {
    return Repository.get(`${resource}`);
  },

  getCategory(postId) {
    return Repository.get(`${resource}/${postId}`);
  },

  createCategory(payload) {
    return Repository.post(`${resource}`, payload);
  },
};
