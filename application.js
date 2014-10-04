$(document).ready(function(){
	var grid = 16;
	for (var i = 0; i < (grid*grid -1); i++) {
		$('.wrapper').append("<div></div>");
		$('.wrapper > div').addClass('cell');

	};
	
	$('.wrapper').on('mouseenter','.cell, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .ten',function(){
		
		
		if ($(this).hasClass("nine")) {
    		$(this).removeClass('nine');
			$(this).addClass('ten');
  		}
  		if ($(this).hasClass("eight")) {
    		$(this).removeClass('eight');
			$(this).addClass('nine');
  		}
  		if ($(this).hasClass("seven")) {
    		$(this).removeClass('seven');
			$(this).addClass('eight');

  		}
  		if ($(this).hasClass("six")) {
    		$(this).removeClass('six');
			$(this).addClass('seven');
  		}
  		if ($(this).hasClass("five")) {
    		$(this).removeClass('five');
			$(this).addClass('six');
  		}
  		if ($(this).hasClass("four")) {
    		$(this).removeClass('four');
			$(this).addClass('five');
  		}

		if ($(this).hasClass("three")) {
    		$(this).removeClass('three');
			$(this).addClass('four');
  		}
		
  		if ($(this).hasClass("two")) {
    		$(this).removeClass('two');
			$(this).addClass('three');
  		}


  		if ($(this).hasClass("one")) {
    		$(this).removeClass('one');
			$(this).addClass('two');
  		}
		
		if ($(this).hasClass("cell")) {
    		$(this).removeClass('cell');
			$(this).addClass('one');
  		}
		
  		
		
	});

	$('.header').on('click','button',function(){
		
		if ($('.wrapper > div').hasClass("ten")) {
    		$('.wrapper > div').removeClass('ten');
			$('.wrapper > div').addClass('cell');
  		}
		if ($('.wrapper > div').hasClass("nine")) {
    		$('.wrapper > div').removeClass('nine');
			$('.wrapper > div').addClass('cell');
  		}
  		if ($('.wrapper > div').hasClass("eight")) {
    		$('.wrapper > div').removeClass('eight');
			$('.wrapper > div').addClass('cell');
  		}
  		if ($('.wrapper > div').hasClass("seven")) {
    		$('.wrapper > div').removeClass('seven');
			$('.wrapper > div').addClass('cell');

  		}
  		if ($('.wrapper > div').hasClass("six")) {
    		$('.wrapper > div').removeClass('six');
			$('.wrapper > div').addClass('cell');
  		}
  		if ($('.wrapper > div').hasClass("five")) {
    		$('.wrapper > div').removeClass('five');
			$('.wrapper > div').addClass('cell');
  		}
  		if ($('.wrapper > div').hasClass("four")) {
    		$('.wrapper > div').removeClass('four');
			$('.wrapper > div').addClass('cell');
  		}

		if ($('.wrapper > div').hasClass("three")) {
    		$('.wrapper > div').removeClass('three');
			$('.wrapper > div').addClass('cell');
  		}
		
  		if ($('.wrapper > div').hasClass("two")) {
    		$('.wrapper > div').removeClass('two');
			$('.wrapper > div').addClass('cell');
  		}


  		if ($('.wrapper > div').hasClass("one")) {
    		$('.wrapper > div').removeClass('one');
			$('.wrapper > div').addClass('cell');
  		}
		
		
  		
		
	});

});

