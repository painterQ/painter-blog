<template>
    <div id="not-found">
        <figure class="snip1533">
            <blockquote>
                <p>苦海无涯，回头是岸。</p>
                <p>
                    <i class="el-icon-bicycle"></i>
                    404,你掉进了一个黑洞，不如按返回键试试┑(￣Д ￣)┍
                </p>
            </blockquote>
            <h3>Painter's Blog</h3>
            <h4>Facebook</h4>
        </figure>
    </div>
</template>

<script>
    export default {
        name: 'painter-404',
        data: function () {
            return {}
        },
    }
</script>

<style scoped>
    #not-found {
        width: 50%;
        margin: 20px auto;
        font-size: 0.6em;
        text-align: center;
    }

    .snip1533 h3 {
        color: #3c3c3c;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
        margin: 10px 0 5px;
    }

    .snip1533 h4 {
        font-weight: 400;
        margin: 0;
        opacity: 0.5;
    }

    .snip1533 blockquote {
        font-style: italic;
        font-weight: 300;
        margin: 0 0 20px;
    }

    /* Demo purposes only */

</style>