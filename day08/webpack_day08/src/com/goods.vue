<template>
    <div>
        <h1>我很帅,goods组件</h1>
        <router-link to="/goods/login">登录</router-link>
        <router-link to="/goods/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    h1 {
        color: red
    }
</style>
