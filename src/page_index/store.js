import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        author:{
            name : "乔沛杨",
            avatar: "./",
            lastLogin: Date.now(),
            notice: "通知：这是一条重要通知哦",
            aboutMe: "自我介绍"
        }
    },

    mutations: {
        changeIndex: (state, index) => {
            state.viewState.index = index
        },
        changeAsideSwitch: state => {
            state.viewState.asideSwitch = !state.viewState.asideSwitch;
        },
        changeLogin: state => {
            state.login = state
        }
    }
});

export default store

