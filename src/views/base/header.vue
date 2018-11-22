<template>
  <el-header>
    <div class="topbar-left app-log">
        <router-link to="/">
            测试效能平台
        </router-link>
    </div>
    <div class="topbar-left">
        <el-menu mode="horizontal" background-color="#545c64" text-color="#fff"
        active-text-color="#33cde5" class="app-el-menu-top">
            <el-menu-item index="1" class="app-el-menu-item-top">首页</el-menu-item>
            <el-menu-item index="2" class="app-el-menu-item-top">我的</el-menu-item>
            <el-menu-item index="3" class="app-el-menu-item-top">项目</el-menu-item>
        </el-menu>
    </div>
    <div class="topbar-right app-language">
        <el-dropdown size="small" @command="tglanguage">
            <span class="el-dropdown-link">
                {{language.value}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="en">English</el-dropdown-item>
                <el-dropdown-item command="cn">简体中文</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
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
      this.$router.go(0)
    }
  }
}
</script>

<style>

</style>
