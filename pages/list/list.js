//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabIndex: 0,
    // 统计商品数量和价格
    orderCount: {
      num: 0,
      money: 0
    },
    bottomFlag: false,
    // 提交的订单
    orders: true,
    // menus: [{
    //   id: 1,
    //   menu: '菜单一'
    // }, {
    //   id: 1,
    //   menu: '菜单一'
    // }, {
    //   id: 1,
    //   menu: '菜单一'
    // }, {
    //   id: 1,
    //   menu: '菜单二'
    // }, {
    //   id: 1,
    //   menu: '菜单三'
    // }, {
    //   id: 1,
    //   menu: '菜单四'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }, {
    //   id: 1,
    //   menu: '菜单五'
    // }],
    // 商品列表
    items: [{
      goods_id:'001',
      goods_title:'考研英语词汇',
      goods_img:'image/classify1.jpg',
      goods_xiaoliang:'26',
      goods_price:'6',
      goods_num:"1"
    }, {
      goods_id:'002',
        goods_title:'大学英语综合教程2',
        goods_img:'image/classify2.jpg',
        goods_xiaoliang:'64',
        goods_price:'7',
        goods_num:"1"
    }, {
      goods_id: '003',
        goods_title: '外语学习与导论',
        goods_img: 'image/classify3.jpg',
        goods_xiaoliang: '35',
        goods_price: '8',
        goods_num:"1"
    }, {
      goods_id: '004',
      goods_title: '中学教资',
      goods_img: 'image/classify4.jpg',
      goods_xiaoliang: '50',
      goods_price: '20',
      goods_num:"1"
    }, {
      goods_id: '005',
      goods_title: '高中知识清单生物',
      goods_img: 'image/classify5.jpg',
      goods_xiaoliang: '7',
      goods_price: '5',
      goods_num:"1"
    }
    ]
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    setTimeout(()=>{
      wx.showToast({
        title: '成功加载数据',
        icon: 'success',
        duration: 500
      });
      wx.stopPullDownRefresh()
    }, 500);
  },
  tabMenu: function(event) {
    let index = event.target.dataset.index;
    this.setData({
      tabIndex: index
    });
  },
  // 点击去购物车结账
  card: function() {
    let that = this;
    // 判断是否有选中商品
    if (that.data.orderCount.num !== 0) {
      // 跳转到购物车订单也
      wx.redirectTo({
        url: '../sum/sum'
      });
    } else {
      wx.showToast({
        title: '您未选中任何商品',
        icon: 'none',
        duration: 2000
      })
    }
  },
  addOrder: function(event) {
    let that = this;
    let id = event.target.dataset.id;
    let index = event.target.dataset.index;
    let param = this.data.items[index];
    let subOrders = []; // 购物单列表存储数据
    param.active ? param.active = false : param.active = true;
    // 改变添加按钮的状态
    this.data.items.splice(index, 1, param);
    that.setData({
      items: this.data.items
    });
    // 将已经确定的菜单添加到购物单列表
    this.data.items.forEach(item => {
      if (item.active) {
        subOrders.push(item);
      }
    });
    // 判断底部提交菜单显示隐藏
    if (subOrders.length == 0) {
      that.setData({
        bottomFlag: false
      });
    } else {
      that.setData({
        bottomFlag: true
      });
    }
    let money = 0;
    let num = subOrders.length;
    subOrders.forEach(item => {
      money += item.goods_price; // 总价格求和
    });
    let orderCount = {
      num,
      money
    }
    // 设置显示对应的总数和全部价钱
    this.setData({
      orderCount
    });
    // 将选中的商品存储在本地
    wx.setStorage({
      key: "orders",
      data: subOrders
    });
  },
  onLoad: function() {

  }
})