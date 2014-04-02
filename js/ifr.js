// JavaScript Document
var _ly_slider;

$(document).ready(function(){
	$('#slider').bxSlider({
		controls : false,
		mode : 'fade',
		auto : true
	});
	
	$("#ly_close").click(function(e) {
		$("#layer").stop(true,true).animate({left:'100%'}, function(){
			_ly_slider.destroySlider();
		});
		e.preventDefault();
	});
});

function set_slide(n){
	_ly_slider = $('#ly_slider').bxSlider({
		startSlide: n,
		pager : false,
		infiniteLoop : false,
		onSliderLoad: function(currentIndex){
			$("#layer").stop(true,true).animate({left:0});
		}
	});
}