// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_no: ''
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

  },
  updateItemNo: function(e){
    this.setData({
      item_no: e.detail.value
    })
  },
  startQueue: function(e){
    let item = wx.getStorageSync(this.data.item_no);
    console.log(item);
    if (item){
      wx.showToast({
        title: '排号成功',
        icon: 'success'
      })
    }else{
      wx.showToast({
        title: '排号失败',
        icon: 'none'
      })
    }
    
  },
  scanToJoin: function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})