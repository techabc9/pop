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
	
	$('#faqList > li').on('click', function(e) {
		if(e.type === 'click' && $(this).hasClass('on') == false){
			$('#faqList > li').removeClass('on');
			$('#faqList > li').find('dd').slideUp();
			$(this).addClass('on');
			$(this).find('dd').slideDown();
		}
	});
	
	if($('#gnb_slider .gnb_slide').length > 1){
		$('#gnb_slider').bxSlider({
			pager : false
		});
	}
	else{
		$('#gnb_slider .u_gnb_list .last').removeClass();
	}
	
	
	
	
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