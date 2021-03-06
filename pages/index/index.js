// index.js
// 获取应用实例
const app = getApp()

Page({
  // onShareAppMessage() {
  //   return {
  //     title: 'swiper',
  //     path: 'page/component/pages/swiper/swiper'
  //   }
  // },
  data: {
    // motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    
  //   background: ['pages/index/img/图1.jpg', 'pages/index/img/图2.jpg', 'pages/index/img/图3.jpg'],
  //   // indicatorDots: true,
  //   // vertical: false,
  //   // autoplay: false,
  //   // interval: 2000,
  //   // duration: 500,
  //   circular: true,
  //   indicatorDots: true, 
  //   indicatorcolor: "#000",
  //   vertical: false,
  //   autoplay: true,
  //   interval: 2500,  
  //   duration: 100,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  suo:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  btnOneAction:function(){
    wx.navigateBack({
      url: '../message/message',
    })
    
  },
  btnTwoAction:function(){
    wx.navigateBack({
      url: '../message/message',
    })
  },
  btnThreeAction:function(){
    wx.navigateBack({
      url: '../message/message',
    })
  },
  btnFourAction:function(){
    wx.navigateBack({
      url: '../message/message',
    })
  },
  btnFiveAction:function(){
    wx.navigateBack({
      url: '../message/message',
    })
  },
  btnSixAction:function(){
    wx.navigateBack({
      url: '../message/message',
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
    
})