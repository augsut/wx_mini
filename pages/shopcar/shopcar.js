// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], //数据 
    iscart: false,
    hidden: null,
    isAllSelect: false,
    totalMoney: 0,
    num:0,
    total:0

  },
  // 商品数量+1
 addplus:function(){
   console.log(this.data.num)
  
  var n =  this.data.num+1;
   var t = parseInt(this.data.carts.pro_price * n)
  this.setData({
    num:n,
    total:t
  })
  console.log()
 },
//  商品数量-1
  del:function(){
    var n = this.data.num-1;
    var t = parseInt(this.data.carts.pro_price*n)
    if(n<=0) {n=0; t=0;}
    this.setData({
      num: n,
      total:t
    })
  },

//结算功能
gobuy:function(){
  wx.showToast({
    title: '该商城暂未开放,敬请期待',
    duration:3500,
    icon:"loading"
  })
},

  // switchSelect: function (e) {
  //   // 获取item项的id，和数组的下标值  
  //   var Allprice = 0, i = 0;
  //   let id = e.target.dataset.id,
    
  //     index = parseInt(e.target.dataset.index);
  //   this.data.carts[index].isSelect = !this.data.carts[index].isSelect;    //价钱统计
  //   if (this.data.carts[index].isSelect) {
  //     this.data.totalMoney = this.data.totalMoney + (this.data.carts[index].price * this.data.carts[index].count);
  //   } else {
  //     this.data.totalMoney = this.data.totalMoney - (this.data.carts[index].price * this.data.carts[index].count);
  //   }
  //   //是否全选判断
  //   for (i = 0; i < this.data.carts.length; i++) {
  //     Allprice = Allprice + (this.data.carts[index].price * this.data.carts[index].count);
  //   }
  //   if (Allprice == this.data.totalMoney) {
  //     this.data.isAllSelect = true;
  //   } else {
  //     this.data.isAllSelect = false;
  //   }
  //   this.setData({
  //     carts: this.data.carts,
  //     totalMoney: this.data.totalMoney,
  //     isAllSelect: this.data.isAllSelect,
  //   })
  // },  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      wx.getStorage({    //获取本地缓存
        key: "carts",
       
        success: (res)=>{
          console.log(res)
      this.setData({
        carts:res.data
      })
      },
    })
  


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