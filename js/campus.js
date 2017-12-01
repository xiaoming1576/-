(function(){
    //box1 height
    var $box1 = $(".box1"),
        $content = $("#content");
    height();
    $(window).resize(height);
    function height() {
        $box1.height($(window).height()- parseFloat($content.css("marginTop")))
    }
})();

//btn
(function(){
    var $btn = $(".btn"),
        $header = $("#header").height(),
        $box2 = $(".box2");

    $btn.click(function () {
        var top = $box2.offset().top-($(window).height()-$box2.height()-$header)/2-$header;
        $("body,html").animate({
            scrollTop : top
        },1000)
    })
    
    
    
})();