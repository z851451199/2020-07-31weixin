// pages/modify/modify.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    trades:'',
    tradesDeatil:'',    
    tdID:'',//存放（选行业页面）被关注行业ID
    tdlID:'',//用来存放（选行业页面）被关注家居详情ID
    mineBrand:[],
    hotBrand:[
      {value: '', name: '淘小铺'},
      {value: '', name: '艾多美'},
      {value: '', name: '罗麦'},
      {value: '', name: 'iEnglish'},
      {value: '', name: '如新'},
      {value: '', name: '康宝莱'},
      {value: '', name: '三生'},
      {value: '', name: '联联周边游'}
    ]
  },
  // 添加选中品牌
  choseModify:function(e){
    var that = this
    var Index = e.currentTarget.dataset.index;
    var mineBrands = this.data.mineBrand;
    var hotBrands = this.data.hotBrand;
    var a = this.data.tdlID;
    console.log(a)
    if(mineBrands.length >=5){
      console.log('最多选5个')
    }else{
      if(mineBrands != ''){
        mineBrands.push(hotBrands[Index].name)
      }else{
        mineBrands.splice(0,1);
        mineBrands.push(hotBrands[Index].name)
      }
    }
    let unique= [...new Set(mineBrands)];
    that.setData({
      mineBrand:unique
    })
  },
// 删除选中品牌
  removeChoice:function(e){
    var that = this
    var Index = e.currentTarget.dataset.index;
    var mineBrands = this.data.mineBrand;
    mineBrands.splice(Index,1)
    that.setData({
      mineBrand:mineBrands
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newMbd = options.mineBrand
    if(newMbd){
      newMbd = options.mineBrand.split(",")
    }else{
      newMbd = []
    }
    this.setData({
      mineBrand:newMbd,
      tdID:options.tdID,
      tdlID:options.tdlID
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