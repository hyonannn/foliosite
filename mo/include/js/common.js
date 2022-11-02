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
				keyword();
				careerRolling();
				rollingTxt();
				
				if(wWidth < 768){
					burger();
					mMore();
				}else{
					cursor();
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
					cursor();
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
				var careerTop = $('.career').offset().top;
				if($(this).scrollTop() > careerTop - 300){
					$('.career-list').slick('slickPlay');
					progressBar();
				}else{
					$('.career-list').slick('slickPause');
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

function cursor() {
	document.body.addEventListener("mousemove", evt => {
		const mouseX = evt.clientX;
		const mouseY = evt.clientY;
		gsap.set(".cursor", {
			x: mouseX,
			y: mouseY
		});
	});

	$("a").on("mouseenter",function(){
		$(".cursor").stop().animate({
			width: "80px",
			height: "80px",
			opacity: 0.5
		},300)
	});
	$("a").on("mouseleave",function(){
		$(".cursor").stop().animate({
			width: "20px",
			height: "20px",
			opacity: 1
		})
	})
}

function btnTop() {
	$(".top").on('click',function(e){
		$('html, body').animate({
			scrollTop : 0
		}, 1000);
		return false;
	});
}

function gnb() {
	$("#gnb a").on('click',function(e){
		var conTop = $(this.hash).offset().top - 110;
		event.preventDefault();
		$('html,body').animate({scrollTop:conTop}, 500);
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

function keyword(){
	var words = [
		{text: 'Front-End', weight: 35, color: '#ffb53c'},
		{text: 'Web Publisher', weight: 33, color: '#f9e54e'},	
		{text: 'Developer', weight: 30, color: '#5bbdc8'},	
		{text: 'UX/UI', weight: 29, color: '#91d4c2'},
		{text: 'Web Standards', weight: 28, color: '#fe7773'},
		{text: 'Web Accessibility', weight: 28, color: '#d3b7d8'},		
		{text: 'Cross Browsing', weight: 27, color: '#bedae5'},
		{text: 'Responsive Web', weight: 26, color: '#8ce4ad'},
	];
	$('.keyword .contents').jQCloud(words, {
		delay: 500,
		autoResize: true,
		fontSize: {
			from: 0.07,
			to: 0.03
		}
	});
}

function careerRolling(){
	var sliderTimer = 3000;

	$('.career-list').not('.slick-initialized').slick({
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: sliderTimer,
		speed: 1000,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,		
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});
		
	$('.career-list').on('beforeChange', function(e, slick) {
		progressBar();
	});
}

function progressBar(){
	var sliderTimer = 3000;

	$('.slider-progress').find('span').removeAttr('style');
	$('.slider-progress').find('span').removeClass('active');

	setTimeout(function(){
		$('.slider-progress').find('span').css('transition-duration', (sliderTimer/1000)+'s').addClass('active');
	}, 100);
}

function rollingTxt() {
	var words = document.getElementsByClassName('word');
	var wordArray = [];
	var currentWord = 0;

	words[currentWord].style.opacity = 1;
	for (var i = 0; i < words.length; i++) {
	splitLetters(words[i]);
	}

	function changeWord() {
	var cw = wordArray[currentWord];
	var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
	for (var i = 0; i < cw.length; i++) {
		animateLetterOut(cw, i);
	}

	for (var i = 0; i < nw.length; i++) {
		nw[i].className = 'letter behind';
		nw[0].parentElement.style.opacity = 1;
		animateLetterIn(nw, i);
	}

	currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
	}

	function animateLetterOut(cw, i) {
	setTimeout(function() {
		cw[i].className = 'letter out';
	}, i * 80);
	}

	function animateLetterIn(nw, i) {
	setTimeout(function() {
		nw[i].className = 'letter in';
	}, 340 + (i * 80));
	}

	function splitLetters(word) {
	var content = word.innerHTML;
	word.innerHTML = '';
	var letters = [];
	for (var i = 0; i < content.length; i++) {
		var letter = document.createElement('span');
		letter.className = 'letter';
		letter.innerHTML = content.charAt(i);
		word.appendChild(letter);
		letters.push(letter);
	}

	wordArray.push(letters);
	}
	changeWord();
	setInterval(changeWord, 3000);   
}