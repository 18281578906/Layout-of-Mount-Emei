
(function(w, d, $, undefined){

	
	var doc		= d.documentElement,
		trim	= function(str) { return str.replace(/^\s+/, '').replace(/\s+$/, ''); };
	
	
	doc.className = String.prototype.trim ? doc.className.trim() : trim(doc.className);
	
/*
	var $html = $('html');
	$html.attr('class', $.trim($html.attr('class'));
*/
	
	$('#demo, #demo2').gallery3d();
	
})(window, window.document, window.jQuery);