$(document).ready(function() {
	
	var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	
	$('body').prepend('<div class="button">Reset</div>');
	$('.button').css({"height":"30px","width":"80px", "border-radius":"10px","background-color":"#666","font-family":"Verdanda,sans-serif",
	"text-align":"center","padding-top":"12px","font-size":"18px","margin":"auto auto 10px auto"});
	
	function makeGrid() {
		var colRows = prompt('How large should your grid be?');
		$('body').append('<div class="container"></div>');
		$('.container').css({"width":"960px","margin":"auto","border":"black solid 2px","font-size":"0px","background-color":"white"})
		
		var gridSize = colRows * colRows;
		
		for(i=0;i<gridSize;i++) {
			$('.container').append('<div class="cell"></div>');
		}
		$('.cell').css({"height":960/colRows+"px","width":960/colRows+"px","background-color":"#ffffff","display":"inline-block","margin":"0"});
				
	}
	makeGrid();

	function colorize() {
		$('.cell').on('mouseover', function() {
			$(this).css("background-color", randomColor);
		});
	}
	colorize();
	
	$('.button').hover(function() {
		$(this).css('cursor','pointer');
	});
	$('.button').on('click', function() {
		$('.cell').remove();
		
		makeGrid();
		colorize();
		
	});
	
});