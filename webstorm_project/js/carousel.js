var i=0,timer;
tim();//定时器
$(".banner_pic").eq(0).show().siblings().hide();
$(".outer").mouseover(function(){
   clearInterval(timer);
});
$(".outer").mouseout(function(){
    tim();
})

$(".num li").click(function(){//跳转到指定数字图片
    clearInterval(timer);
    i=$(this).index();
    show();
    tim();
});
//点击向左
$(".btn").click(function(){
    clearInterval(timer);
    if(i==0){
        i=5;
    }
    i--;
    show();
    tim();
});
//点击向右
$(".btn2").click(function(){
    clearInterval(timer);
    if(i==4){
        i=-1;
    }
    i++;
    show();
    tim();
});
//展示
function show(){
    $(".banner_pic").eq(i).fadeIn(300).siblings().fadeOut();
    $(".num li").eq(i).addClass("sel").siblings().removeClass("sel");
}
// 定时器
function tim(){
    timer=setInterval(function(){
        i++;
        if(i==5){
            i=0;
        }
        show();
    },2500)
}
