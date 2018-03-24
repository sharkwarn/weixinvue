// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    titleImgList: [
      {
        img: 'http://image.wufazhuce.com/Fn-y3eX_UU-I1sZfuIq8eP4bINJT',
        date: '2018-03-24'
      },
      {
        img: 'http://image.wufazhuce.com/Fmv1ErNY1K7mG8nyZS9448xxC89m',
        date: '2018-03-23'
      },
      {
        img: 'http://image.wufazhuce.com/FoF4xUy2BWIom2cfgWunROcCAODO',
        date: '2018-03-22'
      },
      {
        img: 'http://image.wufazhuce.com/Funo2Mmn5lhgR1dh_n6U3jrcAROO',
        date: '2018-03-21'
      },
      {
        img: 'http://image.wufazhuce.com/FrLLzYKZKE0dowKP0W6MHvp6vqhW',
        date: '2018-03-20'
      },
      {
        img: 'http://image.wufazhuce.com/Fpn2_QbCyGZjdwQFSjyRuP0cygp-',
        date: '2018-03-19'
      },
      {
        img: 'http://image.wufazhuce.com/Fn-y3eX_UU-I1sZfuIq8eP4bINJT',
        date: '2018-03-18'
      },
      {
        img: 'http://image.wufazhuce.com/Fmv1ErNY1K7mG8nyZS9448xxC89m',
        date: '2018-03-17'
      },
      {
        img: 'http://image.wufazhuce.com/FoF4xUy2BWIom2cfgWunROcCAODO',
        date: '2018-03-16'
      },
      {
        img: 'http://image.wufazhuce.com/Funo2Mmn5lhgR1dh_n6U3jrcAROO',
        date: '2018-03-15'
      },
      {
        img: 'http://image.wufazhuce.com/FrLLzYKZKE0dowKP0W6MHvp6vqhW',
        date: '2018-03-14'
      },
      {
        img: 'http://image.wufazhuce.com/Fpn2_QbCyGZjdwQFSjyRuP0cygp-',
        date: '2018-03-13'
      }
    ],
    articleList: [
      {
        img: 'http://image.wufazhuce.com/Fn-y3eX_UU-I1sZfuIq8eP4bINJT',
        origin: '《请回答1988》',
        pictureAuthor: '摄影|Oneice孙一冰',
        detail: '人真正变得强大，不是因为守护者自尊心，而是抛开自尊心的时候。'
      },
      {
        title: '鹿先生',
        author: '文 / 马鹿',
        img: 'http://image.wufazhuce.com/Fpn2_QbCyGZjdwQFSjyRuP0cygp-',
        detail: '好人还是坏人我随随便便指哪一个，其实你也说不上来具体哪个是哪个吧。'
      },
      {
        title: '大梦江湖',
        author: '文 / 刘音希等三位',
        img: 'http://image.wufazhuce.com/Fmv1ErNY1K7mG8nyZS9448xxC89m',
        detail: '被师傅不止一次提起过的“以后”，还有她从来没提过的“从前”，以及稍微有了些不同的“现在”。'
      },
      {
        title: '不留 ',
        author: '文 / 环玥',
        img: 'http://image.wufazhuce.com/FoF4xUy2BWIom2cfgWunROcCAODO',
        detail: '阿宝发了短信给小贝，没得到回音，她也不多事，挤进人群买电影票，过自己的周末'
      }, {
        img: 'http://image.wufazhuce.com/Fn-y3eX_UU-I1sZfuIq8eP4bINJT',
        origin: '《请回答1988》',
        pictureAuthor: '摄影|Oneice孙一冰',
        detail: '人真正变得强大，不是因为守护者自尊心，而是抛开自尊心的时候。'
      },
      {
        title: '鹿先生',
        author: '文 / 马鹿',
        img: 'http://image.wufazhuce.com/Fpn2_QbCyGZjdwQFSjyRuP0cygp-',
        detail: '好人还是坏人我随随便便指哪一个，其实你也说不上来具体哪个是哪个吧。'
      },
      {
        title: '大梦江湖',
        author: '文 / 刘音希等三位',
        img: 'http://image.wufazhuce.com/Fmv1ErNY1K7mG8nyZS9448xxC89m',
        detail: '被师傅不止一次提起过的“以后”，还有她从来没提过的“从前”，以及稍微有了些不同的“现在”。'
      },
      {
        title: '不留 ',
        author: '文 / 环玥',
        img: 'http://image.wufazhuce.com/FoF4xUy2BWIom2cfgWunROcCAODO',
        detail: '阿宝发了短信给小贝，没得到回音，她也不多事，挤进人群买电影票，过自己的周末'
      }, {
        img: 'http://image.wufazhuce.com/Fn-y3eX_UU-I1sZfuIq8eP4bINJT',
        origin: '《请回答1988》',
        pictureAuthor: '摄影|Oneice孙一冰',
        detail: '人真正变得强大，不是因为守护者自尊心，而是抛开自尊心的时候。'
      },
      {
        title: '鹿先生',
        author: '文 / 马鹿',
        img: 'http://image.wufazhuce.com/Fpn2_QbCyGZjdwQFSjyRuP0cygp-',
        detail: '好人还是坏人我随随便便指哪一个，其实你也说不上来具体哪个是哪个吧。'
      },
      {
        title: '大梦江湖',
        author: '文 / 刘音希等三位',
        img: 'http://image.wufazhuce.com/Fmv1ErNY1K7mG8nyZS9448xxC89m',
        detail: '被师傅不止一次提起过的“以后”，还有她从来没提过的“从前”，以及稍微有了些不同的“现在”。'
      },
      {
        title: '不留 ',
        author: '文 / 环玥',
        img: 'http://image.wufazhuce.com/FoF4xUy2BWIom2cfgWunROcCAODO',
        detail: '阿宝发了短信给小贝，没得到回音，她也不多事，挤进人群买电影票，过自己的周末'
      }, {
        img: 'http://image.wufazhuce.com/Fn-y3eX_UU-I1sZfuIq8eP4bINJT',
        origin: '《请回答1988》',
        pictureAuthor: '摄影|Oneice孙一冰',
        detail: '人真正变得强大，不是因为守护者自尊心，而是抛开自尊心的时候。'
      },
      {
        title: '鹿先生',
        author: '文 / 马鹿',
        img: 'http://image.wufazhuce.com/Fpn2_QbCyGZjdwQFSjyRuP0cygp-',
        detail: '好人还是坏人我随随便便指哪一个，其实你也说不上来具体哪个是哪个吧。'
      },
      {
        title: '大梦江湖',
        author: '文 / 刘音希等三位',
        img: 'http://image.wufazhuce.com/Fmv1ErNY1K7mG8nyZS9448xxC89m',
        detail: '被师傅不止一次提起过的“以后”，还有她从来没提过的“从前”，以及稍微有了些不同的“现在”。'
      },
      {
        title: '不留 ',
        author: '文 / 环玥',
        img: 'http://image.wufazhuce.com/FoF4xUy2BWIom2cfgWunROcCAODO',
        detail: '阿宝发了短信给小贝，没得到回音，她也不多事，挤进人群买电影票，过自己的周末'
      }, {
        img: 'http://image.wufazhuce.com/Fn-y3eX_UU-I1sZfuIq8eP4bINJT',
        origin: '《请回答1988》',
        pictureAuthor: '摄影|Oneice孙一冰',
        detail: '人真正变得强大，不是因为守护者自尊心，而是抛开自尊心的时候。'
      },
      {
        title: '鹿先生',
        author: '文 / 马鹿',
        img: 'http://image.wufazhuce.com/Fpn2_QbCyGZjdwQFSjyRuP0cygp-',
        detail: '好人还是坏人我随随便便指哪一个，其实你也说不上来具体哪个是哪个吧。'
      },
      {
        title: '大梦江湖',
        author: '文 / 刘音希等三位',
        img: 'http://image.wufazhuce.com/Fmv1ErNY1K7mG8nyZS9448xxC89m',
        detail: '被师傅不止一次提起过的“以后”，还有她从来没提过的“从前”，以及稍微有了些不同的“现在”。'
      },
      {
        title: '不留 ',
        author: '文 / 环玥',
        img: 'http://image.wufazhuce.com/FoF4xUy2BWIom2cfgWunROcCAODO',
        detail: '阿宝发了短信给小贝，没得到回音，她也不多事，挤进人群买电影票，过自己的周末'
      }
    ]
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  }
})

export default store
