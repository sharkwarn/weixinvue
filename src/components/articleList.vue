<template>
  <div class="article_container">
    <div class="article_list_item" v-for="item in list" :key="item">
      <div class="article_common article_title" v-if="item.title ? true : false">
        {{item.title}}
      </div>
      <div class="article_common article_author" v-if="item.author ? true : false">
        {{item.author}}
      </div>
      <div class="article_common article_img" v-if="item.img ? true : false">
        <img class="article_img_detail" :src="item.img" />
      </div>
      <div class="article_common picture_author" v-if="item.pictureAuthor ? true : false">
        {{item.pictureAuthor}}
      </div>
      <div class="article_common article_detail" v-if="item.detail ? true : false">
        {{item.detail}}
      </div>
      <div class="article_common article_origin" v-if="item.origin ? true : false">
        {{item.origin}}
      </div>
      <div class="article_common article_operate">
        <img src="https://github.com/sharkwarn/sharkwarn.github.io/blob/master/icon/find.png?raw=true" />
        <img src="https://github.com/sharkwarn/sharkwarn.github.io/blob/master/icon/bookmark.png?raw=true" />
        <img src="https://github.com/sharkwarn/sharkwarn.github.io/blob/master/icon/bi.png?raw=true" />
        <img src="https://github.com/sharkwarn/sharkwarn.github.io/blob/master/icon/share.png?raw=true" />
        <img src="https://github.com/sharkwarn/sharkwarn.github.io/blob/master/icon/love.png?raw=true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style scoped>
.article_container{
  width: 100%;
  height: auto;
  overflow: hidden;
  background: #eaeaea;
}
.article_list_item{
  width: 100%;
  height: auto;
  overflow: hidden;
  background: #fff;
  margin-bottom: 15rpx;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
}
.article_list_item:first-child{
  padding: 0 20rpx;
  box-sizing: border-box;
}
.article_list_item:nth-child(n+2){
  padding: 20rpx;
  box-sizing: border-box;
}
.article_common{
  width: 100%;
  height: auto;
  overflow: hidden;
  line-height: 40rpx;
  font-size: 12px;
  margin-bottom: 24rpx;
}
.article_title{
  font-size: 32rpx;
}
.article_img_detail{
  width: 100%;
}
.article_author{
  font-size: 26rpx;
}
.picture_author{
  text-align: center;
}
.article_origin{
  text-align: center;
}
.article_operate{

}
.article_operate img{
  width: 32rpx;
  height: 32rpx;
  float: right;
  margin-right: 60rpx;
}
.article_operate img:nth-child(2){
  margin-right: 0rpx;
}
.article_operate img:first-child{
  float: left;
}
</style>
