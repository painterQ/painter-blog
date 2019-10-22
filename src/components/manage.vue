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
            * */
            // this.$refs["art"].display = "block";
            let els = [];
            for(let i = 0; i< 40; i++){
                els[i] = this.$refs["art"].cloneNode(true);
                els[i].firstChild.innerHTML = "文章".repeat(Math.floor(Math.random() * 100));
                document.getElementById("manager").appendChild(els[i]);
            }
        }
    }
</script>

<style scoped>
    #manager {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        align-items:flex-start;
    }

    .art {
        border-radius: 4px;
        width: 10em;
        overflow-y: hidden;
        margin: 1em 0.5em;
        padding: 1em;
        background-color: #fff;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .art > *{
        display: block;
    }
</style>