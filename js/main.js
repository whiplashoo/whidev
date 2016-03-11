$(document).ready(function(){
	// $(".project").click(function(){
	// 	window.location = $(this).find("a:first").attr("href");
	// 	return false;
	// });

	// // Show URL on Mouse Hover
	// $(".project").hover(function () {
	// 	window.status = $(this).find("a:first").attr("href");
	// }, function () {
	// 	window.status = "";
	// });

/*======= Skillset *=======*/

$('.level-bar-inner').css('width', '0');

$(window).on('load', function() {

	$('.level-bar-inner').each(function() {

		var itemWidth = $(this).data('level');

		$(this).animate({
			width: itemWidth
		}, 800);

	});

});

$('#contact').click(function(){
	$(this).html('Email me at: contact@whidev.com');
});
})

var doABarrelRoll = function(){
	var a="-webkit-",b='transform:rotate(1turn);',c='transition:2s;';
	document.head.innerHTML+= '<style id="barell">body{'+a+b+a+c+b+c;
}

  

$('#roll').click(function(){
	doABarrelRoll();
	setTimeout(function(){$('#barell').remove();},5000);
});

$('#roll').mouseover(function(){
	$('.clickme').css('color', '#33c3f0');
}).mouseout(function(){
	$('.clickme').css('color', '#2f2e33');
});