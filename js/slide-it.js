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
}

slideshow.prototype.createCarousel = function () {
	this.thmbCont = $('<div class="slide-thumb-cont"></div>').insertAfter(this.slidecont);

	for (var i = 0; i < this.slides.length; i++)
	{
		this.thmbCont.append('<div class="slide-thumb-item left" data-num="'+[i]+'">'+
														'<img src="'+this.imgs[i]['src']+'">'+
													'</dvi>');
	}
}

slideshow.prototype.gotoSlide = function () {

}

slideshow.prototype.startSlides = function (slideTime) {
	//this.slides[0].addClass('is-active');
	//this.slides.hide().filter('.is-active').show();
	console.log(this.slides)
	setInterval(function(){

	}, slideTime);
}

var cycle = new slideshow($('.slideshow'));
cycle.createCarousel();
cycle.startSlides(1000);

/*$(function (){
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
});*/



