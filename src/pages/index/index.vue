<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div @click="titleHandle('title', $event)" class="title">
      <title></title>
    </div>
    <div class="main">
      <articleList :list="getArticleList"></articleList>
    </div>
    <div class="footer">
      <div class="footer_btn">One</div>
      <div class="footer_btn">All</div>
      <div class="footer_btn">Me</div>
    </div>
    <div class="title_slide" :style="getTitleStyle">
      <slideTitle :list="titleImgList"></slideTitle>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import title from '@/components/title'
import slideTitle from '../../components/slideTitle'
import articleList from '@/components/articleList'

import store from './store'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      showTitle: false
    }
  },

  components: {
    card,
    title,
    slideTitle,
    articleList
  },
  computed: {
    getTitleStyle () {
      return this.showTitle ? `transform: translateY(0)` : `transform: translateY(100%)`
    },
    getArticleList () {
      return store.state.articleList
    },
    titleImgList () {
      return store.state.titleImgList
    }
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // console.log('clickHandle:', msg, ev)
    },
    titleHandle (msg, ev) {
      this.showTitle = !this.showTitle
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.title{
  width: 100%;
  height: 130rpx;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 0 8rpx #000;
}

.title_slide{
  width: 100%;
  height: 100%;
  overflow:scroll;
  position: absolute;
  background: #fff;
  top: 130rpx;
  transition: 0.5s;
}

.main{
  width: 100%;
  height: 100px;
  flex: 1;
  overflow:scroll;
  /* padding-top: 60px;
  padding-bottom: 80px;
  position: fixed;
  top: 0;
  left: 0; */
}
.footer{
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  /* position: fixed;
  bottom: 0;
  left: 0; */
}
.footer_btn{
  color: #999;
  font-size: 30rpx;
  padding: 0 20rpx;
}
</style>
