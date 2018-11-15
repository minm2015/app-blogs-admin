<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'app',
  components: {
  },
  created () {
    this.$router.replace('/index')
  }
}
</script>
<style>
</style>
