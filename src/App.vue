<template>
  <div id="app">
    <router-view/>
     <nav class="mui-bar mui-bar-tab">
        <router-link  class="mui-tab-item mui-active" to="/myself">
          <span class="mui-icon iconfont icon-ren"></span>
          <span class="mui-tab-label">自我介绍</span>
        </router-link>
        <router-link class="mui-tab-item" to="/lianxi">
          <span class="mui-icon iconfont icon-lianxiwomen"></span>
          <span class="mui-tab-label">联系方式</span>
        </router-link>
        <router-link class="mui-tab-item" to="/jianli">
          <span class="mui-icon iconfont icon-jianli">
          </span>
          <span class="mui-tab-label">简历</span>
        </router-link>
        <router-link class="mui-tab-item mui-active" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
			  </router-link>
        <router-link class="mui-tab-item" to="/news">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">消息</span>
        </router-link>
        <router-link class="mui-tab-item" to="/detail">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">详情</span>
        </router-link>
        <router-link class="mui-tab-item" to="/telephone">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">电话</span>
        </router-link>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
