import { SOME_MUTATION } from '../mutation-types'
const counter = {
    state: { count: 0, },
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
    },
    getters: {
        getcount: state => state.count,
    }
}
export default {
    counter
}


