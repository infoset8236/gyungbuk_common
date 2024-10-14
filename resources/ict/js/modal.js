$('.button').on('click', function () {
	$('#popup').fadeIn();
});

$('.close_btn').on('click', function () {
	$('#popup').fadeOut();
});

$(window).on('click', function (e) {
	if ($(e.target).is('#popup')) {
		$('#popup').fadeOut();
	}
});
