// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qr_src:"../../images/home.png",
    qr_hidden: true,
    item: {
      name:'initial name',
      kind: true,
      limit: 200,
      detail: ''
    }
  },
  confirmItem: function(e){
    var that = this;
    that.setData({
      item: e.detail.value
    })
    wx.request({
      url: 'http://192.168.191.2:8000/quickQueue/create',
      data: this.data.item,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header 默认是application/json
      success: function (res) {
        wx.navigateTo({
          url: 'create_success?item_id='+res.data['ItemID'],
        })
        // 操作json数据
        // that.setData({
        //   qr_src: 'http://192.168.191.2:8000/static/images/qr/'+res.data['ItemID']+'.png',
        //   qr_hidden: false
        // })
        // console.log(res);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    console.log(e.detail)
    // let confirmItem = '\n活动名称：' + this.data.item.name
    //                 + '\n活动类型：' + (this.data.item.kind?'临时':'长期')
    //                 + '\n限定排号：' + this.data.item.limit
    //                 + '\n活动介绍：' + this.data.item.detail;
    // let itemTemp = this.data.item;
    // wx.showModal({
    //   title: '活动详情',
    //   content: confirmItem,
    //   success (res){
    //     if (res.confirm){
    //       let item_no = Math.floor(100000+Math.random()*900000);
    //       wx.setStorageSync(item_no + '', itemTemp);
    //       wx.showToast({
    //         title: '创建成功',
    //         icon: 'success'
    //       })
    //     }else if(res.cancel){
    //       wx.showToast({
    //         title: '取消创建活动',
    //       })
    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})