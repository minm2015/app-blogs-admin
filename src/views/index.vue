<template>
  <div class="am-g tpl-g">
      <app-header/>
      <app-sider/>
      <div class="tpl-content-wrapper">
      </div>
  </div>
</template>
<script>
import AppHeader from '@/views/header'
import AppSider from '@/views/sider'
export default {
  name: 'index',
  components: {
    AppHeader, AppSider
  },
  created () {
  }
}
</script>
<style>
</style>
