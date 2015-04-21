$(function(){
    $window = $(window);
    $body   = $("body");
    
    // トップ画像をフェードインで表示
    $(".top_img > img").fadeIn(2000);
    
    // 画像のキャプションをマウスオーバーに合わせて表示
    $(".frame__inner").hover(
        function(){
            $(this).children(".frame__caption").slideDown();
        },
        function(){
            $(this).children(".frame__caption").slideUp();
        }
    );
    
    // スクロールに合わせてナビゲーションの透明度を変える
    var $nav = $(".navigation");
    $window.on("scroll", function(){
        var scrolltop = $(this).scrollTop();
        var threshold = 300.0;
        var opacity = scrolltop / threshold;
        $nav.css("opacity", opacity);
    });
    
    // 左から出てくるナビゲーション
    var $nav2 = $(".navigation2");
    var $nav2_btn = $(".navigation2__btn");
    var is_open = false;
    $nav2.on("click", function(){
        if( is_open == false ){
            $nav2.animate({left: "0"}, 500);
            //$body.animate({left: "150px"}, 500);
            is_open = true;
            $nav2_btn.text("◀");
        }else{
            $nav2.animate({left: "-150px"}, 500);
            //$body.animate({left: "0"}, 500);
            is_open = false;
            $nav2_btn.text("▶");
        }
    });

    // スクロールに合わせてついてくるサイドバー（ひどいコード）
    var $side    = $(".main__side");
    var $ad_area = $(".ad_area");
    var offset   = $ad_area.offset().top;
    $window.on("scroll", function(){
        var scrolltop = $(this).scrollTop();
        if( scrolltop > offset ){
            $ad_area.css({
                position: "absolute",
                top: scrolltop
            });
        }else{
            $ad_area.css("position", "static");
        }
    });
    
    // トップに戻るボタン
    var $to_top = $(".to_top");
    $to_top.on("click", function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });
});