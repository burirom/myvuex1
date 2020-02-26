import Vue from 'vue'
import Vuex from 'vuex'

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
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    incActionCounter({ commit }) {
      commit("increment");
    },
    decActionCounter({ commit }) {
      commit("decrement");
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
