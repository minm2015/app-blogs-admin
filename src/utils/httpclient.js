const domain = 'http://localhost:8888/api'
export default {
  /**
   * 封装发送get请求
   * @param {*} $this 
   * @param {请求地址} url 
   * @param {回调函数} callBack 
   */
  get: function ($this, url, callBack) {
    $this.$http.get(domain + url).then(response => {
      console.log(response.data)
      callBack($this, response.data)
    }, response => {
      console.log('error')
    })
  },
  /**
   * 封装发送post请求
   * @param {*} $this 
   * @param {请求地址} url 
   * @param {请求参数} body 
   * @param {回调函数} callBack 
   */
  post: function ($this, url, body, callBack) {
    $this.$http.post(domain + url, JSON.stringify(body)).then(response => {
      callBack($this, response.data)
    }, response => {
      console.log('error')
    })
  }
}
