$(function(){
    setTimeout(function() {
        $(".scrollWrap").addClass("on");
    }, 400);
    
    
    setTimeout(function() {
        $(".scrollWrap .bg").addClass("wave")
    }, 2000);

    
    let waveCircle = $(".scrollWrap .bg");
    scrollFn = () => {
        let elem = document.querySelector(".scrollWrap") 
        let topPos = elem.offsetTop; 
        let elemHeight = elem.scrollHeight ; 
        let scrollY = window.scrollY 
     	let calc = (scrollY / elem.scrollHeight) * 100; 
        let windowHeight =  $(window).height() //�붾㈃�곸쓽 �믪씠

        
        if( $(window).width() > 1200){
            if( elem.scrollHeight/3 <=  scrollY){
                $(".scrollWrap .bg").css({
                    width : 580 + (calc * 16.5),
                    height : 580 + (calc * 16.5),
                    transition : "0.5s",
                    transform: "translate(-50%, -50%)",
                })
                $(".scrollWrap .bg").removeClass("wave")
            } else {
                $(".scrollWrap .bg").css({
                    width : 580,
                    height : 580,
                    transform: "translate(-50%, -50%)",
                })
                $(".scrollWrap .bg").delay(1000).addClass("wave")
            }
        } else if ( $(window).width() > 420){
            if( elem.scrollHeight/3 <=  scrollY){
                $(".scrollWrap .bg").css({
                    width : 470 + (calc * 8.2),
                    height : 470 + (calc * 8.2),
                    transition : "0.5s",
                    transform: "translate(-50%, -50%)",
                })
                $(".scrollWrap .bg").removeClass("wave")
            } else {
                $(".scrollWrap .bg").css({
                    width : 470,
                    height : 470,
                    transform: "translate(-50%, -50%)",
                })
                $(".scrollWrap .bg").delay(1000).addClass("wave")
            }
        } else {
            if( elem.scrollHeight/3 <=  scrollY){
                $(".scrollWrap .bg").css({
                    width : 370 + (calc * 8),
                    height : 370 + (calc * 8),
                    transition : "0.5s",
                    transform: "translate(-50%, -50%)",
                })
                $(".scrollWrap .bg").removeClass("wave")
            } else {
                $(".scrollWrap .bg").css({
                    width : 370,
                    height : 370,
                    transform: "translate(-50%, -50%)",
                })
                //$(".scrollWrap .bg").delay(1000).addClass("wave")
            }
        }
    }
    
    //window.addEventListener('load', scrollFn)
	window.addEventListener('scroll', scrollFn)


    //split text 
    $(".splitTxt").each(function (index) {
        let text = $(this).text();
        let appendB = "<span>" + text.split("").join('</span><span>') + "</span>";
	    $(this).html(appendB);
    });



    let innerHeight = $(window).innerHeight();
    let about = $(".about");
    let aboutCntTop = $(".about").position().top;
    let aboutH3 = about.find("h3");
    let aboutImg = about.find(".img");
    let aboutTxt = about.find(".txtBox");
    let footerTop = $("footer").position().top;


    $(window).on("load resize scroll", function(){
        let scrollTop = $(this).scrollTop();
        if($(window).width() > 1200){
            if (scrollTop >= aboutCntTop){
                aboutImg.css({
                    "position": "fixed",
                    "top": "80px"
                })
                //document.documentElement.style.setProperty("background-color", "pink");
                // $(".about").css({
                //     background : "pink",
                //     transition : "0.5s",
                // })
            } else {
                aboutImg.css({
                    "position": "relative",
                    "top": "auto"
                })
                $(".about").css({
                    background : "#fff",
                    transition : "0.5s",
                })
            }
    
            if (scrollTop + innerHeight >= $(".works").position().top){
                let titleTop = scrollTop - ($(".about").height() * 2.7)
                aboutImg.stop().css({
                    "transform": "translateY(-" + titleTop + "px)"
                })
                aboutH3.stop().css({
                    "transform": "translateY(-" + titleTop + "px)"
                })
            } else {
                aboutImg.stop().css({
                    "transform": "translateY(0px)"
                })
                aboutH3.stop().css({
                    "transform": "translateY(0px)"
                })
            }
            

            console.log(scrollTop)
            console.log(footerTop)

            if (scrollTop >= footerTop){
                //console.log("111");
            } else {
                //console.log("222")
            }
        } else if ($(window).width() > 960) {
            if (scrollTop >= aboutCntTop){
                aboutImg.css({
                    "position": "fixed",
                    "top": "100px"
                })
                //document.documentElement.style.setProperty("background-color", "pink");
            } else {
                aboutImg.css({
                    "position": "relative",
                    "top": "auto"
                })
            }
    
    
            if (scrollTop + innerHeight >= $(".works").position().top){
                let titleTop = scrollTop - ($(".about").height() * 2.13)
                aboutImg.stop().css({
                    "transform": "translateY(-" + titleTop + "px)"
                })
                aboutH3.stop().css({
                    "transform": "translateY(-" + titleTop + "px)"
                })
            } else {
                aboutImg.stop().css({
                    "transform": "translateY(0px)"
                })
                aboutH3.stop().css({
                    "transform": "translateY(0px)"
                })
            }
        }
    })


    
    // const list = document.querySelector('.touch-scroll');
    // const listScrollWidth = list.scrollWidth;
    // const listClientWidth = list.clientWidth;
    // let startX = 0;
    // let nowX = 0;
    // let endX = 0;
    // let listX = 0;

    // const onScrollStart = (e) => {
    //     startX = getClientX(e);
    //     window.addEventListener('mousemove', onScrollMove);
    //     window.addEventListener('touchmove', onScrollMove);
    //     window.addEventListener('mouseup', onScrollEnd);
    //     window.addEventListener('touchend', onScrollEnd);
    // };
      
    // const onScrollMove = (e) => {
    //     nowX = getClientX(e);
    //     setTranslateX(listX + nowX - startX);
    // };
      
    // const onScrollEnd = (e) => {
    //     endX = getClientX(e);
    //     listX = getTranslateX();
    //     if (listX > 0) {
    //         setTranslateX(0);
    //         list.style.transition = `all 0.3s ease`;
    //         listX = 0;
    //     } else if (listX < listClientWidth - listScrollWidth) {
    //         setTranslateX(listClientWidth - listScrollWidth);
    //         list.style.transition = `all 0.3s ease`;
    //         listX = listClientWidth - listScrollWidth;
    //     }
      
    //     window.removeEventListener('mousedown', onScrollStart);
    //     window.removeEventListener('touchstart', onScrollStart);
    //     window.removeEventListener('mousemove', onScrollMove);
    //     window.removeEventListener('touchmove', onScrollMove);
    //     window.removeEventListener('mouseup', onScrollEnd);
    //     window.removeEventListener('touchend', onScrollEnd);
    //     window.removeEventListener('click', onClick);
      
    //     setTimeout(() => {
    //         bindEvents();
    //         list.style.transition = '';
    //     }, 300);
    // };
      
    // const onClick = (e) => {
    //     if (startX - endX !== 0) {
    //       e.preventDefault();
    //     }
    //   };
      
    // const getClientX = (e) => {
    //     const isTouches = e.touches ? true : false;
    //     return isTouches ? e.touches[0].clientX : e.clientX;
    // };
    
    // const getTranslateX = () => {
    //     return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
    // };
    
    // const setTranslateX = (x) => {
    //     list.style.transform = `translateX(${x}px)`;
    // };
    
    // const bindEvents = () => {
    //     list.addEventListener('mousedown', onScrollStart);
    //     list.addEventListener('touchstart', onScrollStart);
    //     list.addEventListener('click', onClick);
    // };
    
    // bindEvents();


    var swiper = new Swiper(".workSwiper", {
        slidesPerView: 1,
        //centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        },
    });

	
    
});