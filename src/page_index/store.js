import Vue from 'vue'
import Vuex from 'vuex'

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
            currentID: "/doc0",
            docs: {
                "/doc0": {
                    id: '/doc0',
                    title: "第一篇来自editor的文章",
                    subTitle:"随笔",
                    tags:['原创','editor'],
                    attr: 'top',
                    time: Date.now(),
                    abstract:'第一篇文章，即将开始美好生活',
                    content: '<h1 style="text-align: center;">标题</h1><br/><p>开始</p><br/><h3>第一段</h3><br/><p>图片</p><br/><p><img src="/public/img/background.0ed615ed.jpg\\" alt="" width="278" height="185" /></p><br/><h3>第二段</h3><br/><p>开始<strong>第二段</strong>吧</p><br/><h3>第三段</h3>'
                }
                ,
                "/doc1": {
                    id: '/doc1',
                    title: "第二篇文章",
                    subTitle:"随笔",
                    tags:['原创','editor'],
                    time: Date.now(),
                    abstract:'第一篇文章，即将开始美好生活',
                    content:''}
                ,
                "/doc2": {
                    id: '/doc2',
                    title: "第三篇文章",
                    subTitle:"随笔",
                    tags:['原创','editor'],
                    attr: 'top',
                    time: Date.now(),
                    abstract:'第三篇文章，即将开始美好生活',
                    content:''}
                ,
                "/doc3": {
                    id: '/doc3',
                    title: "第四篇文章",
                    subTitle:"随笔",
                    tags:['原创','editor'],
                    time: Date.now(),
                    abstract:'第四篇文章，即将开始美好生活',
                    content:''}
                ,
            }
        },

        mutations: {
            updateDoc: (state, id, content) => {
                // api.getDoc({id: id}).then(
                //     (data) => {
                //         console.log(state, id, state.docs[id])
                //         state.docs[id].content = data.data || ""
                //     }
                // )
                let tmp = state.docs[id];
                if (tmp != null && content instanceof String){
                    tmp.content = content
                }
            },
            addDocs:
                (state, range) => {
                    for(let i of range){
                            console.log("vuex addDocs add doc", i);
                            state.docs[i.id] = i
                            console.log("test",state.docs[i.id])
                        }
                },
            setCurrent:
                (state, id ) => {
                    state.currentID = id
                }
        }
    })
;

export default store

