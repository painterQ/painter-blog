<template>
    <aside>
        <div v-if="transferData.isDoc">
            isdoc
        </div>
        <div v-if="!transferData.isDoc">
            {{this.$store.state.author.name}}
        </div>
    </aside>
</template>

<script>
    export default {
        name: "index-aside",
        props: ["transfer-data"],  //参数传递，父组件和子组件各有形参和实参
        data: function () {
            return{
                a:{
                }
            }
        }
    }
</script>

<style scoped>

</style>