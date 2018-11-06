<template>
    <div class="row-content am-cf">
      <div class="row">
            <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
                <div class="widget am-cf">
                    <div class="widget-head am-cf">
                        <div class="widget-title am-fl">标签详情</div>
                        <div class="widget-function am-fr">
                            <a href="javascript:;" class="am-icon-cog"></a>
                        </div>
                    </div>
                    <div class="widget-body am-fr">
                        <form class="am-form tpl-form-border-form tpl-form-border-br">
                            <div class="am-form-group">
                                <label for="user-name" class="am-u-sm-3 am-form-label">标签内容 <span class="tpl-form-line-small-title">tagContent</span></label>
                                <div class="am-u-sm-9">
                                    <input type="text" class="tpl-form-input" id="user-name" placeholder="请输入标签内容" v-model="tag.tagContent">
                                    <small>请填写标签内容2-10字左右。</small>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <div class="am-u-sm-9 am-u-sm-push-3">
                                    <button type="button" class="am-btn am-btn-primary tpl-btn-bg-color-success ">提交</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'tag_detail',
  created () {
  },
  mounted () {
  },
  data () {
    return {
      tagId: this.$route.params.id,
      tag: {}
    }
  },
  methods: {
  }
}
</script>
