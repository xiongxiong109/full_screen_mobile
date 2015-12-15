/*页面的预加载,包括bootstrap、preload、init*/ ;
(function($) {
	var canvas = $("canvas#pre");
	var proSpan = $("#preNum");
	canvas[0].width = canvas.parent().width();
	canvas[0].height = canvas.parent().height() * 0.2;
	var cnt = canvas[0].getContext("2d");
	var loadCnt = 0,
		progress = 0;
	var preloadTimer = null;
	$.preload = function(imgArr) {
		var len = imgArr.length;
		pre();
		function pre(){
			var img=new Image();
			img.onload=function(){
				if(loadCnt>=len-1){
					loadCnt++;
					progress=Math.floor(loadCnt/len*100);
					$.init();
				}
				else{
					loadCnt++;
					progress=Math.floor(loadCnt/len*100);
					pre();
				}
				proSpan.text([progress,'%'].join(''));
				drawCircle(canvas[0].height/2-8,loadCnt/len*360);
			}
			img.src=imgArr[loadCnt];
		}
	}

	$.init = function() {
		$(".preload").fadeOut(function(){
			$(".preload").remove();
			$(".page").eq(0).addClass('current').fadeIn(function(){
				$("#music-box").fadeIn();
				$.scroll();
			});
		});
	}

	function drawCircle(radio, arc) {
		cnt.clearRect(0,0,canvas[0].width,canvas[0].height);
		cnt.beginPath();
		cnt.strokeStyle = "#ff6b00";
		cnt.lineWidth = 2;
		cnt.arc(canvas[0].width / 2, canvas[0].height / 2, radio, 0, arc * Math.PI / 180);
		cnt.stroke();
	};
})(Zepto);