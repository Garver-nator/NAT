/**
 * Created by chbymnky on 11/10/13.
 */
// create slideshow functionality for nat
function slideshow (slideCont) {
	this.slidecont = slideCont;
	this.slides = slideCont.children();
	this.imgs = [];
	for (var i = 0; i < this.slides.length; i++)
	{
		imgs.push(this.slides[i].find('img').attr('src'));
	}
}

slideshow.prototype.createCarousel = function () {
	for (var i = 0; i < this.slides.length; i++)
	{

	}
}
