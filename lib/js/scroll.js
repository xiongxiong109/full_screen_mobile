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
		/*zepto的animate可以直接使用css3的transform属性,当动画时间设置为0的时候,会直接将css转变为当前属性,而不会产生动画,这一点要注意,不能使用.css()方法来设置*/
		// $pages.animate({'translate3d':'0,100%,0'},0);
		// $(".current").animate({'translate3d':'0,0,0'},0);

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
			$("#arrow").show();
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
			setTimeout(function(){
				$(".current")[0].className='page';
			},50);
		});

		$(".preCurrent")
		.live('scrollReady',function(){
			if($(this).data('disup')){
				$("#arrow").hide();
			}
			playAnimate($(this),'in',function(){
				isSwipe=false;
				setTimeout(function(){
					$(".preCurrent")[0].className='page current';
				},50);
			});
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
					$(".current")
					.animate({translate3d:'0,0,0'},0,function(){
						$(this).animate({translate3d:'0,-100%,0'},400);
					});
					$pages.eq(nxt).addClass('preCurrent')
					.animate({translate3d:'0,100%,0'},0,function(){
						$(this).animate({translate3d:'0,0,0'},400,function(){
							$(".current").trigger('scrollReady');
							$(this).trigger('scrollReady');
						});
					});
					break;
					case 'down':
					$(".current")
					.animate({translate3d:'0,0,0'},0,function(){
						$(this).animate({translate3d:'0,100%,0'},400);
					});
					
					$pages.eq(nxt).addClass('preCurrent')
					.animate({translate3d:'0,-100%,0'},0,function(){
						$(this).animate({translate3d:'0,0,0'},400,function(){
							$(".current").trigger('scrollReady');
							$(this).trigger('scrollReady');
						});
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
	};
})(Zepto);