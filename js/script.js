

$(function () {


    // 스와이퍼 시작!
    const swiper1 = new Swiper('.big_banner1903 .swiper-container', {

        direction: 'horizontal',
        // Infinity:true,        
        autoplay: { // 자동재생    
            delay: 4500, // 슬라이드 당 지연시간 (ms) 
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            loop: true, // 반복여부

        },

        centeredSlides: true,
        slidesPerView: 1, // 보여지는 슬라이드 개수
        spaceBetween: 10, // 슬라이드 간 여백



        // 페이지 네이션 (• • • • •)
        pagination: {
            el: '.swiper-pagination-bullets',       // 페이지 네이션이 적용될 요소 (선택자)
            type: 'bullets',            // 'bullets'        : • • • 
                                            // 'fraction'       : (현재번호/전체번호) 
                                            // 'progressbar'    : 진행률(게이지)
                                            // 'custom'         
            clickable: true,                // 페이지 네이션 클릭 가능 여부
        },


        // 네비게이션 화살표
        navigation: {
            nextEl: '.swiper-button-next', // 다음 화살표가 적용될 요소
            prevEl: '.swiper-button-prev', // 이전 화살표가 적용될 요소
        },


        // 스크롤바
        // scrollbar: {
        //     el: '.swiper-scrollbar',        // 스크롤바가 적용될 요소
        //     hide: true,                     // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
        //     draggable: true,                // 스크롤바 드래그 가능 여부
        //     snapOnRelease: true,            // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        // },
    });
   
})



$(function () {


    // 스와이퍼 시작!
    const swiper2 = new Swiper('.slide02 .swiper-container', {

        direction: 'horizontal', // 슬라이드 방향 : 'vertical', 'horizontal'
        // loop: true,    
        dots: true,
        arrows: true,
        autoplay: {
            delay: 1500,
            // Infinity:true,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,

        },


        slidesPerView: 3, // 보여지는 슬라이드 개수
        spaceBetween: 10, // 슬라이드 간 여백



        // 페이지 네이션 (• • • • •)
        pagination: {
            el: '.swiper-pagination-bullets', // 페이지 네이션이 적용될 요소 (선택자)
            type: 'bullets', // 'bullets'        : • • • 
            // 'fraction'       : (현재번호/전체번호) 
            // 'progressbar'    : 진행률(게이지)
            // 'custom'         
            clickable: true, // 페이지 네이션 클릭 가능 여부
        },


        // 네비게이션 화살표
        navigation: {
            nextEl: '.slide02 .swiper-button-nxt', // 다음 화살표가 적용될 요소
            prevEl: '.slide02 .swiper-button-pre', // 이전 화살표가 적용될 요소
        },


        // // 스크롤바
        // scrollbar: {
        //     el: '.swiper-scrollbar',        // 스크롤바가 적용될 요소
        //     hide: true,                     // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
        //     draggable: true,                // 스크롤바 드래그 가능 여부
        //     snapOnRelease: true,            // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        // },
    });

})


$(function () {


    // 스와이퍼 시작!
    const swiper3 = new Swiper('.slide03 .swiper-container', {

        direction: 'horizontal', // 슬라이드 방향 : 'vertical', 'horizontal'
        // loop: true,    
        dots: true,
        arrows: true,
        autoplay: {
            delay: 1500,
            // Infinity:true,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,

        },


        slidesPerView: 3, // 보여지는 슬라이드 개수
        spaceBetween: 10, // 슬라이드 간 여백



        // 페이지 네이션 (• • • • •)
        pagination: {
            el: '.swiper-pagination-bullets', // 페이지 네이션이 적용될 요소 (선택자)
            type: 'bullets', // 'bullets'        : • • • 
            // 'fraction'       : (현재번호/전체번호) 
            // 'progressbar'    : 진행률(게이지)
            // 'custom'         
            clickable: true, // 페이지 네이션 클릭 가능 여부
        },


        // 네비게이션 화살표
        navigation: {
            nextEl: '.slide03 .swiper-button-nxt', // 다음 화살표가 적용될 요소
            prevEl: '.slide03 .swiper-button-pre', // 이전 화살표가 적용될 요소
        },


        // // 스크롤바
        // scrollbar: {
        //     el: '.swiper-scrollbar',        // 스크롤바가 적용될 요소
        //     hide: true,                     // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
        //     draggable: true,                // 스크롤바 드래그 가능 여부
        //     snapOnRelease: true,            // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        // },
    });

})





