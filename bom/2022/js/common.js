$(function(){
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
		window.location = 'microsoft-edge:' + window.location;
		setTimeout(function() {
			window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
		}, 1);
	}
	function updateOrientation() {
		var orientationValue = window.orientation
		if (orientationValue == 90 || orientationValue == -90) {
			$("meta[name=viewport]").attr("content",
				"width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes,target-densitydpi=medium-dpi"
			);
		}
	}
	window.onload = function() {
		document.body.onorientationchange = updateOrientation;
	}
	var windowWidth = window.screen.width
	setViewPort(windowWidth);
	function setViewPort(w_width) {
		if (w_width <= 420 ){
			$("meta[name=viewport]").attr("content", "width=420, maximum-scale=2.0, user-scalable=no, target-densitydpi=medium-dpi");
		} else {
			$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi");
		} 
	}
	$(window).resize(function(){
		var windowWidth = window.screen.width
		setViewPort(windowWidth);
	});

    
    AOS.init({
        once: true,
    });


    //scroll area
    var $window = $(window);
	$window.scroll(function(){
		var windowH = $window.height();
		var percentage = windowH *.8;
		var windowS = $window.scrollTop() + percentage 
		$(".scroll-area").each(function(){
			var thisTop = $(this).offset().top;						
			if (thisTop < windowS) {
				$(this).addClass("active");
			} else {
                //$(this).removeClass("active");
            }
		});	
	})


    //scroll animation
    // var a = window.innerHeight * .75
	// var wow = $(".combine_ani");
	// if (wow.length) {
	// 	$(window).on("load scroll", function () {
	// 		var scrPos = $(this).scrollTop();
	// 		wow.each(function () {
	// 			var offsetTop = $(this).offset().top - a;
	// 			if (scrPos >= offsetTop) {
	// 				$(this).addClass("animated");
	// 			} else {
	// 				if (!$(this).hasClass("start")) {
	// 					$(this).removeClass("animated");
	// 				}
	// 			}
	// 		})
	// 	})
	// }

	// wow.each(function () {
	// 	var delay = $(this).data("delay");
	// 	$(this).css({
	// 		"transition-delay": delay
	// 	})
	// });

    

});