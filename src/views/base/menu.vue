<template>
    <!-- 菜单 -->
    <am-nav>
      <li :class="isActive == index ? 'am-active':'' "
        v-for="(item, index) in menuList" :key="index" @click="selected(index)">
        <router-link :to="item.route">{{item.name}}</router-link>
      </li>
    </am-nav>
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
      console.log('adsads')
    }
  },
  watch: {
  }
}
</script>
