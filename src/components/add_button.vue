<template>
  <button type="button" class="am-btn am-btn-default am-btn-success" @click="to(location)"><span class="am-icon-plus"></span>
    新增
  </button>
</template>
<script>
export default {
  props: ['location'],
  methods: {
    to: function (location) {
      window.location.href = location
    }
  }
}
</script>