$(function () {


    // 스와이퍼 시작!
    const swiper4 = new Swiper('.slide04 .swiper-container', {

        direction: 'horizontal', // 슬라이드 방향 : 'vertical', 'horizontal'
        // loop: true,    
        dots: true,
        arrows: true,
        // autoplay: {                        
        //     delay: 1500,                
        //     // Infinity:true,
        //     pauseOnMouseEnter: true,
        //     disableOnInteraction: false,

        // },


        slidesPerView: 4.3, // 보여지는 슬라이드 개수
        spaceBetween: 10, // 슬라이드 간 여백



        // 페이지 네이션 (• • • • •)



        // 네비게이션 화살표
        navigation: {
            nextEl: '.slide04 .swiper-button-nxt', // 다음 화살표가 적용될 요소
            prevEl: '.slide04 .swiper-button-pre', // 이전 화살표가 적용될 요소
        },


        // // 스크롤바
        // scrollbar: {
        //     el: '.swiper-scrollbar',        // 스크롤바가 적용될 요소
        //     hide: true,                     // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
        //     draggable: true,                // 스크롤바 드래그 가능 여부
        //     snapOnRelease: true,            // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        // },
    });

})


$(function () {


    // 스와이퍼 시작!
    const swiper5 = new Swiper('.slide05 .swiper-container', {

        direction: 'horizontal', // 슬라이드 방향 : 'vertical', 'horizontal'
        // loop: true,    
        dots: true,
        arrows: true,
        // autoplay: {                        
        //     delay: 1500,                
        //     // Infinity:true,
        //     pauseOnMouseEnter: true,
        //     disableOnInteraction: false,

        // },


        slidesPerView: 4.3, // 보여지는 슬라이드 개수
        spaceBetween: 10, // 슬라이드 간 여백



        // 페이지 네이션 (• • • • •)



        // 네비게이션 화살표
        navigation: {
            nextEl: '.slide05 .swiper-button-nxt', // 다음 화살표가 적용될 요소
            prevEl: '.slide05 .swiper-button-pre', // 이전 화살표가 적용될 요소
        },


        // // 스크롤바
        // scrollbar: {
        //     el: '.swiper-scrollbar',        // 스크롤바가 적용될 요소
        //     hide: true,                     // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
        //     draggable: true,                // 스크롤바 드래그 가능 여부
        //     snapOnRelease: true,            // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        // },
    });

})







$(function () {


    // 스와이퍼 시작!
    const swiper6 = new Swiper('.slide06.swiper-container', {

        direction: 'horizontal',
        // Infinity:true,        
        autoplay: { // 자동재생    
            delay: 4000, // 슬라이드 당 지연시간 (ms) 
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            loop: true, // 반복여부

        },


        slidesPerView: 3, // 보여지는 슬라이드 개수
        spaceBetween: 20, // 슬라이드 간 여백



        // 페이지 네이션 (• • • • •)



        // 네비게이션 화살표
        navigation: {
            nextEl: '.themagazine_arrow.next', // 다음 화살표가 적용될 요소
            prevEl: '.themagazine_arrow.prev', // 이전 화살표가 적용될 요소
        },


        // 스크롤바
        scrollbar: {
            el: '.swiper-scrollbar', // 스크롤바가 적용될 요소
            hide: true, // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
            draggable: true, // 스크롤바 드래그 가능 여부
            snapOnRelease: true, // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        },
    });

})






$(function pickForSlider1903(){
    var position = 0;
    var movesize = 206;
    var activeSlide = 3;
    var viewTotalWidth = $("#pickForSlider1903 ul li").size();
    var $slideId = $('#pickForSlider1903 ul');
    //$slideId.width((movesize * viewTotalWidth)+88);
    $slideId.css('left',position);
    for(var i=0;i<2;i++){
        $slideId.find('li:last-child').prependTo("#pickForSlider1903 ul");
    }
    $slideId.find('li:nth-child('+activeSlide+')').addClass('slide_active');
    $('#pickforControls > a').click(function(event){
        var $target=$(event.target);
        if($target.is('#pickforControls > .next')){
            if(position==-movesize){
                $slideId.css('left',0);
                $slideId.find('li:first-child').appendTo("#pickForSlider1903 ul");
                position = 0;
            }
            position-=movesize;
            $slideId.stop().animate({left:position}, 'fast', 'swing',function(){
                if(position==-movesize){
                 $slideId.css('left',0);
                 $slideId.find('li:first-child').appendTo("#pickForSlider1903 ul");
                 position=0;
                }
                activeSlide = 3;
                $slideId.find('li').removeClass('slide_active');
                $slideId.find('li:nth-child('+activeSlide+')').addClass('slide_active');
            });

        }else if($target.is('#pickforControls > .prev')){
            if(position==0){
                     $slideId.css('left',-movesize);
                     $slideId.find('li:last-child').prependTo("#pickForSlider1903 ul");
                     position=-movesize;
            }
            position+=movesize;
            $slideId.stop().animate({left:position}, 'fast',function(){
                if(position==0){
                 $slideId.css('left',-movesize);
                 $slideId.find('li:last-child').prependTo("#pickForSlider1903 ul");
                 position=-movesize;
                }
                activeSlide = 4;
             $slideId.find('li').removeClass('slide_active');
             $slideId.find('li:nth-child('+activeSlide+')').addClass('slide_active');
            });

        }
    });
    
    $(".pickfor_wrap1903 .controls .prev").css("opacity", "1");
    $(".pickfor_wrap1903 .controls .next").css("opacity", "1");
    $(".pickfor_wrap1903 .pick_for ul").css("opacity", "1");
 })






// footer scroll 버튼

$(document).ready(function (e) {

    $(".viewTopArea").hide(); //탑 버튼 숨김
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 120) { //버튼 보이는 시작 위치
                $(".viewTopArea").fadeIn();
            } else {
                $(".viewTopArea").fadeOut();
            }
        });
        $(".viewTopArea").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 800); //스크롤 이동속도
            return false;
        });
    });
});



