// JavaScript Document
var _ly_slider;

$(document).ready(function(){
	
	$('#main_slider').bxSlider({
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
	
	//FAQ
	var $faqList = $('#faqList > li');
	$faqList.on('click', function(e) {
		if(e.type === 'click' && $(this).hasClass('on') == false){
			$faqList.removeClass('on');
			$faqList.find('dd').slideUp();
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
		$('#gnb_slider .main_div .last').removeClass();
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

function tab(s1,s2,t){
	$(s1).hide();
	$(s2).show();
	$(t).parent().addClass('on');
	$(t).parent().siblings().removeClass('on');
}

//input placeholder onblur="onBlur(this)" onfocus="onFocus(this)"
function onBlur(el) {
	if (el.value == '') {
		el.value = el.defaultValue;
		$(el).removeClass('focusin');
	}
}
function onFocus(el) {
	if (el.value == el.defaultValue) {
		el.value = '';
		$(el).addClass('focusin');
	}
}