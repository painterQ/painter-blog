<template>
    <div id="manager" ref="manager">
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
            let min = () => {
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
            };

            for (let i = 0; i < 40; i++) {
                let currentCol = min();
                let newArt = {text: i + "\n" + "文章".repeat(Math.floor(Math.random() * 20))};
                if (!(this.colItems[currentCol] instanceof Array)) {
                    this.colItems[currentCol] = new Array()
                }
                this.colItems[currentCol].push(newArt);
                this.colItems = this.colItems.slice();
            }
        }
    }
</script>

<style scoped>
    #manager {
        max-width: 1024px;
        margin: 3em auto;
        position: relative;
        height: 100%;
    }

    .col {
        float: left;
        box-sizing: border-box;
        margin: 0;
    }

    .art {
        border-radius: 4px;
        width: 100%;
        overflow-y: hidden;
        padding: 1em;
        background-color: #fff;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }

    .art:hover {
        box-shadow: 2px 7px 4px rgba(0, 0, 0, 0.1);
    }

    .art > * {
        display: block;
        cursor: pointer;
    }
</style>