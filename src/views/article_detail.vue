<template>
    <div class="row-content am-cf">
      <div class="row">
            <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
                <div class="widget am-cf">
                    <div class="widget-head am-cf">
                        <div class="widget-title am-fl">文章详情</div>
                        <div class="widget-function am-fr">
                            <a href="javascript:;" class="am-icon-cog"></a>
                        </div>
                    </div>
                    <div class="widget-body am-fr">
                        <form class="am-form tpl-form-border-form tpl-form-border-br">
                            <div class="am-form-group">
                                <label for="user-name" class="am-u-sm-3 am-form-label">标题 <span class="tpl-form-line-small-title">Title</span></label>
                                <div class="am-u-sm-9">
                                    <input type="text" class="tpl-form-input" id="user-name" placeholder="请输入标题文字" v-model="article.articleTitle">
                                    <small>请填写标题文字10-20字左右。</small>
                                </div>
                            </div>
                            <div class="am-form-group am-datepicker-date">
                                <label for="user-email" class="am-u-sm-3 am-form-label">发布时间 <span class="tpl-form-line-small-title">Time</span></label>
                                <div class="am-u-sm-9">
                                    <input type="input" id="articleCreateDate" class="am-form-field tpl-form-no-bg" placeholder="发布时间" data-am-datepicker="" readonly>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label for="user-phone" class="am-u-sm-3 am-form-label">标签 <span class="tpl-form-line-small-title">Tag</span></label>
                                <div class="am-u-sm-9">
                                    <select multiple data-am-selected="{btnSize: 'sm'}" style="display: none;">
                                        <option value="a">-The.CC</option>
                                        <option value="b">夕风色</option>
                                        <option value="o">Orange</option>
                                    </select>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label for="user-intro" class="am-u-sm-3 am-form-label">隐藏文章</label>
                                <div class="am-u-sm-9">
                                    <div class="tpl-switch">
                                        <input type="checkbox" class="ios-switch bigswitch tpl-switch-btn">
                                        <div class="tpl-switch-btn-view">
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label for="user-intro" class="am-u-sm-3 am-form-label">文章内容</label>
                                <div class="am-u-sm-9">
                                    <textarea class="" rows="20" id="user-intro" placeholder="请输入文章内容" v-model="article.articleContent">
                                    </textarea>
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
import $hc from '@/utils/httpclient.js'
export default {
  name: 'article_detail',
  created () {
  },
  mounted () {
    this.getArticleDetail()
  },
  data () {
    return {
      articleId: this.$route.params.id,
      article: {}
    }
  },
  methods: {
    getArticleDetail: function () {
      $hc.get(this, 'http://localhost:8888/api/article/' + this.articleId, function ($obj, result) {
        $obj.article = result.data
        $('#articleCreateDate').datepicker('setValue', $obj.article.articleCreateDate)
      })
    }
  }
}
</script>
