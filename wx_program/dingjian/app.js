//app.js
App({
    onLaunch: function () {
        this.initBannerSwiper();
    },
    getUserInfo: function (cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo);
        } else {
            //调用登录接口
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res.userInfo;
                            typeof cb == "function" && cb(that.globalData.userInfo);
                        }
                    });
                }
            });
        }
    },
    // 全局变量
    globalData: {
        userInfo: null,
        // 轮播配置
        bannerSwiperConfig: {
            indicatorDots: true,
            autoplay: true,
            interval: 3000,
            duration: 500,
            circular: true,
            height: 150,
            imgAspectRatio: 750 / 220,
            imgUrls: [
                          "http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/banner_01.png",
                 "http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/banner_02.png",

"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/banner_02.png"
            ]
        }
    },
    // banner初始化
    initBannerSwiper: function () {
        var $this = this;
        wx.getSystemInfo({
            success: function (data) {
                // 获取可视宽度 计算图片高度
                var ratio = $this.globalData.bannerSwiperConfig.imgAspectRatio,
                    width = data.windowWidth,
                    height = width / ratio;
                $this.globalData.bannerSwiperConfig.height = height;
            }
        });
    }
});