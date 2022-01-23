export const state = () => ({
  me: null,
  followerList: [],
  followingList: [],
});

//동기적 작업
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  }
};

//비동기적 작업
export const actions = {
  signUp({ commit, state }, payload){
    commit('setMe', payload);
  },
  logIn({commit}, payload) {
    commit('setMe', payload);
  },
  logOut({commit}) {
    commit('setMe', null);
  },
  changeNickname({commit}, payload) {
    commit('changeNickname', payload);
  }
}