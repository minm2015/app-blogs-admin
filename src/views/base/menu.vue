<template>
    <!-- 菜单 -->
    <ul class="sidebar-nav">
        <li v-for="(item, index) in menuList" :key="index" class="sidebar-nav-link"  @click="selected(index)">
            <router-link :to="item.route" :class="{active: isActive == index}">
              <i class="sidebar-nav-link-logo" :class="item.class"></i>
               {{item.name}}
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
  mounted () {
  },
  data () {
    return {
      isActive: 0,
      menuList: [
        {name: '首页', class: 'am-icon-home', route: 'home'},
        {name: '测试', class: 'am-icon-eyedropper', route: 'test'}
      ]
    }
  },
  methods: {
    selected: function (index) {
      this.isActive = index
    }
  },
  watch: {
  }
}
</script>
