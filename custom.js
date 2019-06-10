$(document).ready(function(){
	var headerHeight = $('nav').outerHeight();
	$('a').click(function(e){
		var linkHref = $(this).attr('href');
		 // console.log(headerHeight);

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		},1500);

		e.preventDefault();
	});
});