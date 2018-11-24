<template>
  <el-header>
    <div class="topbar-left app-log topbar-head">
        <router-link to="/" class="topbar-btn">
            测试效能平台
        </router-link>
    </div>
    <div class="topbar-head topbar-left app-top-nav">
        <el-menu mode="horizontal" background-color="#373d41" text-color="#fff" active-text-color="#33cde5">
            <el-menu-item index="1" class="topbar-btn">
              <router-link to="welcome">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2" class="topbar-btn">
              <router-link to="my">我的</router-link>
            </el-menu-item>
            <el-menu-item index="3" class="topbar-btn">
               <router-link to="welcome">项目</router-link>
            </el-menu-item>
        </el-menu>
    </div>
    <div class="topbar-right app-top-right">
      <div class="topbar-head topbar-left app-top-search">
        <span class="topbar-btn"><li class="el-icon-search"></li></span>
      </div>
      <div class="topbar-head topbar-left app-top-add topbar-right-menu-list">
        <span class="topbar-btn"><li class="el-icon-plus"></li></span>
        <ul class="topbar-btn-menu-list">
          <li><router-link to="">add</router-link></li>
          <li>bbbb</li>
          <li>cccc</li>
          <li>dddd</li>
        </ul>
      </div>
      <div class="topbar-head topbar-left app-top-message topbar-right-menu-list">
        <span class="topbar-btn"><li class="el-icon-bell"></li></span>
      </div>
      <div class="topbar-head topbar-left app-top-setting topbar-right-menu-list">
        <span class="topbar-btn"><li class="el-icon-setting"></li></span>
      </div>
      <div class="topbar-head topbar-left app-top-user">
        <span class="topbar-btn">谢*临时</span>
      </div>
      <div class="topbar-left app-language">
        <span class="topbar-btn">
          <el-dropdown  @command="tglanguage"  trigger="click" style="width:80px">
              <span class="el-dropdown-link">{{language.value}}<i class="el-icon-arrow-down el-icon--right" style="float: right; line-height: 50px;"></i></span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="en">English</el-dropdown-item>
                  <el-dropdown-item command="cn">简体中文</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
        </span>
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
