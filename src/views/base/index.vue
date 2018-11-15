<template>
  <div class="am-g tpl-g">
      <app-header/>
      <app-sider/>
      <app-content/>
  </div>
</template>
<script>
import AppHeader from '@/views/base/header'
import AppSider from '@/views/base/sider'
import AppContent from '@/views/base/main'
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
