<template>
  <div class="am-g tpl-g">
      <app-header/>
      <app-sider/>
      <app-content/>
  </div>
</template>
<script>
import AppHeader from '@/views/header'
import AppSider from '@/views/sider'
import AppContent from '@/views/main'
export default {
  name: 'index',
  components: {
    AppHeader, AppSider, AppContent
  },
  mounted () {
  }
}
</script>
<style>
</style>
