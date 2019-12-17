<template>
    <div>
        <el-row class="index-body-all">
            <el-col  :span="17" class="index-body-main">
                <main>
                    <h1>甘肃</h1>
                    <p>位于我国大西北的甘肃，是中华文化的发祥地之一，华夏始祖伏羲氏在这里推八卦、授渔猎，当然也是个知名大省，其中有堪称世界石窟壁画艺术宝库的敦煌莫高窟、以泥塑著称于世的天水麦积山石窟、万里长城的最西端嘉峪关等。</p>
                    <p>意大利旅行家马可·波罗东游中国时也曾在此停留，当然，在甘肃，也有很多丰富多彩的寺庙，比如拉卜楞寺、大佛寺、大云寺等，不过，在众多寺庙中，有一座很独特的寺庙，修在悬崖之上，比悬空寺还险，网友直呼：怎么修的？</p>
                    <p>这就是马蹄寺，位于肃南裕固族自治县境内，是集石窟艺术、祁连山风光和裕固族风情于一体的旅游区。寺庙始建于东晋年间，至今已经有1600多年的历史，原为汉传佛教寺院，后来逐渐发展为藏传佛教格鲁派的寺院，为青海东科尔寺的属寺之一。</p>
                    <p>民间传说：天马下凡时一蹄落在了这里的一块岩石上，踩下了一只蹄印，寺院由此而得名，而且马蹄印迹现存于普光寺马蹄殿内，成为镇寺之宝。马蹄寺最大的亮点就是建于悬崖峭壁之上的三十三天石窟，险要程度堪比山西悬空寺，令人不可思议。</p>
                </main>
                <div class="doc-bottom">
                    <h2>推荐文章</h2>
                    <ul>
                        <li>文章一</li>
                        <li>文章二</li>
                    </ul>
                    <hr>
                    <el-button>上一篇</el-button>
                    <el-button style="float:right;">下一篇</el-button>
                    <div class="coffee">
                        赏
                    </div>
                    <div class="share">
                        <a class="el-icon-eleme"></a>
                    </div>
                </div>
            </el-col>
            <el-col  :span="5" class="index-body-aside">
                <strong class="tag-tital"></strong>
                目录一<br>
                目录二
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "index-docs-body"
    }
</script>

<style scoped>
    .coffee{
        font-size: 28px;
        line-height: 58px;
        position: relative;
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        padding: 0;
        text-align: center;
        vertical-align: middle;
        color: #fff;
        border: 1px solid #f1b60e;
        border-radius: 50%;
        background: #fccd60;
        background: linear-gradient(to bottom, #fccd60 0, #fbae12 100%, #2989d8 100%, #207cca 100%);
    }
    .tag-tital{

    }
    .tag-tital:before{
        content: "\f02e";
        margin-right: 0.5em;
    }
    .index-body-main{
        margin: 2em;
    }
    .index-body-aside{
        border-left: rgba(88,88,88,0.1) 1px solid;
        padding: 1em 1em 0 1em;
        margin-left: 1em;
    }
</style>