import util from './axios.config'

function login(user) {
    console.log("login")
    return util.post("/login",user)
}

function uploadImage(data) {
   return util.post('/doc/image',data)
}

function changeBaseInfo(info) {
    return util.post("/info/base", info)
}

function changeBlogInfo(info) {
    return util.post("/info/blog", info)
}

function changePwdChange(info) {
    return util.post("/info/pwd", info)
}

function getDocsList(info) {
    return util.post("/docs", info)
}
/*
* info: {id: '/doc0'}
* data: {content: '文章'}  or {error: '...'}
* */
function getDoc(info, callback) {
    return util.get("/doc", info).then(
        (data) =>{
            callback(data)
        }
    )
}

function postDoc(info){
    return util.post("/doc", info)
}

//导出 default的含义
export default {
    login,
    changeBaseInfo,
    changeBlogInfo,
    changePwdChange,
    getDocsList,
    getDoc,
    uploadImage,
    postDoc}