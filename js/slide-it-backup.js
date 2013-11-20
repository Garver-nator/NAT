/**
 * Created by chbymnky on 11/10/13.
 */
// create slideshow functionality for nat
var slideshow = function (slideCont, interval) {
	this.$slidecont = slideCont;
	this.$slides = slideCont.children();
	this.imgs = slideCont.find('img');
	this.sWidth = this.$slides.width();
	this.sHeight = this.$slides.height();
	this.interval = interval;
	this.$thmbCont = $('<div class="slide-thumb-cont"></div>');
	this.intervalID = 'Null';
}

slideshow.prototype = {
	init: function () {
		// constrict the slideshow container for visual congruency
		this.$slidecont.width(this.sWidth)
				.height(this.sHeight)
				.css('postion', 'relative');
		// position all slides for transition effect
		this.$slides.css('position', 'absolute');

		// mark first slide as the active slide and hide the rest
		$(this.$slides[0]).addClass('is-active').show().siblings().hide();

		this.$thmbCont.insertAfter(this.$slidecont);
		// create individual thumbnails for the carousel
		this.createThmbs();

		//var transslide = this.transSlide;

		slideshow.intervalID = setInterval(this.transSlide, this.interval);
	},
	transSlide: function () {
		var $slides = this.$slides,
				$thumbs = this.$thmbCont.children(),
				activeIndex = $slides.filter('.is-active').index(),
				activeThmb = $thumbs.filter('.is-active').index(),
				maxSlides = $slides.length,
				transSlideFN = this.transSlide;

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
		$slides.removeClass('is-active').eq(activeIndex).addClass('is-active');
		$slides.fadeOut().filter('.is-active').fadeIn();
		$thumbs.removeClass('is-active').eq(activeIndex).addClass('is-active');

	},
	createThmbs: function () {
		// place HTML markup for each thumbnail in the carousel
		for (var i = 0; i < this.$slides.length; i++)
		{
			this.$thmbCont.append('<div class="slide-thumb-item left" data-num="'+[i]+'">'+
															'<img src="'+this.imgs[i].src+'">'+
														'</dvi>');
		}

		// set active thumbnail and bind click event to all
		this.$thmbCont.children()
				.eq(0)
				.addClass('is-active');
	},
	transThmb: function (thmbIndex) {
		var thmbs = this.$thmbCont.children();

		thmbs.removeClass('is-active').eq(thmbIndex).addClass('is-active');
		this.pause();
		this.transSlide();
		this.resume();
	},
	pause: function () {
		clearInterval(this.intervalID);
	},
	resume: function () {
		this.intervalID = setInterval(this.transSlide, this.interval);
	}
}

var $slideshowSlct = $('.slideshow'),
		slideIt = new slideshow($slideshowSlct, 6000);

slideIt.init();

// halting slideshow functionality
$slideshowSlct.bind('mouseover', slideIt.pause);
$slideshowSlct.bind('mouseout', slideIt.resume);

// change active class for thumbnails
var thmbs = $('.slide-thumb-item');
thmbs.bind('click', function () {
	var elm = $(this),
			elmIndex = elm.index();

	//elm.addClass('is-active').siblings().removeClass('is-active');
	slideIt.transThmb(elmIndex);
});




