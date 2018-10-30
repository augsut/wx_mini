// pages/details/details.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['商品', '详情', '评价'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })

  },
  carts:[],
  prointr:[],
  add:function(){
    var goods= this.data.prointr[0];

    var count = goods.count;
    var title = goods.pro_name;
    this.setData({
      carts:goods
    })
    if (title.length > 13) {
      goods.title = title.substring(0, 13) + '...';
    }   

  // 购物车功能

  //将商品数据缓存
    wx.setStorage({
      key: 'carts',
      data: goods,
     
     
    })
    var arr = wx.getStorage({
      key: 'carts',
     
      success: function(res) {
        console.log(res)
        
      },
    })


    //关闭窗口
    wx.showToast({
      title: '加入购物车成功！',
      icon: 'success',
      duration: 2000
    });
    console.log(this.data.carts);
  
  },
// 跳转至购物车
  gocar:function(){
      wx.reLaunch({
  
        url: '../shopcar/shopcar',
      })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

        console.log(options)
        wx.request({
          url: 'http://127.0.0.1:3000/product/details?did='+options.did,
          type:"get",
          success:(res)=>{
            this.setData({
              prointr:res.data
            })
                console.log(res.data)
          }
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