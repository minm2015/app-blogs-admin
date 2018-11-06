<template>
    <div class="row-content am-cf">
        <div class="row">
            <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
                <div class="widget am-cf">
                    <div class="widget-head am-cf">
                        <div class="widget-title  am-cf">文章列表</div>
                    </div>
                    <div class="widget-body  am-fr">

                        <div class="am-u-sm-12 am-u-md-6 am-u-lg-6">
                            <div class="am-form-group">
                                <div class="am-btn-toolbar">
                                    <div class="am-btn-group am-btn-group-xs">
                                        <button type="button" class="am-btn am-btn-default am-btn-success"><span class="am-icon-plus"></span> 新增</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="am-u-sm-12 am-u-md-6 am-u-lg-3">
                            <div class="am-form-group tpl-table-list-select">
                                <select  data-am-selected="{btnSize: 'sm'}">
                                    <option value="0">所有类别</option>
                                    <option  v-for="item in categoryList" :value="item.categoryId" :key="item.categoryId">
                                        {{ item.categoryText }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="am-u-sm-12 am-u-md-12 am-u-lg-3">
                            <div class="am-input-group am-input-group-sm tpl-form-border-form cl-p">
                                <input type="text" class="am-form-field ">
                                <span class="am-input-group-btn">
                                    <button class="am-btn  am-btn-default am-btn-success tpl-table-list-field am-icon-search" type="button"></button>
                                </span>
                            </div>
                        </div>
                        <div class="am-u-sm-12">
                            <table width="100%" class="am-table am-table-compact am-table-striped tpl-table-black " id="example-r">
                                <thead>
                                    <tr>
                                        <th>文章标题</th>
                                        <th>时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in articleList" :key="item.articleId">
                                        <td>{{ item.articleTitle }} </td>
                                        <td>{{ item.articleCreateDate }}</td>
                                        <td>
                                            <div class="tpl-table-black-operation">
                                                <a :href="'/article/' + item.articleId">
                                                    <i class="am-icon-pencil"></i> 编辑
                                                </a>
                                                <a href="javascript:;" class="tpl-table-black-operation-del">
                                                    <i class="am-icon-trash"></i> 删除
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- more data -->
                                </tbody>
                            </table>
                        </div>
                        <div class="am-u-lg-12 am-cf">
                            <div class="am-fr">
                                <ul class="am-pagination tpl-pagination">
                                    <li @click="goTo('pre', null)"><a href="javascript:void(0);">«</a></li>
                                    <li v-for="index in pages" :key="index"  v-bind:class="index == pageNum ? 'am-active' : null"  @click="goTo(null, index)">
                                        <a href="javascript:void(0);">{{ index }}</a>
                                    </li>
                                    <li @click="goTo('next', null)"><a href="javascript:void(0);">»</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $hc from '@/utils/httpclient.js'
export default {
  name: 'articles',
  data () {
    return {
      'articleList': [],
      'pages': 0,
      'pageNum': 1,
      'pageSize': 2,
      'categoryList': [
        {'categoryId': 1, 'categoryText': '前端'},
        {'categoryId': 2, 'categoryText': '后端'},
        {'categoryId': 3, 'categoryText': '测试类'}
      ]
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    goTo: function (action, index) {
      if (action === 'pre' || action === 'next') {
        if (action === 'pre' && this.pageNum !== 1) {
          this.pageNum = this.pageNum - 1
        }
        if (action === 'next' && this.pageNum !== this.pages) {
          this.pageNum = this.pageNum + 1
        }
      } else {
        this.pageNum = index
      }
      this.getArticleList()
    },
    getArticleList: function () {
      $hc.get(this, 'http://localhost:8888/api/article?pageNum=' + this.pageNum + '&pageSize=' + this.pageSize, function ($obj, result) {
        $obj.articleList = result.data.data
        $obj.pages = result.data.pages
      })
    }
  }
}
</script>
