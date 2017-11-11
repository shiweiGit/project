var app=getApp();
Page({
    data: {
        // 配置banner
        bannerSwiperConfig: app.globalData.bannerSwiperConfig,
        // 联系我们信息数据
        contactInfo: [
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/contact_icon_1.png",
                title:"地址",
                content:"北京市朝阳区建国门外SOHO西区14号楼1003室"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/contact_icon_2.png",
                title:"咨询电话",
                content:"010-88888888"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/contact_icon_3.png",
                title:"商务合作",
                content:"dingjian@163.com"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/contact_icon_4.png",
                title:"工作时间",
                content:"周一 — 周六 早上9:00 — 下午18:00"
            }
        ],
        markers: [{
          // iconPath: '/images/icon-location.png',
          id: 0,
          latitude: 39.9055500000,
          longitude:116.4543700000,
          width: 30,
          height: 30
        }]  
    },
    onLoad: function () {
        // getApp().getBannerList(this);
    
    },
   
});