import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/rpc'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        viewState: "ListView", //TagsView、DocView
        author: {
            name: "Painter Qiao",
            avatar: "./",
            lastLogin: Date.now(),
            notice: "通知：这是一条重要通知哦",
            aboutMe: "自我介绍"
        },
        tags: [{}],
        docs: [],
    },

    mutations: {
        changeStatus: (state, index) => {
            state.viewState.index = index
        },
        changeAsideSwitch:
            state => {
                state.viewState.asideSwitch = !state.viewState.asideSwitch;
            },
        changeLogin:
            state => {
                state.login = state
            }
    }
});

export default store

