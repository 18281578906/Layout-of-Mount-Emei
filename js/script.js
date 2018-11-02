/* script.js - 脚本
 首先选择要固定的元素，然后调用scrolledFix()插件
---------------------------------------------------------------- */
jQuery(function($) { 
	
	// 滚动固定导航插件应用到#header-bar上
	$('#header-bar').scrolledFix();
	
	// 在智能手机环境下调用全屏函数
	if($(window).width() < 767) loadedFullScreen();
		
});

function loadedFullScreen() {
	setTimeout(function() { scrollTo(0,0); }, 100);
};

