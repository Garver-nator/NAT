/* ===========================
** Initial Input Value
** =========================== */

/* sets initial value for input in cases where 
** placeholder attribute is not supported (IE 7-9) */

$('.js-intval').each(function () {
	var $input = $(this)
			currVal = $input.val();
	
	if (!currVal) 
	{
		if ($input.hasClass('search-input'))
		{
			$input.val('Search').addClass('is-initial');
		}
		else if ($input.hasClass('newsletter-email')) 
		{
			$input.val('user@domain.com').addClass('is-initial');
		}
	}
	$input.bind('focus', function () {
		var $this = $(this),
				valCheck = $this.val();
				
		if (valCheck === 'Search' || valCheck === 'user@domain.com')
		{
			$this.val('').removeClass('is-initial');
		}
	});
});


