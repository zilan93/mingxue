// list.js
var Data = require('../../utils/product.js');
var category = ['热销榜', '优惠', '最新推出', '米饭', '地道家常菜', '本店特色菜', '开胃凉菜', '盖浇饭', '靓汤', '酒水饮料'];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    barText: ["商品", "评价"],
    currentTab: 0,
    currentTab1: 0,
    proCategory: category,
    proTit: category[0],
    toView: 'cate-0',
    datas: Data.value,
    disabled: true,
    hide:true,
    total:0,
    numbers: []
  },
  changeBar: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  catePro: function (e) {
    this.setData({
      /*dataset里的属性没有大写的情况，即使在html里是大写，但是在这里，依然自动解析成小写。*/
      proTit: e.currentTarget.dataset.protit,
      currentTab1: e.currentTarget.dataset.idx
    });
    var hash = e.currentTarget.dataset.hash;
    this.setData({
      toView: hash
    })
  },
  /*添加商品数量*/
  addNum: function (e) {
    var temporarilyArr = this.data.numbers;
    var id = parseInt(e.currentTarget.id);
    if (temporarilyArr[id] == undefined) {
      temporarilyArr[id] = 0;
    }
    temporarilyArr[id]++;
    this.setData({
      hide:false,
      numbers: temporarilyArr,
      disabled: false
    })
  },
  /*添加商品数量*/
  decreaseNum: function (e) {
    var temporarilyArr = this.data.numbers;
    var id = parseInt(e.currentTarget.id);
    if (temporarilyArr[id] == undefined || temporarilyArr[id]<=0) {
      temporarilyArr[id] = 0;
      return;
    }
    temporarilyArr[id]--;
    this.setData({
      numbers: temporarilyArr,
      disabled: true
    })
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