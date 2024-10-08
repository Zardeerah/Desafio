
import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0  // Valor inicial del contador
  },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    decrementar(state) {
      state.contador--;
    }
  },
  actions: {
    incrementar({ commit }) {
      commit('incrementar');
    },
    decrementar({ commit }) {
      commit('decrementar');
    }
  },
  getters: {
    contador(state) {
      return state.contador;
    }
  }
});



