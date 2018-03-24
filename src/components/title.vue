<template>
  <div class="title_container">
    <div class="font weight_font">
      <text>24</text>
    </div>
    <div class="font normal_font">
      <text>2018-03</text>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      date: '2018-3-24'
    }
  },
  methods: {

  }
}
</script>

<style>
.title_container{
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding-left: 20rpx;
  /* padding-left: 15rpx; */
}
.weight_font{
  margin-top: 34rpx;
  font-size: 66rpx;
}
.normal_font{
  font-size: 22rpx;
  margin-top: 78rpx;
  margin-left: 20rpx;
}
</style>