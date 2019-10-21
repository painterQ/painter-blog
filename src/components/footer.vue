<template>
    <div id="footer">
        <span>Copyright Painter Qiao. 浙ICP备19042136号.</span>
    </div>
</template>

<script>
    export default {
        name: 'painter-footer',
        data : function () {
            return {}
        },
    }
</script>

<style scoped>
    #footer{
        font-size: 0.6em;
        text-align: center;
        box-shadow : 0 -2px 4px rgba(0,0,0,0.1);
        z-index: 10;
    }
    #footer > span{
        display: inline-block;
        margin-top: 0.3em;
    }
</style>