<template>
  <el-header class="top-container">
    <div class="topbar-left app-log">
        <router-link to="/" class="topbar-btn">
            测试效能平台
        </router-link>
    </div>
    <div class="topbar-left">
        <el-menu mode="horizontal" class="top-nav"
        background-color="#373d41" text-color="#fff" active-text-color="#33cde5">
            <el-menu-item index="1">
              <router-link to="welcome" class="topbar-btn">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
               <router-link to="welcome" class="topbar-btn">项目</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="my" class="topbar-btn">我的</router-link>
            </el-menu-item>
            <el-menu-item index="4">
               <router-link to="welcome" class="topbar-btn">服务</router-link>
            </el-menu-item>
        </el-menu>
    </div>
    <div class="topbar-right top-right-container">
      <div class="topbar-left">
        <span class="topbar-btn top-right-topbar-btn"><li class="el-icon-search"></li>搜索</span>
      </div>
      <div class="topbar-left topbar-right-dropdown">
        <span class="topbar-btn top-right-topbar-btn"><li class="el-icon-plus"></li>添加</span>
        <ul class="topbar-right-menu-list-add">
          <li><router-link to="">新增任务</router-link></li>
          <li><router-link to="">新增缺陷</router-link></li>
          <li><router-link to="">新增需求</router-link></li>
          <li><span style="border-bottom: 1px solid #ddd;"></span></li>
          <li><router-link to="">新增项目</router-link></li>
          <li><router-link to="">新增项目集</router-link></li>
        </ul>
      </div>
      <div class="topbar-left topbar-right-dropdown">
        <span class="topbar-btn top-right-topbar-btn"><li class="el-icon-bell"></li>消息</span>
      </div>
      <div class="topbar-left topbar-right-dropdown">
        <span class="topbar-btn top-right-topbar-btn"><li class="el-icon-setting"></li>配置</span>
      </div>
      <div class="topbar-left">
        <span class="topbar-btn top-right-topbar-btn app-top-user">谢*临时</span>
      </div>
      <div class="topbar-left">
        <span class="topbar-btn top-right-topbar-btn">{{language.value}}</span>
        <ul class="topbar-right-menu-list-add">
          <li @click="tglanguage('cn')"><router-link to="">简体中文</router-link></li>
          <li @click="tglanguage('en')"><router-link to="">English</router-link></li>
        </ul>
      </div>
    </div>
  </el-header>
</template>
<script>
export default {
  data () {
    return {
      isActive: 1,
      language: {
        name: 'app-language',
        value: '简体中文'
      }
    }
  },
  created () {
    if (localStorage.getItem(this.language.name)) {
      this.language = JSON.parse(localStorage.getItem(this.language.name))
    }
  },
  mounted () {
  },
  methods: {
    tglanguage (command) {
      if (command === 'en') {
        this.language.value = 'English'
      } else if (command === 'cn') {
        this.language.value = '简体中文'
      }
      localStorage.setItem(this.language.name, JSON.stringify(this.language))
    }
  }
}
</script>

<style>

</style>
