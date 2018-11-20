<template>
    <!-- 内容区域 -->
    <div class="tpl-content-wrapper">
      <div class="container-fluid am-cf">
      </div>
      <div class="row-content am-cf">
        222
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    model () {
      return this.$store.state.model
    }
  },
  watch: {
    model: function (curVal, oldVal) {
      console.log(curVal)
    }
  }
}
</script>
<style>
</style>
