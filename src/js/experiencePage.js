$(document).ready(function() {
	$(".fa-angle-double-right").click(function () {
	    $('#right').hide('slide', {direction: 'left'}, 500);
	    $('#rightButton').hide('slide', {direction: 'left'}, 500);
	    setTimeout(function(){
	    $('#left').show('slide', {direction: 'right'}, 500);
	    $('#leftButton').show('slide', {direction: 'right'}, 500);
	}, 500);

	});

	$(".fa-angle-double-left").click(function () {
	    $('#left').hide('slide', {direction: 'right'}, 500);
	    $('#leftButton').hide('slide', {direction: 'right'}, 500);
	    setTimeout(function(){
	    $('#right').show('slide', {direction: 'left'}, 500);
	    $('#rightButton').show('slide', {direction: 'left'}, 500);
	}, 500);

	});



});