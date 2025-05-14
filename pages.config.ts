import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';

export default defineUniPages({
  // 你也可以定义 pages 字段，它具有最高的优先级。

  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-app',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
    "app-plus":{
		bounce:"none"
	},
  },

  tabBar: {
    color: "#999999",
    selectedColor: "#2D3926",
    backgroundColor: "#ffffff",
    list: [
      {
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/home_select.png',
        text: '首页',
        pagePath: 'pages/index/index'
      },{
        iconPath: 'static/tabbar/consult.png',
        selectedIconPath: 'static/tabbar/consult_select.png',
        text: '咨询',
        pagePath: 'pages/consult/consult'
      },{
        iconPath: 'static/tabbar/message.png',
        selectedIconPath: 'static/tabbar/message_select.png',
        text: '消息',
        pagePath: 'pages/message/message'
      }, {
        iconPath: 'static/tabbar/mine.png',
        selectedIconPath: 'static/tabbar/mine_select.png',
        text: '我的',
        pagePath: 'pages/mine/mine'
      }
    ]
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
      '^z-tabs': '@zxlee/z-tabs/components/z-tabs/z-tabs.vue',
    },
  },
});
