<template>
    <div id="manager" ref="manager">
<!--        想要更新显示，1.修改依赖的状态 2.状态被Vue感知到-->
        <div class="col" v-for="(arts, colIndex) in colItems" :key="colIndex"
             ref="col"
             :style="{width: colWidth + 'px'}">
            <div class="art" v-for="(artItem, index) in arts" :key="index">
                <div>
                    {{artItem.text}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "painter-manager",
        data: function () {
            return {
                colItems: [], //每一项是一个art数组，
                colWidth: 0, //Number 列宽 px
            }
        },

        mounted: function () {
            /*
            * learn: dom 节点的克隆和追加
            * cloneNode得到的是Node对象
            *
            * 这样实现瀑布流的缺点是，每列宽度是固定的，有可能导致很宽的横向间隔
            * */
            let w = this.$refs["manager"].clientWidth;
            let colNum = Math.floor(w / 250);
            this.colWidth = 250 + Math.floor((w - colNum * 250) / colNum);
            console.log(w, colNum, this.colWidth);
            this.colItems = new Array(colNum);

            //现在的问题是，在mount中修改了元素，但是获取不到受此影响的其他元素的尺寸
            //生产art

            this.add();
        },
        methods : {
            min : function() {  //不能使用箭头函数，因为箭头函数没有this，vue就不能把this绑定到当前实例
                let min = 65535, r = 0;
                //当ref和v-for搭配的时候，$ref[~]会返回数组
                //不要吧ref绑定变量
                let cols = this.$refs['col'];
                for (let i in cols) {
                    if (cols[i].offsetHeight < min) {
                        min = cols[i].offsetHeight;
                        r = i;
                    }
                }
                //计算属性中不允许产生修改其他状态的副作用
                console.log('min:', r);
                return r;
            },
            add :async function () {
                for (let i = 0; i < 40; i++) {
                    let currentCol = this.min();
                    let newArt = {text: i + "\n" + "文章".repeat(Math.floor(Math.random() * 80))};
                    if (!(this.colItems[currentCol] instanceof Array)) {
                        this.colItems[currentCol] = [];
                    }
                    let tmp = [];
                    for(let i of this.colItems){
                        tmp.push(i)
                    }
                    tmp[currentCol].push(newArt);
                    this.colItems = tmp;
                    await this.$nextTick();
                }
            }
        }
    }
</script>

<style scoped>
    #manager {
        max-width: 1024px;
        margin: 3em auto;
        position: relative;
    }

    .col {
        float: left;
        box-sizing: border-box;
        margin-left: 1em;
    }

    .art {
        border-radius: 4px;
        width: 100%;
        overflow-y: hidden;
        padding: 1em;
        margin-top: 1em;
        background-color: #fff;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }

    .art:hover {
        box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.2);
        position: relative;
        top: -1px;
        left: -1px;
    }

    .art > * {
        display: block;
        cursor: pointer;
    }
</style>