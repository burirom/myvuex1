import Vue from 'vue'
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'
import counter from './moduls/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, user: "のむら", text: "テストです", done: true },
      { id: 2, user: "やすひで", text: "メッセージです", done: false }
    ],
    text: "成功です"
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
    },
    changeText(state, payload) {
      state.text = payload.text;
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
    },
    changeActionText({ commit }, updatetext) {
      commit("changeText", {
        text: "待ってます..."
      })
      setTimeout(() => {
        commit("changeText", {
          text: updatetext
        })
      }, 1000)
    }

  },
  modules: {
    Counter: counter
  },
  getters: {
    getcount: state => state.count,
    doneTodos: state => {
      return state.todos
    }
  }
})
