<template>
  <am-topbar :inverse="true">
    <am-topbar-brand><a href="#">Amaze UI</a></am-topbar-brand>
    <am-topbar-toggle></am-topbar-toggle>
    <am-topbar-collapse>
      <am-nav :pill="true" :topbar="true">
        <am-nav-item :active="true" :to="'/'">home</am-nav-item>
        <am-nav-item :to="'/list'">list</am-nav-item>
        <am-nav-item :to="'/article'">article</am-nav-item>
      </am-nav>
      <am-topbar-form>
        <am-form-group size="sm">
          <am-input placement="请输入要查询的内容"></am-input>
        </am-form-group>
      </am-topbar-form>
      <am-topbar-slot>
        <am-button color="secondary" custom-class="am-topbar-btn">注册</am-button>
      </am-topbar-slot>
      <am-topbar-slot>
        <am-button color="primary" custom-class="am-topbar-btn">登录</am-button>
      </am-topbar-slot>
    </am-topbar-collapse>
  </am-topbar>
</template>
<script>
export default {
  mounted () {
  }
}
</script>

<style>

</style>
