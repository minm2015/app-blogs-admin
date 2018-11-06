<template>
    <div class="row-content am-cf">
        <div class="row">
            <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
                <div class="widget am-cf">
                    <div class="widget-head am-cf">
                        <div class="widget-title  am-cf">标签列表</div>
                    </div>
                    <div class="widget-body  am-fr">
                        <div class="am-u-sm-12 am-u-md-6 am-u-lg-6">
                            <div class="am-form-group">
                                <div class="am-btn-toolbar">
                                    <div class="am-btn-group am-btn-group-xs">
                                        <addButton location='/tag/add'></addButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="am-u-sm-12">
                            <table width="100%" class="am-table am-table-compact am-table-striped tpl-table-black " id="example-r">
                                <thead>
                                    <tr>
                                        <th>标签</th>
                                        <th>创建时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in tagList" :key="item.tagId">
                                        <td>{{ item.tagContent }} </td>
                                        <td>{{ item.tagCreateDate }}</td>
                                        <td>
                                            <div class="tpl-table-black-operation">
                                                <a :href="'/tag/' + item.tagId">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import addButton from '@/components/add_button'
import $hc from '@/utils/httpclient.js'
import api from '@/commons/api.js'
export default {
  name: 'tag',
  data () {
    return {
      'tagList': [
      ]
    }
  },
  created () {
    this.getTagList()
  },
  methods: {
    getTagList: function () {
      $hc.get(this, api.tag, function ($this, result) {
        $this.tagList = result.data
      })
    }
  },
  components: {
    addButton
  }
}
</script>
