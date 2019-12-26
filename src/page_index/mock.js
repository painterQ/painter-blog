import Mock from 'mockjs'

Mock.mock('/docs', 'post', (options) => {
    console.log("api",options.url,options.body);
    let data = JSON.parse(options.body);
    let length = data.length;
    let ret = [];
    let tmp = null;
    for (let i = 0;i < length;i ++){
        if(Math.random()> 0.5){
            //deep copy
            tmp = JSON.parse(JSON.stringify(docsList[0]))
        }else {
            tmp = JSON.parse(JSON.stringify(docsList[1]))
        }
        tmp.id = "/doc/doc" + Math.ceil(Math.random() * 1000);
        ret.push(tmp)
    }
    return ret
});

Mock.mock(/\/doc.+/, 'get', (opt) => {
    console.log("api GET /doc",opt.url,opt.body)
    //opt含有 url、type 和 body 三个属性
    let s = opt.url.split("doc");
    let para = s[s.length -1];
    let r = Math.ceil(Math.random() * 10);
    let ret = "<h1>文章" + para + "...</h1>"
    while (r > 0){
        if (r-- > 1){
            ret += "<p>";
            ret += "文章内容".repeat(Math.ceil(Math.random()*30))
            ret += "</p>";
        }
        if (r % 2 === 0){
            ret += "<h2>二级标题</h2>"
        }
        if (r%3 === 0){
            ret += "<h3>三级标题</h3>"
        }
        if (Math.random() > 0.2){
            ret += `<img src="/public/img/background.0ed615ed.jpg\\\\" alt="" width="278" height="185" />`
        }
    }

    return ret;
});

let docsList = [
    {
        id: "",
        title: "第一篇",
        attr: 'top',
        subTitles: "文档",
        tags: ["新闻","社会"],
        time: Date.now(),
        abstract: '今日（12月12日），2020年春运首日(1月10日)火车票开抢。记者上午查询12306网站发现，春运首日当天的多条热门线路火车票被抢购一空。\n' +
            '\n' +
            '根据12306网站显示的数据，截至今日上午11时，春运首日北京西至郑州、沈阳、西安等热门方向的多个车次火车票售罄。这其中，Z字头列车车票最为抢手。\n',
    },
    {
        id: "",
        title: "第二篇",
        subTitles: "文档",
        tags: ["新闻"],
        time: Date.now(),
        abstract: '据国铁集团介绍，2020年春运全国铁路预计发送旅客4.4亿人次，同比增加3257万人次，增长8.0%，日均发送旅客1100万人次。节前学生流、务工流、探亲流高度重叠，客流相对集中，节后客流相对平缓。\n' +
            '\n' +
            '按照铁路春运火车票互联网和电话订票提前30天发售，车站售票窗口、代售点提前28天发售的规定，2020年1月17日(腊月二十三)的火车票起售时间为2019年12月19日。\n',
    },
];