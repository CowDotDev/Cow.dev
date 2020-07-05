import { createStore } from 'vuex';

export const store = createStore({
  state () {
    return {
      isMobileNavOpen: false
    }
  },
  mutations: {
    setMobileNavState(state, val) {
      state.isMobileNavOpen = val;
    }
  },
  actions: {
    toggleMobileNav({ commit, state }) {
      state.isMobileNavOpen ? commit('setMobileNavState', false) : commit('setMobileNavState', true);
    }
  }
});