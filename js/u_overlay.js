// JavaScript Document

var uOverlay = (function() {
	var uOverlay = {};
	var _u_overlay;

	uOverlay.show = function() {
		_u_overlay = document.getElementById('u_overlay');
		if(_u_overlay){
			_u_overlay.style.display = "block";
		}
		else{
			_u_overlay = document.createElement('div');
			_u_overlay.setAttribute('id', 'u_overlay');
			_u_overlay.innerHTML='<div id="u_overlay_bg" style="position:fixed;left:0;top:0;width:100%;height:100%;background:#000;opacity:0.7;filter:alpha(opacity=70);z-index:10000"> </div>' +
										'<div id="u_ifr_area" style="position:absolute;left:50%;margin-left:-590px;top:138px;width:1180px;height:770px;z-index:10001">'+
										'<iframe src="../html/ifr.html" id="u_ifr" name="u_ifr" width="100%" height="770px" frameborder="0" scrolling="no" style="position:static;display:block;width:1180px;height:770px;border:0;margin:0;padding:0"> </iframe>'+
										'<a href="#" style="position:absolute;top:18px;right:20px" onclick="uOverlay.hide(); return false;"><img src="../img/bt_close.gif" alt="close" border="0"></a></div>';
			document.getElementsByTagName('body')[0].appendChild(_u_overlay);
		}
	};

	uOverlay.hide = function() {
		_u_overlay = document.getElementById('u_overlay');
		if(_u_overlay){
			_u_overlay.style.display = "none";
		}
	};
	
	return uOverlay;
})(); 