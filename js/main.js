$(function () {
	$(window).scroll(function() {
	    $('.about__offer').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.brand').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.services__items .services__item:nth-child(even)').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.services__items .services__item:nth-child(odd)').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.choose__text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.choose__cards').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.partners__items .partners__img:nth-child(odd)').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.partners__items .partners__img:nth-child(even)').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.our-location__text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.our-location__img').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animated fadeInRight");
	        }
	    });
	});
	$('body').append('<div id="screencss"></div>');
	adjustCSS();
	$(window).resize(function(){ adjustCSS() });
})
function adjustCSS(){
	 var pageWidth = $(window).width();
	 if (pageWidth < 1200) {
		$(window).scroll(function() {
		    $('.services__items .services__item:nth-child(odd)').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("animated fadeInLeft");
		        }
		    });
		});
	}
}