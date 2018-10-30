Page({
  close:function(){
    this.setData({
      hasShow:false,
    })
  },

  showDetails:function(e){
    console.log(e.target.dataset.did)
    var did = e.target.dataset.did;
      wx.navigateTo({
    
        url: '../details/details?did='+did,
      })
  },


  // 加载更多




  /**
   * 页面的初始数据
   */
  data: {
    hasShow:true,
    prolist:[],
    imglist:[],
    navbar: ['全部', '文创', '生活美学', '最新上架'],
    currentTab: 0,
    newlist:[],
    pageIndex: 0,
    pageSize: 8,
    hasMore: true,
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:3000/product',
      method:"GET",
      success:(res)=>{
        console.log(res)
        this.setData({
          imglist: res.data.crousel,        
        })
      }
    }),
    wx.request({
      url: 'http://127.0.0.1:3000/product/prolist',
      type:"get",
      success:(res)=>{
        console.log(res.data)
         this.setData({
           prolist:res.data,
           
         })
       
      }
    });
    this.loadMore()
   
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
    
    this.setData({
      pageIndex: 0,
      newList: []
      
    });
    //2.加载更多
      this.loadMore();
    //3.停止下拉动作多次执行
    wx.stopPullDownRefresh()
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  goDetails:function(){
    wx.navigateTo({ 
      url: '../details/details',
    })
  },

  loadMore: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/product/getmore',
      method: "get",
      data: {
        pno: ++this.data.pageIndex,
        pageSize: this.data.pageSize
      },
      success: (res) => {
        console.log(res)
        var pageCount = res.data.pageCount;
        if (this.data.pageIndex >= pageCount) {
          this.setData({
            hasMore: false,
            pageIndex:5
          })
        }
        var rows = this.data.newlist.concat(res.data.data);
        this.setData({
          newlist: rows
        })

      }
    })

    console.log(this.data.pageIndex)
  }

})