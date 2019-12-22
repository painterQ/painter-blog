import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/rpc'

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
        doc: {},
        docs :[]
    },

    mutations: {
        getDoc: (state, id) => {
            api.getDoc({id: id}).then(
                (data)=>{
                    state.doc.text = data.data || ""
                    console.log("ddd",data)
                }
            )
        },
        getDocs: (state)=>{
            api.getDocsList({'start':0, 'length': 10}).then(
                (data)=>{
                    state.docs = data.data || {}
                    console.log("ddd",data)
                }
            )
        },
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

