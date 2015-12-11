/*自定义swiper事件
这里的swiper事件是基于浏览器的判断
当用户使用的是PC浏览器的时候,使用mouse事件模拟swiper
当用户使用的是移动端浏览器的时候,使用zepto的swiperLeft、swiperRight、swiperUp、swiperDown
*/
;(function($){
		document.addEventListener('touchmove',function(){
			return false;
		},false);
		//给元素绑定模拟的swiper事件
		$.fn.bindSwiper=function(opt){
			var defaults={
				offset:0.1//滑动偏移量10%
			};
			opt=$.extend(defaults,opt);
			var obj=$(this);
			var w=obj.width(),h=obj.height();
			var startX,startY,endX,endY,disX,dixY;

			obj.on('mousedown',function(e){
				startX=e.clientX;
				startY=e.clientY;
			})
			.on('mousemove',function(e){
				if(e.preventDefault){
					e.preventDefault();
				}
				else{
					e.returnValue=false;
				}
				return false;
			})
			.on('mouseup',function(e){
				endX=e.clientX;
				endY=e.clientY;
				disX=endX-startX;
				disY=endY-startY;
				var arcAngle=Math.atan(disY/disX);/*用+-0.5、判断角度是否过半*/
				if(!isNaN(arcAngle)){
					if(Math.abs(arcAngle)<=0.5){//左右滑屏
						if(disX>=w*opt.offset){//trigger swiperRight
							obj.trigger('swipeRight');
						}
						if(disX<=0 && Math.abs(disX)>w*opt.offset){
							obj.trigger('swipeLeft');
						}
					}
					else{//上下滑屏
						if(disY>=h*opt.offset){
							obj.trigger('swipeDown');	
						}
						if(disY<=0 && Math.abs(disY)>h*opt.offset){
							obj.trigger('swipeUp');
						}
					}
				}
			});
	}
})(Zepto);