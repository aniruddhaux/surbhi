


$(document).ready(function(){
	
	/* Fashion Slider Js */
	$('.fashion_sec').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				
			  }
			}
		  ]
		});
		
	/* Fashion Slider Js */

});

/* Sticky header Js */
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 500) {
			$(".header_src").addClass("position-sticky");
		} else {
			$(".header_src").removeClass("position-sticky");
		}
	});
/* Sticky header Js */


/* Scrolling Js */
jQuery(document).ready(function(){
	jQuery(".ec_header .nav-link").click(function() {
		var targetId = jQuery(this).data('target');
		if(targetId == '#'){
			jQuery('html, body').animate({
				scrollTop: 0
			}, 2000);
		}else if(targetId == '#contact_section'){
			jQuery('html, body').animate({
				scrollTop: jQuery(targetId).offset().top - 70
			}, 2000);
		}else{
			jQuery('html, body').animate({
				scrollTop: jQuery(targetId).offset().top
			}, 2000);
		}

		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		
	});
	//on scroll scroll to top hide/show.
	jQuery(window).scroll(function(){
		//scroll to top hide/show
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollToTop').fadeIn();
		} else {
			jQuery('.scrollToTop').fadeOut();
		}
	});
	jQuery('.scrollToTop').on('click', function(){
		jQuery('html, body').animate({
			scrollTop: 0
		}, 2000);
	});
});

function scrollToDiv(elem){
	var targetId = jQuery(elem).data('target');
	jQuery('html, body').animate({
		scrollTop: jQuery(targetId).offset().top
	}, 2000);
}
/* Scrolling Js */



