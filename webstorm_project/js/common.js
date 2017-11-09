var clickNum=0;
function collapseFoot(){
    if(clickNum==0){
        clickNum=1;
        // console.log("收起");
        $(".footfixBox").animate({bottom:"-55px"});
        $(".close").html("点击展开");
    }else{
        clickNum=0;
        // console.log("展开");
        $(".footfixBox").animate({bottom:"0px"});
        $(".close").html("点击收起");
    }
}

$(function(){
    //折叠展开底部表单
    $(".close").click(collapseFoot);
    $("#service a").hover(function() {
        if ($(this).prop("className") == "weixin_area") {
            $(this).children("img.hides").show();
        } else {
            $(this).children("div.hides").show();
            $(this).children("img.shows").hide();
            $(this).children("div.hides").animate({marginRight: '0px'}, '0');
        }
    }, function() {
        if ($(this).prop("className") == "weixin_area") {
            $(this).children("img.hides").hide();
        } else {
            $(this).children("div.hides").animate({marginRight: '-163px'}, 0, function() {
                $(this).hide();
                $(this).next("img.shows").show();
            });
        }
    });

    $("#top_btn").click(function() {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    //右侧导航 - 二维码
    $(".weixin_area").hover(function() {
        $(this).children(".weixin").show();
    },function(){
        $(this).children(".weixin").hide();
    });
})