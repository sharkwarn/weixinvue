<template>
  <div class="title_date_list">
    <div class="title_date_list_item" v-for="item in list" :key="item">
      <div class="item_container">
        <img class="item_img" :src="item.img" alt="图片">
        <text class="item_img_text">
          {{item.date}}
        </text>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  },
  methods: {

  },
  mounted: () => {
    console.log(this)
  }
}
</script>

<style scoped>
.title_date_list{
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 130rpx;
}
.title_date_list_item{
  width: 50%;
  height: 340rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item_container{
  width: 310rpx;
  height: 310rpx;
  display: flex;
  flex-direction: column;
}
.item_img{
  width: 100%;
  height: 210px;
}
.item_img_text{
  width: 100%;
  text-align: center;
  font-size: 24rpx;
}
</style>
