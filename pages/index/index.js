//index.js
//获取应用实例
var app = getApp();
var initData = "茗雪外卖只做低价味美、干净卫生的外卖"
Page({
  data: {
    tagline: initData
  },
  //事件处理函数
  navbarTop: function(e) {
    this.setData({
      currentTab:e.currentTarget.dataset.idx
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
