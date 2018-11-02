(function($) {
	
	$.fn.scrolledFix = function(options) {
		
		// 设置基本选项
		$.fn.scrolledFix.defaults = {
			scrolled_point : $(this).offset().top
		}; 
		
		// 重载选项
		options = $.extend($.fn.scrolledFix.defaults, options);
		
		// win, doc, html, body
		refInit();
		
		// 处理插件代码
		return this.each(function() {
			
			// 保存应用插件的对象
			var $this = $(this),
				$win  = $(win),
				cloned = false,
				$gnb_ul = $('#gnb').find('ul');
			
			// 将应用插件的对象的当前值保存到data()中
			$this.data({
				'pos' : $this.css('position'),
				'top' : $this.css('top'),
				'left': $this.css('left')
			});
			
			// 加载文档时，滚动滑条时调用scrolledFix函数
			$win.bind('load scroll', scrolledFix);
			
			// 滚动到特定区域时停止导航的函数
			function scrolledFix() {
			
				// 判断浏览器及设备
				var UA = navigator.userAgent,
					iOS5 = UA.match(/iPhone OS 5/ig),
					android3 = UA.match(/android 3/ig),
					win_scrollTop = $win.scrollTop(),
					point = options.scrolled_point;
			
				// 检查options.scrolled_point值，当其低于特定点时不执行函数
				if(
					typeof point !== 'number' || 
					win_scrollTop < point - $this.outerHeight() &&
					(!iOS5 || !android3)
				) return false;
				
				if(win_scrollTop >= point) {	
					
					// 向应用插件的对象设置固定样式
					$this
						.css({
							'position': 'fixed',
							'z-index': 100,
							'top': 0,
							'left': 0,
							'width': '100%'
						})
						.addClass('scrolled');
					
					// 若未复制导航...
					if(!cloned) {
						$gnb_ul
							.clone()
							.appendTo('#header-bar div');
						cloned = true;	
					};
					
				} else {
					
					// 返回插件应用对象的样式
					$this
						.css({
							'position': $this.data('pos'),
							'top': $this.data('top'),
							'left': $this.data('left')
						})
						.removeClass('scrolled');
					
					// 若导航未复制...
					if(cloned) {
						$('#header-bar ul').remove();
						cloned = false;
					};
				
				};	
			
			};
				
		}); // e: return
	}; // e: plugin
	
	// win, doc, html, body 引用
	function refInit() {
		win 	= window, 
		doc 	= document,
		html 	= document.documentElement,
		body 	= document.body;
	};
	
})(jQuery);