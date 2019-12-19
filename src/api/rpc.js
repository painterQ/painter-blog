import util from './axios.config'

function login(user) {
    return util.post("/login",user)
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

//导出 default的含义
export default {
    login,
    changeBaseInfo,
    changeBlogInfo,
    changePwdChange,
    getDocsList}