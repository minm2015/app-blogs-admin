<template>
    <!-- 菜单 -->
    <ul class="sidebar-nav">
        <li v-for="(item, index) in menuList" :key="index" class="sidebar-nav-link">
            <a href="javascript:void(0);" :class="{active: isActive == index}" @click="activeMenu(index, item.model)">
              <i class="sidebar-nav-link-logo" :class="item.class"></i>
               {{item.name}}
            </a>
        </li>
    </ul>
</template>
<script>
export default {
  data () {
    return {
      isActive: 0,
      menuList: [
        {'name': '首页', 'class': 'am-icon-home', 'model': 'home'},
        {'name': '测试', 'class': 'am-icon-eyedropper', 'model': 'test'}
      ]
    }
  },
  methods: {
    activeMenu: function (index, model) {
      this.isActive = index
      this.$store.state.model = model
    }
  },
  watch: {
  }
}
</script>
