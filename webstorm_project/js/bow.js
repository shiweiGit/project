$(function() {
    brainbow();//下划线跟随
});
var brainbow = function init () {
    var indicate = function indicate ($e) {
        var o = $e.position(),
            h = $e.innerHeight(),
            w = $e.innerWidth(),
            t = (o.top + h-10 ),
            l = o.left;
        $(".indicator").css({
            "top":t  + "px" ,
            "left": l + "px",
            "width": w + "px",
            "height":"3px",
            'backgroundColor':'#4791EA',

        });
    };
    //点击事件
    $(".header ul").on("click", "li", function(e) {
        $(".header ul li").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
    //鼠标移入事件
    $(".header ul").on("mouseenter", "li", function(e) {
        indicate( $(this));
    });
    //鼠标移出事件
    $(".header ul").on("mouseleave", "li", function(e) {
        indicate( $("li.active"));
    });
    //浏览器尺寸变化事件
    $(window).resize(function(){
        indicate( $("li.active"));
    })

    /**动态创建滑动层**/
    var indicator = $("<div>").addClass("indicator");
    $('.header ul').append(indicator);

    indicate($(".header ul li.active"));
};