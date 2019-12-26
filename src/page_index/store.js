import Vue from 'vue'
import Vuex from 'vuex'
import DocListClass from './docList.js'

Vue.use(Vuex);

const init = {
        "/doc0": {
            id: '/doc/doc0',
            title: "第一篇来自editor的文章",
            subTitle: "随笔",
            tags: ['原创', 'editor'],
            attr: 'top',
            time: Date.now(),
            abstract: '第一篇文章，即将开始美好生活',
        }
        ,
        "/doc1": {
            id: '/doc/doc1',
            title: "第二篇文章",
            subTitle: "随笔",
            tags: ['原创', 'editor'],
            time: Date.now(),
            abstract: '第一篇文章，即将开始美好生活',
        }
        ,
        "/doc2": {
            id: '/doc/doc2',
            title: "第三篇文章",
            subTitle: "随笔",
            tags: ['原创', 'editor'],
            attr: 'top',
            time: Date.now(),
            abstract: '第三篇文章，即将开始美好生活',
        }
        ,
        "/doc3": {
            id: '/doc/doc3',
            title: "第四篇文章",
            subTitle: "随笔",
            tags: ['原创', 'editor'],
            time: Date.now(),
            abstract: '第四篇文章，即将开始美好生活',
        }};

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
            docs: new DocListClass(init),
            docsUpdate: false
        },

        mutations: {
            updateDoc: (state, id, content) => {
                // api.getDoc({id: id}).then(
                //     (data) => {
                //         console.log(state, id, state.docs[id])
                //         state.docs[id].content = data.data || ""
                //     }
                // )
                let tmp = state.docs.docSet[id];
                if (tmp != null && content instanceof String){
                    tmp.content = content
                }
            },
            addDocs:
                (state, range) => {
                    for(let i of range){
                            state.docs.docSet[i.id] = i
                        }
                    state.docsUpdate = range.length > 0
                },
            clearUpdateStat:(state)=>{
                state.docsUpdate = false
            },
            setCurrent:
                (state, id ) => {
                    state.currentID = id
                }
        }
    })
;

export default store

