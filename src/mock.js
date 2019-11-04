import Mock from 'mockjs'

Mock.mock('/login', 'post', (options) => {
    console.log('options:', options)
    let data = JSON.parse(options.body)
    let name = data.name
    let password = data.password
    if (name === 'admin' && password === 'admin') {
        return {
            status: 1,
            message: '登录成功'
        }
    } else {
        return {
            status: 0,
            message: '账号或者密码错误'
        }
    }
})

let r = [];
for(let i = 0;i<160;i++){
    r.push(i + "曦曦 爱你".repeat(Math.ceil(Math.random() * 20)))
}

Mock.mock('/arts', 'post', (options) => {
    console.log('options:', options);
    let data = JSON.parse(options.body);
    let start = data.start;
    let end = data.end;
    if(end < start) return null;
    if(end > 160) return null;
    return r.slice(start,end);
});