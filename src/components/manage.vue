<template>
    <div id="manager" ref="manager">
        <div class="col" ref="col">

        </div>
        <div class="art" ref="art">
            <div>
                第一篇文章
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "painter-manager",
        mounted: function () {
            /*
            * learn: dom 节点的克隆和追加
            * cloneNode得到的是Node对象
            *
            * 这样实现瀑布流的缺点是，每列宽度是固定的，有可能导致很宽的横向间隔
            * */
            let w = this.$refs["manager"].clientWidth;
            let colNum = Math.floor(w/250);
            let colWidth = 250 + Math.floor((w - colNum * 250)/colNum);

            console.log(w,colNum,colWidth);

            //生产col
            let doc = this.$el.ownerDocument
            let cols = []
            for(let i = 0;i < colNum;i++){
                cols[i] = doc.createElement('div');
                cols[i].className = 'col';
                cols[i].style.width = colWidth + 'px';
                this.$refs['manager'].append(cols[i]);
            }

            //min函数
            let min = function () {
                let min = 65535, r = 0;
                for(let i in cols){
                    if (cols[i].offsetHeight < min){
                        min = cols[i].offsetHeight;
                        r = i;
                    }
                }
                console.log('min:',r)
                return r;
            };
            //生产art
            let els = [];
            for(let i = 0; i< 40; i++){
                els[i] = this.$refs["art"].cloneNode(true);
                els[i].firstChild.innerHTML = i + "\n文章".repeat(Math.floor(Math.random() * 100));
                cols[min()].appendChild(els[i]);
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

    .col{
        height: 0;
        float: left;
        overflow-y: visible;
    }

    .art {
        border-radius: 4px;
        width: 100%;
        overflow-y: hidden;
        position: absolute;
        padding: 1em;
        background-color: #fff;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }

    .art:hover{
        box-shadow: 2px 7px 4px rgba(0, 0, 0, 0.1);
    }

    .art > *{
        display: block;
        cursor: pointer;
    }
</style>