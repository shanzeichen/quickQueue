//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540043336568&di=56f66e49e2f3db3c6b43215aaf1e3bb5&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd8f9d72a6059252d21946778399b033b5ab5b9cf.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540043336567&di=e9edead2158ccf9f5200ee12a5ae8460&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Faec379310a55b3199f70cd0e4ea98226cffc173b.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540043336565&di=36acfe9f5057a8c76c27279d52ec1cdb&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F7dd98d1001e93901a8fd5e4376ec54e737d196d4.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540043399121&di=c672ebaf3bec8f424b21b0a5f48030c5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b7294165b73cadcbef77099be3.jpg'

    ]
  },
  //事件处理函数
  createItem: function () {
    wx.navigateTo({
      url: '../create/create'
    })
  },
  joinItem: function() {
    wx.navigateTo({
      url: '../join/join'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
