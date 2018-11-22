<template>
  <el-container>
    <app-header/>
    <router-view/>
  </el-container>
</template>
<script>
import appHeader from '@/views/base/header'
export default {
  name: 'index',
  components: {appHeader}
}
</script>

<style>

</style>
