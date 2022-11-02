
function fnMove(seq){
    var offset = $("#div" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}

$(function(){

    //硫붾돱踰꾪듉 �대┃ �� 紐⑤컮�� 硫붾돱 �섏삤寃�
	$(".btn-menu").click(function(){
		if($(".btn-menu").hasClass("on")){
			$(this).removeClass("on");
			$(".menu_overlay").fadeOut(800);
			$(".menu_section").animate({"right":"-100%"}, 800);
		}else{
			$(this).addClass("on");
			$(".menu_overlay").fadeIn(500);
			$(".menu_section").animate({"right":"0"}, 800);
		}
	});

	$(".menu_section > div ul li, .menu_overlay").click(function(){
		$(".btn-menu").removeClass("on");
		$(".menu_overlay").fadeOut(800);
		$(".menu_section").animate({"right":"-100%"}, 800);
	});


    //header scroll down踰꾪듉 �대┃�� �ㅼ쓬�섏씠吏�濡� �대룞
    $('.scroll-down').click(function(){
        var offset = $('#div2').offset();
        $('html').animate({scrollTop : offset.top}, 700);
    });

    

    $(window).on('load scroll resize', function(){
        var $scrollTop = $(window).scrollTop();
        var $doH = $(document).height();
        var $winH = $(window).height();
        var $nextPH = $('#next-page').height();
        var $headerH = $('header').height();
        var $fotH = $('footer').height();

        //header �ㅽ겕濡� �� �붿옄�� 蹂�寃쎌쓣 �꾪븳 �대옒�� 異붽�
        if($scrollTop >= $headerH){
            $('header').addClass('slim');
        }else{
            $('header').removeClass('slim');
        };

        if ( $( document ).scrollTop() > 800 ) {
            $( ".scroll-top" ).stop().animate({"opacity":"1"},300);
        } else {
            $( ".scroll-top").stop().animate({"opacity":"0"},300);
        }
      
    });
    
    $(".scroll-top, .logo, .home").click(function(){
        $('html').animate({scrollTop:0},500);
    });


    
    //
    // var aboutLeft = $(".aboutWrapper .about_left");
	// var aboutRight = $(".aboutWrappers .about_right");
	
	// $(window).scroll(function(){
	// 	var wScroll = $(this).scrollTop();
		
	// 	if(wScroll >= $("#about").offset().top && wScroll < $('.section--skill').offset().top - $(window).height()/1.5){
	// 		aboutLeft.addClass("fixed");
	// 	}else{
	// 		aboutLeft.removeClass("fixed");
	// 	}
	// });


    $('.worklist ul li').slice(0, 6).show();
    $('.more-btn').on('click', function (e) {
        e.preventDefault();
        $('.worklist ul li:hidden').slice(0, 8).slideDown();
        if ($('.worklist ul li:hidden').length === 0) {
            $('.more-btn').replaceWith("<p class='none'></p>");
        }
    });



});