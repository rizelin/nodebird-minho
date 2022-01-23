export const state = () => ({
  mainPosts: [],
});

//액션에서 뮤테이션을 부름(뮤테이션을 써야지 기록에 남음)
export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload);
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex( v => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.postId);
    state.mainPosts[index].Comments.unshift(payload);
  }
};

//외부에서 액션을 먼저부름
export const actions = {
  add({ commit }, payload) {
    //서버에 게시글 등록 요청
    commit('addMainPost', payload);
  },
  remove({ commit }, payload) {
    commit('removeMainPost', payload);
  },
  addComment({ commit }, payload) {
    commit('addComment', payload);
  }
}