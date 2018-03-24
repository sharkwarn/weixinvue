<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
page{
  width: 100%;
  height: 100%;
}
/* .container {
  width: 100%;
  height: 100%;
  padding: 0 0;
  box-sizing: border-box;
} */
/* this rule will be remove */
* {
  transition: width 2s;
  box-sizing: border-box;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
