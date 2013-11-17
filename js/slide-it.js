/**
 * Created by chbymnky on 11/10/13.
 */
var testVal;
// create slideshow functionality for nat
slideshow = function (slideCont, interval) {
	this.slidecont = slideCont;
	this.slides = slideCont.children();
	this.imgs = slideCont.find('img');
	this.sWidth = this.slides.width();
	this.sHeight = this.slides.height();
	this.interval = interval;
	this.play = true;
	this.thmbCont = $('<div class="slide-thumb-cont"></div>').insertAfter(this.slidecont);
}

slideshow.prototype = {
	init: function () {

		// constrict the slideshow container for visual congruency
		this.slidecont.css('width', this.sWidth+'px')
				.css('height', this.sHeight+'px')
				.css('postion', 'relative');
		// position all slides for transition effect
		this.slides.css('position', 'absolute');

		// mark first slide as the active slide and hide the rest
		$(this.slides[0]).addClass('is-active').show().siblings().hide();

		// create individual thumbnails for the carousel
		this.createThmbs();
		this.transSlide();
	},
	transSlide: function () {
		var slides = $(this.slides),
				thumbs = this.thmbCont.children(),
				activeIndex = slides.filter('.is-active').index(),
				activeThmb = thumbs.filter('.is-active').index(),
				maxSlides = slides.length,
				transSlideFN = this.transSlide();

		if (!this.play) {
			return;
		}

		// change to the index of the next slide
		if (activeIndex != activeThmb) {
			activeIndex = activeThmb;
		}
		else if (activeIndex < (maxSlides - 1)) {
			activeIndex = activeIndex + 1;
		}
		else {
			activeIndex = 0;
		}

		// alter active slide based on new index
		slides.removeClass('is-active').eq(activeIndex).addClass('is-active');
		slides.fadeOut().filter('.is-active').fadeIn();
		thumbs.removeClass('is-active').eq(activeIndex).addClass('is-active');

		setInterval(function () {
			transSlideFN();
		}, this.interval);
	},
	createThmbs: function () {
		// place HTML markup for each thumbnail in the carousel
		for (var i = 0; i < this.slides.length; i++)
		{
			this.thmbCont.append('<div class="slide-thumb-item left" data-num="'+[i]+'">'+
															'<img src="'+this.imgs[i]['src']+'">'+
														'</dvi>');
		}

		// set active thumbnail and bind click event to all
		this.thmbCont.children()
				.eq(0)
				.addClass('is-active');
	},
	transThmb: function (thmbIndex) {
		var thmbs = this.thmbCont.children();

		thmbs.removeClass('is-active').eq(thmbIndex).addClass('is-active');

		this.transSlide();
	},
	pause: function () {
		this.play = false;
	},
	resume: function () {
		this.play = true;
	}
}

var slideshowSlct = $('.slideshow'),
		slideIt = new slideshow($('.slideshow'), 6000);

slideIt.init();

// halting slideshow functionality
slideshowSlct.bind('mouseover', slideIt.pause());
slideshowSlct.bind('mouseout', slideIt.resume());

// change active class for thumbnails
var thmbs = $('.slide-thumb-item');
thmbs.bind('click', function () {
	var elm = $(this),
			elmIndex = elm.index();

	//elm.addClass('is-active').siblings().removeClass('is-active');
	slideIt.transThmb(elmIndex);
});


/*slideshow.prototype.createCarousel = function () {
 this.thmbCont = $('<div class="slide-thumb-cont"></div>').insertAfter(this.slidecont);

 for (var i = 0; i < this.slides.length; i++)
 {
 this.thmbCont.append('<div class="slide-thumb-item left" data-num="'+[i]+'">'+
 '<img src="'+this.imgs[i]['src']+'">'+
 '</dvi>');
 }
 this.thmbCont.children().eq(0).addClass('is-active');
 }*/

/*slideshow.prototype.gotoSlide = function (elm) {
 elm.bind('click', function (){
 var thisElm = $(this),
 elmData = thisElm.data(),
 slides = $(this.slides);

 thisElm.siblings().removeClass('is-active');
 thisElm.addClass('is-active');

 slides.removeClass('is-active');
 slides.eq(elmData.num).addClass('is-active');
 });
 }*/

/*slideshow.prototype.startSlides = function (slideTime) {
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
 }*/

/*cycle.startSlides(4000);
cycle.gotoSlide($('.slide-thumb-item'));*/

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



