var wWidth = 0;

$(function(e){
	var $this = $(this),
		wWidth = $(window).outerWidth();
	
	$(document).ready(function(e){
		var loadCmnApp = (function(e){
			"user strict";
			
			function cmnFunc(){
				// event
				
				
				if(wWidth < 1024){
					
				}else{
					
				}
			}
			
			function cmnResize(){
				// resize event
				wWidth = $(window).outerWidth();
				
				if(wWidth < 1024){
				
				}else{
					
				}
			}
			
			function cmnScroll(){
				// scroll event
				
			}
			
			return{
				cmnInit: function(e){
					cmnFunc();
				},
				cmnResize: function(e){
					$(window).resize(function(e){
						wWidth = $(window).outerWidth();
						//wWidth = windowWidth();
						
						
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


