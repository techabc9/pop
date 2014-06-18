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
	
	$( ".main_div > li" ).on("mouseenter", function() {
		$(this).find('.over').show();
		$(this).find('.ty2 h1').stop(true,true).fadeIn();
	});
	$( ".main_div > li" ).on("mouseleave", function() {
		$(this).find('.over').hide();
		$(this).find('.ty2 h1').stop(true,true).fadeOut();
	});
	
	if($(".main_div > li.drag").length > 1){
	    GnbList.initDrag();
	}
	
	$('#infoGraphic').bxSlider({
		slideSelector:'div.slide_inner',
		touchEnabled:false,
		pager:true,
		nextText:'',
		prevText:'',
		adaptiveHeight:true,
		startSlide:0,
		mode : 'fade'
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

jQuery.fn.swap = function(b) {
	b = jQuery(b)[0];
	var a = this[0];
	var t = a.parentNode.insertBefore(document.createTextNode(''), a);
	b.parentNode.insertBefore(a, b);
	t.parentNode.insertBefore(b, t);
	t.parentNode.removeChild(t);
	return this;
};

var GnbList = (function() {
	var GnbList = {};
	var gnb;
	var gnb_list;
	var gnb_reset;

	GnbList.initDrag = function() {
		gnb = $(".main_div");
		gnb_list = $(".main_div > li.drag");
		gnb_reset = $(".main_div").html();
		
		gnb_list.draggable({
			revert : true,
			helper : "clone",
			addClasses : false,
			opacity : 0.7
			//containment : ".u_gnb_area"
		});

		gnb_list.droppable({
			accept : ".main_div > li.drag",
			addClasses : false,
			//activeClass: "ui-state-hover",
			hoverClass : "dover",
			drop : function(event, ui) {
				var draggable = ui.draggable, droppable = $(this);
				draggable.swap(droppable);
				gnb_list.removeClass("dover");
			}
		});
	};

	GnbList.resetDrag = function() {
		gnb.html(gnb_reset);
		GnbList.initDrag();
	};

	return GnbList;
})(); 