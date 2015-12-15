;(function($){
	$.audio=function(){
		var oAudio=$("#audio");
		oAudio[0].play();
		$(".music").addClass('rotate');
		var clickEvent=$.testBrowser().mobile ? 'tap' : 'click';
		$(".music").on(clickEvent,function(){
			if($(this).hasClass('rotate')){
				oAudio[0].pause();
				$("#music-box").addClass('bg-none');
			}
			else{
				oAudio[0].play();
				$("#music-box").removeClass('bg-none');
			}
			$(this).toggleClass('rotate');
		});
	};
})(Zepto);