//footer - language, family slideToggle
$(document).ready(function() {
	$('.related_site > dl').click(function(e){
		$(this).find('dd').slideToggle('fast'),
		$(this).find('dt > a').toggleClass('on'),
		e.stopPropagation();
	});

	$("body").click(function(){
		$('.related_site > dl dd').slideUp('fast');
		$('.related_site > dl dt a').removeClass('on');
	});

	$('.related_site > dl.global').click(function(e){
		$('.related_site > dl.family dd').slideUp('fast');
		$('.related_site > dl.family dt a').removeClass('on');
	});
	$('.related_site > dl.family').click(function(e){
		$('.related_site > dl.global dd').slideUp('fast');
		$('.related_site > dl.global dt a').removeClass('on');
	});
});

$(document).ready(function(){
    // 슬릭 슬라이드 시작!
    $('.list_new').slick({
        dots: true,
        arrows: true,   
        vertical: true,
        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:500,                      // 슬라이드가 전환되는 시간
        
        
        
        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 1,                // 보여질 슬라이드 개수
        slidesToScroll: 1,              // 스크롤될 슬라이드 개수
        
        
        
        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤
        

        // 네비게이션 화살표 커스텀
        prevArrow: '<a href="javascript:void(0);" class="slick-prev">이전</a>',
        nextArrow: '<a href="javascript:void(0);" class="slick-next">다음</a>',
    })



    
    $('#noticeWrap .prev').on('click', function() {
        $('.slick-prev').trigger('click')
    })
    
    $('#noticeWrap .next').on('click', function() {
        $('.slick-next').trigger('click')
    })
    
    
});

//Top Menu
$(document).ready(function(){
$(".header_dropmemu").mouseover(function(){
    $(this).children(".btn").addClass("on");
    $(this).children("span").siblings("a").addClass("on");
    $(this).children("div").stop().slideDown('fast');
});
$(".header_dropmemu").mouseleave(function(){
    $(this).children(".btn").removeClass("on");
    $(this).children("div").stop().slideUp('fast');
});
$(".header_dropmemu > .list").mouseover(function(){
    $(this).siblings("span").children("a").addClass("on");
});
$(".header_dropmemu > .list").mouseleave(function(){
    $(this).siblings("span").children("a").removeClass("on");
});

});





/* main product list */
$(document).ready(function(){
    var $item_boxs = $(".product_list .items_list li");
    $item_boxs.on( 'mouseenter', function(){
        active( this );
    });
    $item_boxs.on( 'mouseleave', function(){
        deactive( this );
    });
    function active( item ){
        var $item_box = $( item );
        $item_box.find('.respon_image.on').stop().fadeIn('fast');
    }
    function deactive( item ){
        var $item_box = $( item );
        $item_box.find('.respon_image.on').stop().fadeOut('fast');
    }
});
