$(document).ready(function(){
	var grid = 16;
	for (var i = 0; i < grid*grid; i++) {
		$('.wrapper').append("<div></div>");
		$('.wrapper > div').addClass('cell');

	};
	
	$('.cell').on('mouseenter',function(){
		$(this).addClass('coloredcell');
	});

});