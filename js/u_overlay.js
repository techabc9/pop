// JavaScript Document

var uOverlay = (function() {
	var uOverlay = {};
	var _u_overlay;

	uOverlay.show = function() {
		_u_overlay = document.getElementById('u_overlay');
		
		if(_u_overlay){
			document.getElementById('u_ifr').src = "../html/ifr.html";
			_u_overlay.style.display = "block";
			fadeEffect.init('u_overlay_bg',1,70);
		}
		else{
			_u_overlay = document.createElement('div');
			_u_overlay.setAttribute('id', 'u_overlay');
			_u_overlay.innerHTML='<div id="u_overlay_bg" style="position:fixed;left:0;top:0;width:100%;height:100%;background:#000;opacity:0;filter:alpha(opacity=0);z-index:10000"> </div>' +
										'<div id="u_ifr_area" style="position:absolute;left:50%;margin-left:-590px;top:138px;width:1180px;height:770px;z-index:10001">'+
										'<iframe src="../html/ifr.html" id="u_ifr" name="u_ifr" width="100%" height="770px" frameborder="0" scrolling="no" style="position:static;display:block;width:1180px;height:770px;border:0;margin:0;padding:0"> </iframe>'+
										'<a href="#" style="position:absolute;top:18px;right:20px" onclick="uOverlay.hide(); return false;"><img src="../img/bt_close.gif" alt="close" border="0"></a></div>';
			document.getElementsByTagName('body')[0].appendChild(_u_overlay);
			uOverlay.show();
		}
	};

	uOverlay.hide = function() {
		_u_overlay = document.getElementById('u_overlay');
		if(_u_overlay){
			_u_overlay.style.display = "none";
			document.getElementById('u_ifr').src = "";
			fadeEffect.init('u_overlay_bg',0);
		}
	};
	
	uOverlay.over = function() {
		var _u_ban_off = document.getElementById('u_ban_off');
		var _u_ban_on = document.getElementById('u_ban_on');
		_u_ban_off.style.display = "none";
		_u_ban_on.style.display = "block";
	};
	
	uOverlay.out = function() {
		var _u_ban_off = document.getElementById('u_ban_off');
		var _u_ban_on = document.getElementById('u_ban_on');
		_u_ban_off.style.display = "block";
		_u_ban_on.style.display = "none";
	};
	
	return uOverlay;
})(); 

var fadeEffect=function(){
	return{
		init:function(id, flag, target){
			this.elem = document.getElementById(id);
			clearInterval(this.elem.si);
			this.target = target ? target : flag ? 100 : 0;
			this.flag = flag || -1;
			this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0;
			this.elem.si = setInterval(function(){fadeEffect.tween()}, 20);
		},
		tween:function(){
			if(this.alpha == this.target){
				clearInterval(this.elem.si);
			}else{
				var value = Math.round(this.alpha + ((this.target - this.alpha) * .05)) + (1 * this.flag);
				this.elem.style.opacity = value / 100;
				this.elem.style.filter = 'alpha(opacity=' + value + ')';
				this.alpha = value
			}
		}
	}
}();