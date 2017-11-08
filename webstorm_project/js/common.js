var clickNum=0;
function collapseFoot(){
    if(clickNum==0){
        clickNum=1;
        console.log("收起");
        $(".footfixBox").animate({bottom:"-55px"});
        $(".close").html("点击收起");
    }else{
        clickNum=0;
        console.log("展开");
        $(".footfixBox").animate({bottom:"0px"});
        $(".close").html("点击展开");
    }
}

$(function(){
    //折叠展开底部表单
    $(".close").click(collapseFoot);
})