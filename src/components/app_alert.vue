<template>
    <div>
      <!-- load 窗口-->
      <div class="am-modal am-modal-loading am-modal-no-btn" tabindex="-1" id="my-modal-loading">
        <div class="am-modal-dialog">
          <div class="am-modal-hd">{{ loadHint }}</div>
          <div class="am-modal-bd">
            <span class="am-icon-spinner am-icon-spin"></span>
          </div>
        </div>
      </div>
      <!-- 无head 提示窗口-->
      <div class="am-modal am-modal-alert" tabindex="-1" id="alert-not-head-message">
        <div class="am-modal-dialog">
          <div class="am-modal-bd">
            {{ message }}
          </div>
          <div class="am-modal-footer">
            <span class="am-modal-btn">确定</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import refresh from '@/utils/refresh.js'
export default {
  data () {
    return {
      loadHint: '保存中',
      message: '保存成功'
    }
  },
  methods: {
    load: function (action, loadHint) {
      const $modal = $('#my-modal-loading')
      if (action === 'open') {
        this.loadHint = loadHint
        $modal.modal('open')
      } else if (action === 'close') {
        refresh.setTimeout(1500)
        $modal.modal('close')
      }
    },
    alert: function (message, closeCallBack) {
      const $modal = $('#alert-not-head-message')
      $modal.on('closed.modal.amui', function () {
        closeCallBack()
      })
      this.message = message
      $modal.modal('open')
    }
  }
}
</script>
