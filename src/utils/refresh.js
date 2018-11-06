export default {
  setTimeout: function (delay) {
    const start = new Date().getTime()
    while (new Date().getTime() < start + delay) {
    }
  }
}
