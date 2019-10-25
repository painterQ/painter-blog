<template>
    <div id="manager" ref="manager">
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
            let gap = 10; //垂直gap
            let w = this.$refs["manager"].clientWidth;
            let mod = Math.floor(w/200);
            let g = (w - mod * 200)/(mod -1) //水平的间距

            //初始化height
            let height = [this.$refs["art"].offsetHeight];
            for (let i = 1;i < mod;i ++){
                height[i] = -10
            }

            let els = [];
            for(let i = 0; i< 40; i++){
                els[i] = this.$refs["art"].cloneNode(true);
                els[i].firstChild.innerHTML = i + "\n文章".repeat(Math.floor(Math.random() * 100));
            }
            let min = function () {
                let r = 0;
                for(let i=0, l = 99999999999;i<4;i++){
                    if(height[i] < l){
                        l = height[i]
                        r = i
                    }
                }
                return r
            };
            for(let e of els){
                let m = min();
                let w = m * (200.00000 + g);
                let h = height[m] + gap;
                e.style.top = h + "px";
                e.style.left = w + "px";
                document.getElementById("manager").appendChild(e);
                height[m] += e.offsetHeight + gap;
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

    .art {
        border-radius: 4px;
        width: 200px;
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