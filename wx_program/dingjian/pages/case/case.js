// var api = require('../../assets/js/api.js');
var app=getApp();
Page({
    data: {
      bannerSwiperConfig: app.globalData.bannerSwiperConfig,
        caseList: [
            {
                img: "http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/case_cover_01.png",
                title: "格局"
            },
            {
                img: "http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/case_cover_02.png",
                title: "3M空气检测"
            }
        ]
    },
    onLoad: function () {
        // app.getBannerList(this);
        //this.getCaseList();//获取案例列表数据
    },
    // onShareAppMessage: function () {
    //     return {
    //         title: '互联网开发定制平台',
    //         path: '/pages/case/case',
    //         success: function (res) {
    //             wx.showModal({
    //                 title: "提示",
    //                 content: "分享成功，感谢您的支持",
    //                 showCancel: false
    //             });
    //         },
    //         fail: function (res) {
    //             console.log(res.errMsg);
    //             if (res.errMsg.search('cancel')) return;

    //             wx.showModal({
    //                 title: "提示",
    //                 content: "分享失败，请检查网络或重试",
    //                 showCancel: false
    //             });
    //         }
    //     }
    // },
    // getCaseList: function () {
    //     var $this = this;
    //     wx.showLoading({
    //         title: "加载中",
    //         mask: true,
    //         success: function () {
    //             wx.request({
    //                 url: api.apiPath.getCaseList,
    //                 data: {
    //                     page: 1,
    //                     size: 5
    //                 },
    //                 method: 'GET',
    //                 success: function (res) {
    //                     var success = res.data.success,
    //                         list = res.data.root;
    //                         console.log(list);
    //                     if (success) {
    //                         var arr = [];
    //                         for (var i = 0, len = list.length; i < len; i++) {
    //                             var item = list[i];
    //                             arr.push({
    //                                 img: api.getImgFullPath(item['image']),
    //                                 title: item['innerTitle']
    //                             });
    //                         }
    //                         $this.setData({
    //                             "caseList": arr
    //                         });
    //                     }
    //                 },
    //                 fail: function (res) {
    //                     console.error("get case list error!");
    //                 },
    //                 complete: function () {
    //                     wx.hideLoading();
    //                 }
    //             });
    //         }
    //     });
    // }
});