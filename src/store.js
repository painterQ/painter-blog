import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        viewState: {
            index: 1,
            asideSwitch: true,
        }
    },
    // getters: {
    //     doneTodos: state => {
    //         return state.todos.filter(todo => todo.done)
    //     }
    // },
    mutations: {
        changeIndex: (state, index) => {
            state.viewState.index = index
        },
        changeAsideSwitch: state => {
            state.viewState.asideSwitch = !state.viewState.asideSwitch;
        }
    }
});

export default store

