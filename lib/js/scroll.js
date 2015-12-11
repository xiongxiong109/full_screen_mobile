$(function(){
	if(!$.testBrowser().mobile){
		$(".page-inner").bindSwiper();
		$(".current .page-inner").on('swipeUp',function(){
			console.log('x');
		});
	}
	else{
		$(".page-inner").on('swipeUp',function(){
			console.log('x');
		});
	}
});