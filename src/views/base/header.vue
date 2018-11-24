<template>
  <el-header class="top-container">
    <div class="topbar-left">
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
              <router-link to="my" class="topbar-btn">我的</router-link>
            </el-menu-item>
            <el-menu-item index="3">
               <router-link to="welcome" class="topbar-btn">项目</router-link>
            </el-menu-item>
        </el-menu>
    </div>
    <div class="topbar-right top-right-container">
      <div class="topbar-left">
        <span class="topbar-btn top-right-topbar-btn"><li class="el-icon-search"></li></span>
      </div>
      <div class="topbar-left topbar-right-dropdown">
        <span class="topbar-btn top-right-topbar-btn"><li class="el-icon-plus"></li></span>
        <ul class="topbar-right-menu-list">
          <li><router-link to="">add</router-link></li>
          <li>bbbb</li>
          <li>cccc</li>
          <li>dddd</li>
        </ul>
      </div>
      <div class="topbar-left topbar-right-dropdown">
        <span class="topbar-btn top-right-topbar-btn"><li class="el-icon-bell"></li></span>
      </div>
      <div class="topbar-left topbar-right-dropdown">
        <span class="topbar-btn top-right-topbar-btn"><li class="el-icon-setting"></li></span>
      </div>
      <div class="topbar-left">
        <span class="topbar-btn top-right-topbar-btn app-top-user">谢*临时</span>
      </div>
      <div class="topbar-left">
        <span class="topbar-btn top-right-topbar-btn">
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
