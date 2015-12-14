/*将scroll注册成插件,可以直接通过$.scroll()调用*/
;(function($){
	$.scroll=function(){
		var $pages=$(".page");
		var len=$pages.length;
		var nxt=0;
		var isSwipe=false;
		if(!$.testBrowser().mobile){/*非移动端,给它绑定模拟touch事件*/
			$pages.bindSwiper();
		}
		playAnimate( $(".current"),'in');
		$(".current")
		.live('swipeUp',function(){
			var $cur=$(this);
			var preNxt=$(this).index()+1;
			nxt=preNxt > len-1 ? 0 :preNxt;
			if(!$cur.data('disup')){/*根据自定义属性的disup与disdown来判断是否可以滚动*/
				if($cur.data('hasleave')){
					playAnimate($cur,'out',function(){
						swipePage('up');
					});
				}
				else{
					swipePage('up');
				}
			}
		})
		.live('swipeDown',function(){
			var $cur=$(this);
			var preNxt=$(this).index()-1;
			nxt=preNxt < 0 ? len-1 : preNxt;
			if(!$cur.data('disdown')){/*根据自定义属性的disup与disdown来判断是否可以滚动*/
				if($cur.data('hasleave')){
					playAnimate($cur,'out',function(){
						swipePage('down');
					});
				}
				else{
					swipePage('down');
				}
			}
		})
		.live('scrollReady',function(){
			var oAni=$(this).find('.ani');
			oAni.length &&
			oAni.css({
				'animation':'',
				'-webkit-animation':''
			}).hide();
			$(this)[0].className='page';
		});

		$(".preCurrent")
		.live('scrollReady',function(){
			playAnimate($(this),'in');
			$(this)[0].className='page current';
			isSwipe=false;
		});

		/*
		滑屏函数
		@obj:当前dom
		@nxt:下一个的索引
		@direc:滑动方向
		*/
		function swipePage(direc){
			if(!isSwipe){
				isSwipe=true;
				switch(direc){
					case 'up':
					$(".current").css({
						'transform':'translate3d(0,0,0)',
						'-webkit-transform':'translate3d(0,0,0)'
					})
					.animate({
						'transform':'translate3d(0,-100%,0)',
						'-webkit-transform':'translate3d(0,-100%,0)'
					},function(){
						$(this).trigger('scrollReady');
					});
					$pages.eq(nxt).addClass('preCurrent').css({
						'transform':'translate3d(0,100%,0)',
						'-webkit-transform':'translate3d(0,100%,0)'
					})
					.animate({
						'transform':'translate3d(0,0,0)',
						'-webkit-transform':'translate3d(0,0,0)'
					},function(){
						$(this).trigger('scrollReady');
					});
					break;
					case 'down':
					$(".current").css({
						'transform':'translate3d(0,0,0)',
						'-webkit-transform':'translate3d(0,0,0)'
					})
					.animate({
						'transform':'translate3d(0,100%,0)',
						'-webkit-transform':'translate3d(0,100%,0)'
					},function(){
						$(this).trigger('scrollReady');
					});
					$pages.eq(nxt).addClass('preCurrent').css({
						'transform':'translate3d(0,-100%,0)',
						'-webkit-transform':'translate3d(0,-100%,0)'
					})
					.animate({
						'transform':'translate3d(0,0,0)',
						'-webkit-transform':'translate3d(0,0,0)'
					},function(){
						$(this).trigger('scrollReady');
					});
					break;
				}
			}
		}

		/*播放动画函数*/
		function playAnimate(obj,inOut,cb){
			var oAnis=$(obj).find('.ani').filter('[data-'+inOut+']');
			var len=oAnis.length;
			var cnt=0;
			oAnis.each(function(idx,ele){
				if($(ele).data(inOut)){
					$(ele).css({
						'-webkit-animation':$(ele).data(inOut),
						'animation':$(ele).data(inOut)
					});
				}
				$(ele).one('webkitAnimationEnd animationend',function(){
					if(cnt>=len-1){
						cb && cb.call();
					}
					else{
						cnt++;
					}
				});
			});
			oAnis.css('display','block');
		}
	}
})(Zepto);