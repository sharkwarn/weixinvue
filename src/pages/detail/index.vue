<template>
  <div class="detail_container">
    <rich-text class="detail_container_rich" :nodes="getRichText"></rich-text>
  </div>
</template>

<script>
import store from './store'

export default {
  data () {
    return {
      logs: []
    }
  },
  computed: {
    // store.state.richText
    getRichText () {
      return store.state.richText
    }
  },
  created () {
  }
}
</script>

<style>
.detail_container{
  width: 100%;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20rpx;
  
}
.detail_container_rich{
  font-size: 26rpx;
  color: #888;
  line-height: 60rpx;
}
</style>
