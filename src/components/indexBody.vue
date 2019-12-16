<template>
    <div>
        <el-row class="index-body-all">
            <el-col  :span="18" class="index-body-main">
                <div v-for="(arts, colIndex) in docs" :key="colIndex" class="index-body-docs-item">
                    <h2 class="art">
                        <span v-if="arts.attr" class="arts-top">[置顶]</span>
                        <span>{{arts.title}}</span>
                    </h2>
                    <p>{{arts.abstract}}</p>
                    <div>Post by 乔沛杨 on {{arts.time}}</div>
                </div>
            </el-col>
            <el-col  :span="6" class="index-body-aside">aside</el-col>
        </el-row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Menu, Submenu, MenuItemGroup, MenuItem} from "element-ui";

    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
    Vue.use(Submenu);
    export default {
        name: 'index-body',
        data: function () {
            return {
                docs : [
                    {
                        title: "第一篇",
                        attr: 'top',
                        subTitles: "文档",
                        time: Date.now(),
                        abstract: '今日（12月12日），2020年春运首日(1月10日)火车票开抢。记者上午查询12306网站发现，春运首日当天的多条热门线路火车票被抢购一空。\n' +
                            '\n' +
                            '根据12306网站显示的数据，截至今日上午11时，春运首日北京西至郑州、沈阳、西安等热门方向的多个车次火车票售罄。这其中，Z字头列车车票最为抢手。\n' +
                            '\n' +
                            '截至发稿时，北京西前往郑州方向的Z字头列车车票已全部售罄；北京站至沈阳北的Z字头列车也已无余票；北京西前往西安的Z129、Z151车票全部卖光；北京西到石家庄方向的Z字头列车仅有少数还有余票。\n' +
                            '\n' +
                            '高铁、动车方面，北京西至郑州方向上午发车的高铁、动车车票也全部售罄；北京站到哈尔滨方向的部分D字头列车也已无余票。'
                    },
                    {
                        title: "第二篇",
                        subTitles: "文档",
                        time: Date.now(),
                        abstract: '据国铁集团介绍，2020年春运全国铁路预计发送旅客4.4亿人次，同比增加3257万人次，增长8.0%，日均发送旅客1100万人次。节前学生流、务工流、探亲流高度重叠，客流相对集中，节后客流相对平缓。\n' +
                            '\n' +
                            '按照铁路春运火车票互联网和电话订票提前30天发售，车站售票窗口、代售点提前28天发售的规定，2020年1月17日(腊月二十三)的火车票起售时间为2019年12月19日。\n' +
                            '\n' +
                            '2020年1月22日(腊月二十八)、1月23日(腊月二十九)为出行高峰期，火车票起售时间为2019年12月24日和25日。'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .index-body-aside{
       padding-left: 15px;
    }
    .index-body-docs-item > div{
        font-family: 'Lora', 'Times New Roman',serif;
        color: gray;
        font-style: italic;
        margin: 0 0 1em 0;
    }
    .index-body-docs-item:hover{
        color: #1c6ca1;
        cursor: pointer;
    }
    .index-body-docs-item > p{
        color: #a3a3a3;
        font-size: 0.7em;
        font-style: italic;
    }
    .arts-top{
        color: orangered;
        margin: 0 10px 0 0;
    }
    .art{
        font-size: 1.1em;
        margin: 0 0 10px 0;
    }
</style>