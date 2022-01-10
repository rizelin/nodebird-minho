export const state = () => ({
  mainPosts: [],
});

export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload);
  }
};

export const actions = {
  add({ commit }, payload) {
    //서버에 게시글 등록 요청
    commit('addMainPost', payload, { root: true });
  }
}