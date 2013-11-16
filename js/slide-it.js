/**
 * Created by chbymnky on 11/10/13.
 */
var testVal;
// create slideshow functionality for nat
slideshow = function (slideCont) {
	this.slidecont = slideCont;
	this.slides = slideCont.children();
	this.imgs = slideCont.find('img');
	this.sWidth = this.slides.width();
	this.sHeight = this.slides.height();

	// constrict the slideshow container for visual purposes
	this.slidecont.css('width', this.sWidth+'px')
								.css('height', this.sHeight+'px')
								.css('overflow', 'hidden');
	$(this.slides[0]).addClass('is-active');
}

slideshow.prototype.createCarousel = function () {
	this.thmbCont = $('<div class="slide-thumb-cont"></div>').insertAfter(this.slidecont);

	for (var i = 0; i < this.slides.length; i++)
	{
		this.thmbCont.append('<div class="slide-thumb-item left" data-num="'+[i]+'">'+
														'<img src="'+this.imgs[i]['src']+'">'+
													'</dvi>');
	}
	this.thmbCont.children().eq(0).addClass('is-active');
}

slideshow.prototype.gotoSlide = function (elm) {
	elm.bind('click', function (){
		var thisElm = $(this),
				elmData = thisElm.data(),
				slides = $(this.slides);

		thisElm.siblings().removeClass('is-active');
		thisElm.addClass('is-active');

		slides.removeClass('is-active');
		slides.eq(elmData.num).addClass('is-active');
	});
}

slideshow.prototype.startSlides = function (slideTime) {
	var slides = $(this.slides),
			thmbs = $('.slide-thumb-item');

	slides.hide().filter('.is-active').show();

	setInterval(function(){
		var activeIndex = slides.filter('.is-active').removeClass('is-active').index(),
				maxIndex = slides.length;

		if (activeIndex < (maxIndex - 1)) {
			activeIndex = activeIndex + 1
		}
		else {
			activeIndex = 0;
		}

		slides.eq(activeIndex).addClass('is-active');
		thmbs.removeClass('is-active').eq(activeIndex).addClass('is-active');
		slides.hide().filter('.is-active').fadeIn();
	}, slideTime);
}

slideshow.prototype.API = {
	initiate: function() {

	},
	transThmb: function() {

	},
	pause: function() {

	}
}

var cycle = new slideshow($('.slideshow'));
cycle.createCarousel();
cycle.startSlides(4000);
cycle.gotoSlide($('.slide-thumb-item'));

/*$(function (){
	var slideCont = $('slideshow'),
	    slides = slideCont.children(),
	    thmbCont = '<div class="slide-thumb-cont"></div>';

	$('.slideshow').each(function () {
		var $slideCont = $(this),
				$slide = $slideCont.children();
		var imgs = [],
				swidth = $slide.width(),
				sheight = $slide.height();

		for (var i = 0; i < $slide.length(); i++)
		{
			imgs.push($slide[i].find('img').attr('src'));
		}

	});
	function createCarousel () {
	}
});*/



