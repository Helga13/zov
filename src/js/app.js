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
            block.stop(true, true).slideUp(500);
            parent.stop(true, true).addClass('is-active');
            blockThis.stop(true, true).slideDown(500);
        } else {
            parent.stop(true, true).removeClass('is-active');
            blockThis.stop(true, true).slideUp(500);
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
					'top:0; bottom:0; position: fixed;' : 'position:static;';
				block.setAttribute( 'style', newcss );
			}
		}

	
	$('.slider_main').slick({
		arrows: false,
		autoplay: true
	});
	
	$("#phone").mask("+375 (99) 999 99 99");
 
	
	
})