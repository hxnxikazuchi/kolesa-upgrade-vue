import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      score: 0,
      avatarUrl: '',
    },
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },
    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
      if (state.userInfo.score < 0) {
        state.userInfo.score = 0;
      }
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios.get('templates/7ZW3y5GAuIge/data').then(({ data }) => {
        console.log(data);
        if (data && Object.keys(data).length) {
          commit('updateUserInfo', data);
        }
      });
    },
  },
  modules: {
  },
});
