$(document).ready(function () {
	
	$('.main_sidebar__item__head').on('click', function(){
		$(this).toggleClass('visible').parent().siblings().children('.main_sidebar__item__head').removeClass('visible');
		
		var this_ = $(this),
        parent = this_.parents('.main_sidebar__item'),
        blockThis = parent.find('.sidebar_list'),
        accord = $('.main_sidebar__item'),
        block = accord.find('.sidebar_list');

        if (!parent.hasClass('is-active')) {
            accord.stop(true, true).removeClass('is-active');
            block.stop(true, true).slideUp(400);
            parent.stop(true, true).addClass('is-active');
            blockThis.stop(true, true).slideDown(400);
        } else {
            parent.stop(true, true).removeClass('is-active');
            blockThis.stop(true, true).slideUp(400);
        }
        return false;
		
	});
	

	// sticky sidebar
	
		function getTopOffset(e) { 
			var y = 0;
			do { y += e.offsetTop; } while (e = e.offsetParent);
			return y;
		}
		var block = document.getElementById('fixblock'); /* fixblock - значение атрибута id блока */
		if ( null != block ) {
			var topPos = getTopOffset( block );
			window.onscroll = function() {
				var newcss = (topPos < window.pageYOffset) ? 
					'top:0; bottom:0; position: fixed; overflow:auto' : 'position:static;';
				block.setAttribute( 'style', newcss );
			}
		}
	
	
	$('.slider_main').slick({
		arrows: false,
		autoplay: true
	});
	
	
	$("#phone").mask("+375 (99) 999 99 99");
 
	
	$('#fixblock').perfectScrollbar();
	
	
	$('.card_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider_nav'
	});
	$('.slider_nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.card_slider',
		arrows: false,
//		centerMode: true,
		focusOnSelect: true
	});
	
	//tabs

	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
	
	// nav_btn
	
	$('.nav_btn').on('click', function(){
		$('.overlay').toggleClass('active');
		$(this).parent().next('.main_wrap').find('.main_sidebar').toggleClass('active');
	});
	
	$('.overlay').on('click', function(){
		$(this).removeClass('active');
		$('.main_sidebar').removeClass('active');
	});
	
	$('.close').on('click', function(){
		$('.overlay').removeClass('active');
		$('.main_sidebar').removeClass('active');
	});
	
	//popup
	
	$('.popap_block').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
        	$('#'+DataId).css('display', 'block');
        	$('body').css('overflow', 'hidden');  
        }
    });
    $('.popup').click(function (event) {
        e = event || window.event
        if (e.target == this) {
            $(this).css('display', 'none');
            $('body').css('overflow', 'auto'); 
        }
    });
    $(".popup .popup_content").click(function(e) {
		e.stopPropagation();
	}); 
	
	
	
	if($(window).width() < 767) {
		$('.category_kitchen_item_photo.h_200').parent().addClass('slider_photo');
	} else {
		$('.category_kitchen_item_photo.h_200').parent().removeClass('slider_photo');
	}
	
	$('.slider_photo').slick({
		arrows: false,
		dots: true
	});
	
	if($(window).width() < 767) {
		$('.category_kitchen_item_photo.h_200').parent().addClass('slider_photo');
	} else {
		$('.category_kitchen_item_photo.h_200').parent().removeClass('slider_photo');
	}
	
	$('.slider_photo').slick({
		arrows: false,
		dots: true
	});
	
	
	// sticky menu
	
	if($(window).width() < 1160) {
		function getTopOffset(e) { 
			var y = 0;
			do { y += e.offsetTop; } while (e = e.offsetParent);
			return y;
		}
		var block = document.getElementById('fixmenu'); /* fixmenu - значение атрибута id блока */
		if ( null != block ) {
			var topPos = getTopOffset( block );
			window.onscroll = function() {
				var newcss = (topPos < window.pageYOffset) ? 
					'top:0; left:0; right:0; position: fixed; z-index:2;' : 'position:static;';
				block.setAttribute( 'style', newcss );
				$('.main_content.modifier').css({'padding-top': '50px'});
			}
		}
	} else {
		
	}
	
		
	
	
})