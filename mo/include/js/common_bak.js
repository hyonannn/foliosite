var wWidth = 0;

$(function(e){
	var $this = $(this),
		wWidth = $(window).outerWidth();
	
	$(document).ready(function(e){
		var loadCmnApp = (function(e){
			"user strict";
			
			function cmnFunc(){
				// event
				gnb();	
				btnTop();
				
				if(wWidth < 768){
					burger();
					mMore();
				}else{
					$('#columns figure').removeAttr('style');
					more();
				}
			}
			
			function cmnResize(){
				// resize event
				wWidth = $(window).outerWidth();
				if(wWidth < 768){
					burger();
					mMore();
				}else{
					$('#columns figure').removeAttr('style');
					more();
				}
			}
			
			function cmnScroll(){
				// scroll event
				if(wWidth < 768){
					if($(this).scrollTop() > 72){
							$('#header').addClass('fixed');
							$('.top').fadeIn(500);
						}else{
							$('#header').removeClass('fixed');
							$('.top').fadeOut(500);
						}
				} else{
					if($(this).scrollTop() > 90){
						$('#header').addClass('fixed');
						$('.top').fadeIn(500);
					}else{
						$('#header').removeClass('fixed');
						$('.top').fadeOut(500);
					}
				}
			}
			
			return{
				cmnInit: function(e){
					cmnFunc();
				},
				cmnResize: function(e){
					$(window).resize(function(e){
						wWidth = $(window).outerWidth();
						//wWidth = windowWidth();
						cmnResize();
						
					});
				},
				
				cmnScroll: function(e){
					$(window).scroll(function(e){
						cmnScroll();
					});
				}
			}
		})();
		
		/* ====================
			* run
		===================== */
		AOS.init();
		 // init
		loadCmnApp.cmnInit();
		// resize
		loadCmnApp.cmnResize();
		// scroll
		loadCmnApp.cmnScroll();
	});
});

function windowWidth() {
    if($(document).innerHeight() > $(window).innerHeight()) {
        return $(window).innerWidth() - 17;
    } else {
        return $(window).innerWidth();
    }
}

function gnb() {
	$("#gnb a").on('click',function(e){
		var conTop = $(this.hash).offset().top - 110;
		event.preventDefault();
		$('html,body').animate({scrollTop:conTop}, 500);
	});
}

function btnTop() {
	$(".top").on('click',function(e){
		$('html, body').animate({
			scrollTop : 0
		}, 1000);
		return false;
	});
}

function burger() {
	$('.hamburger').off('mouseenter');
	$('.btn-close').off('mouseleave');

	$(".hamburger").on('click',function(e){
		$(this).addClass('active');
		$('.m-menu').stop().animate({'top':'0'},500)
	});
	$('.btn-close, #gnb a').on('click',function(e){
		$('.hamburger').removeClass('active');
		$('.m-menu').stop().animate({'top':'-100%'},500);
	});
}

function more() {
	$('#columns figure:nth-child(n+10)').hide();
	$('.btn-more').click(function(){
		$('#columns figure:nth-child(n+10)').stop().fadeIn(1000);
		$(this).hide();
	});
}

function mMore() {
	$('#columns figure:nth-child(n+7)').hide();
	$('.btn-more').click(function(){
		$('#columns figure:nth-child(n+7)').stop().fadeIn(1000);
		$(this).hide();
	});
}

function gallery(){
	$('.project-list li').off('click');
	$('.project-list li').on('mouseenter',function(e){
		$(this).children('.project_detail').stop().fadeIn();
	});
	$('.project-list li').on('mouseleave',function(e){
		$(this).children('.project_detail').stop().fadeOut();
	});
}
function mGallery(){
	$('.project-list li').off('mouseenter').on('click',function(e){
		$(this).addClass('on');
		$('.project-list li').not(this).removeClass('on');
	});
	$('.project-list li').off('mouseleave');
}