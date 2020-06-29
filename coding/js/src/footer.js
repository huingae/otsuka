// footer.js
// 푸터영역
(function($){

	// top 버튼
	var topBtn = $('.top_btn');

	topBtn.on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0});
	});


})(jQuery);