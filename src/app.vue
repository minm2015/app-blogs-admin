<template>
  <div class="am-g tpl-g">
      <app-header/>
      <app-sider/>
      <app-main/>
  </div>
</template>
<script>
import AppHeader from '@/views/header'
import AppSider from '@/views/sider'
import AppMain from '@/views/main'
export default {
  name: 'app',
  components: {
    AppHeader, AppSider, AppMain
  },
  created () {
    this.$router.replace('/index')
  }
}
</script>
<style>
</style>
