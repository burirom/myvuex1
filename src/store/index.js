import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    count2: 0,
    todos: [
      { id: 1, user: "のむら", text: "テストです", done: true },
      { id: 2, user: "やすひで", text: "メッセージです", done: false }
    ]
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
    decrement(state, payload) {
      state.count -= payload.amount;
    },
    [SOME_MUTATION](state, payload) {
      state.count += payload.amount;
    },
    incCommiTtest(state) {
      state.count++;
    }
  },
  actions: {
    incActionCounter({ commit }) {
      commit("increment", {
        amount: 1
      });
    },
    decActionCounter({ commit }) {
      commit("decrement", {
        amount: 1
      });
    },
    testActionCounter({ commit }) {
      commit('SOME_MUTATION', {
        amount: 1
      });
    }
  },
  modules: {
  },
  getters: {
    getcount: state => state.count,
    doneTodos: state => {
      return state.todos
    }
  }
})
