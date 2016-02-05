$(document).ready( function() {

	var size = 16;

	createGrid(size);

	$('#clear').on('click', function() {
		$('.pad').children($('.grid')).css({"background-color":"white"});
	});

	$('#resize').on('click', function() {
		$('.pad').empty();
		size = window.prompt("Enter a number for the grid size.");
		createGrid(size);
	});

	$('#black').on('click', function() {
		$('.pad').empty();
		$('.pad').removeClass('colored');
		createGrid(size);
	});

	$('#colored').on('click', function() {
		$('.pad').empty();
		$('.pad').addClass('colored');
		createGrid(size);
	});

	$('.pad').on('mouseenter', '.grid' ,function() {
		if ($('.pad').hasClass('colored')) {
			if ($(this).hasClass('painted')) {
				var Colors = $(this).css("background-color").match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
				for (var i = 1; i <=3; i++) {
					if (Colors[i] > 25) {
						Colors[i] -= 25;
					}
					else {
						Colors[i] = 0;
					}
				}
				$(this).css({"background-color":"rgb("+Colors[1]+","+Colors[2]+","+Colors[1]+")"});
			}
			else {
				$(this).addClass('painted');
				$(this).css({"background-color":"rgb("+randomColor()+","+randomColor()+","+randomColor()+")"});
			}
		}
		else {
			$(this).css({"background-color":"black"});
		}
	});
});

function randomColor() {
	return Math.floor((Math.random()*255) + 1);
}

function createGrid(size) {

	var pad = $('.pad');
	var totalSize = 600;

	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			pad.append("<div class='grid'></div>");
		}
		pad.append("<div class='row'></div>");
	}

	pad.children('.grid').css({"width":totalSize/size, "height":totalSize/size});

}