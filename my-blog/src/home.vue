<template>
  <div class="page">
    <div class='header'>
        <div>
            <span>博客王</span>
        </div>
        <div class="nav">
            <div>首页</div>
            <div>技术</div>
            <div>关于我</div>
        </div>
        <div class="login">
            <div>登录</div>
            <div>注册</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
    font-size: 20px;
    color:#fff;
}
.header{
    width:100%;
    height:80px;
    background-color:aqua;
    display: flex;
    align-items: center;
}
.header>div{
    margin: 0 20px;
}
.nav{
    display: flex;
    flex: 1;
}
.login{
    display: flex;
}
</style>
