// main.js
// 메인페이지 js
(function($){
	// 헤더 푸터 불러오기
	var headBox = $('#headBox');
	headBox.load('./header.html');
	var footBox = $('#footBox');
	footBox.load('./footer.html');

	// =============================================
	// 슬라이드배너
	var timed = 1000;
	var viewBox = $('#viewBox');
	var viewArea = viewBox.children('.view_area');
	var viewLi = viewArea.children('div');

	var indicator = $('.view_indicator')
	var indiUl = indicator.find('ul');
	var indiLi = indicator.find('li');
	var indiLink = indiUl.find('a');

	var viewCopy = viewLi.eq(-1).clone(true);
	
	viewArea.prepend(viewCopy);
	viewLi = viewArea.children('div');
	var viewLen = viewLi.length;
	
	viewArea.css({'width': viewLen * 100 + '%','position':'relative','left':-100 + '%'	});
	viewLi.css({width: 100 / viewLen + '%' });
	
		var i = 0;
		var MyProSlide = function(){
			i += 1;
			var iPer = -i * 100;
			viewArea.stop().animate({'marginLeft': iPer +'%'}, timed, function(){
				if( i >= viewLen-2 ){
					viewArea.css({'marginLeft': 100 + '%'});	i = -1;	}
				//인디케이터 
				indiLi.eq(i).addClass('action');
				indiLi.eq(i).siblings('li').removeClass('action');
			});
		};
	
		setInterval(function(){	MyProSlide();	}, timed*3);

	// ====================================================

})(jQuery);