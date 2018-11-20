<template>
    <!-- 内容区域 -->
    <div class="tpl-content-wrapper">
      <div class="container-fluid am-cf">
        1111
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
      model: this.current_model
    }
  },
  mounted () {
    console.log(this.model)
  },
  watch: {
    model: function (curVal, oldVal) {
      console.log(curVal)
      console.log(oldVal)
    }
  }
}
</script>
<style>
</style>
