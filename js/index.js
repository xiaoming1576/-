// content
(function () {
    $(function () {
        $(".v-icon").click(function () {
            $(this).hide();
            $("video").show()[0].play();
        });
        $("video").click(function () {
            this.pause();
        })
    })
//    tab
    $(function () {
        var $tab = $(".tab li"),
            index = 0,
            $pli = $(".c-pic li"),
            timer;
        $pli.eq(index).addClass("on");
        $tab.eq(index).addClass("on");
        $tab.click(function () {
            var This = $(this).index();
            if(index!==This){
                change(function () {
                    index = This
                })
            }
        });
        //定时器
        fn();
        function fn() {
            timer = setInterval(function () {
                change(function () {
                    index = ++index%$tab.length;
                })
            },2000)
        }
        function change(fn) {
            $pli.eq(index).fadeOut(500).removeClass("on");
            $tab.eq(index).removeClass("on");
            fn();
            $pli.eq(index).fadeIn(500).addClass("on");
            $tab.eq(index).addClass("on");
        }
    //    清除定时器
        $("#content").hover(function () {
            clearInterval(timer)
        },function () {
            fn();
        })

    })
   
})();



//classic

(function(){
    var $classic = $("#classic"),
        $ul = $classic.find(".box ul"),
        $li = $ul.children(),
        $btn = $classic.children(".btn"),
        $tab = $classic.find(".class-tab ul li"),
        length = $li.length,
        Mid = Math.floor(length/2),
        sTime = new Date();

    $(window).scroll(function () {
       if($(window).scrollTop()>250){
            change();
       }
    });

    //左右按钮
    $btn.click(function () {
        var This = $(this).index(".btn");
        if(new Date()-sTime>800){
            if(This){
                //    右
                Mid= ++Mid%length;
                change();
                $ul.stop().animate({
                    marginLeft : -240
                },500,function () {
                    $(this).css("marginLeft",0);
                    $ul.children().eq(0).appendTo($ul);
                })
            }else{
                //    左
                (--Mid<0)&&(Mid=length-1);
                change();
                $ul.stop().animate({
                    marginLeft : 240
                },500,function () {
                    $(this).css("marginLeft",0);
                    $ul.prepend($ul.children().last())
                })
            }
            sTime = new Date();
        }
    });
    //tab按钮

    function change() {
        $tab.removeClass().eq(Mid).addClass("on");
        $li.removeClass().eq(Mid-1).addClass("edge").next().addClass("mid").next().addClass("edge");
        /*$li.removeClass();
        $li.eq(Mid-1).addClass("edge");
        $li.eq(Mid).addClass("mid");
        $li.eq(Mid+1).addClass("edge");*/
    }
})();