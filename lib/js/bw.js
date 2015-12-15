;(function($){
	$.testBrowser=function(){
			var bw=navigator.userAgent;
			//判断所有移动端
			function isMobile(){
				return /AppleWebKit.*Mobile/i.test(bw) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/i.test(bw);
			}
			//判断是否微信
			function isWeixin(){
				return /MicroMessenger/i.test(bw);
			}

			//判断是否安卓
			function isAndroid(){
				return /Android/i.test(bw);
			}

			//判断是否苹果
			function isIOS(){
				return /iPhone|iPod|iPad/i.test(bw);
			}

			return {
					mobile:isMobile(),
					ios:isIOS(),
					android:isAndroid(),
					weChat:isWeixin()
			};
	};
})(Zepto);