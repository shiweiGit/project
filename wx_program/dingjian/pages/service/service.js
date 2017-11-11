var app=getApp();
Page({
    data: {
        //轮播
        bannerSwiperConfig: app.globalData.bannerSwiperConfig,
        serviceList: [
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/service_icon_01.png",
                title:"app开发"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/service_icon_02.png",
                title:"网站开发"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/service_icon_03.png",
                title:"微信小程序开发"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/service_icon_04.png",
                title:"微信公众号开发"
            },
          
        ],
        // flowProcessList: ["需求评估","视觉设计","程序开发","测试上线"]
        //业务流程
        flowProcessList:[
          {title:"设计",info:"业务咨询，合同签订，产品原型"},
          {title:"开发",info: "ui设计,产品研发，测试迭代"},
          {title:"上线",info: "产品交工，发布上线"}
        ]
    },
    onLoad: function () {
        
    },
    // onShareAppMessage: function () {
    //     return {
    //         title: '互联网开发定制平台',
    //         path: '/pages/service/service',
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
    // }
});