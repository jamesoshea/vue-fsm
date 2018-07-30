import Vue from "vue";
import Vuex from "vuex";

import { fetchMachine } from "../fetchMachine";
import { transition } from "../fsmTransition";

const state = {
  state: fetchMachine.initial,
  items: [],
  loading: false
};

const mutations = {
  updateFetchState(state, nextState) {
    state.state = nextState;
  },
  updateItems(state, data) {
    state.items = data;
  },
  loading(state, payload) {
    state.loading = payload;
  }
};

const actions = {
  FETCH_TRANSITION: transition.bind(null, fetchMachine),
  FETCH_DATA(
    { commit, dispatch },
    {
      params: { query }
    }
  ) {
    setTimeout(() => {
      commit("updateItems", ["dog", "cat", "fish"]);
      dispatch("FETCH_TRANSITION", {
        type: "SUCCESS"
      });
    }, 2000);
  },
  SHOW_LOADING({ commit }) {
    commit("loading", true);
  },
  HIDE_LOADING({ commit }) {
    commit("loading", false);
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions
});
