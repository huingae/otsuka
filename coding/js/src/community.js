// community.js
// 홍보자료 페이지

(function($){

	var headBox = $('#headBox');
	headBox.load('./header.html');
	var footBox = $('#footBox');
	footBox.load('./footer.html');


	// 갤러리 만들기

	var gallery = $('.gallery');
	// var galleryListcode = '	<div class="list_area clearfix">\
	// 												<div class="list_01 little_list"></div>\
	// 												<div class="list_02 little_list"></div>\
	// 												<div class="list_03 little_list"></div>\
	// 												</div>';
	var galleryListcode = '<div class="list_area clearfix"><div class="little_list"></div><div class="little_list"></div><div class="little_list"></div></div>';

	var moreBtn = $('.more').children('button');


	$.ajax({
		url:"../data/ad.json",
	}).done(function(jsonResult){
		var i = 0;
		var listArea;
		var list;
		var myData = jsonResult;
		console.log(myData);

		var loadData = function(n){
			var viewN = n || 1;
			var plusList = i + viewN;
			for(; i < plusList; i++){
			gallery.append(galleryListcode);
			listArea = gallery.children('.list_area').eq(-1);
			// list = listArea.find('div');
			list = $('.little_list').eq(i);
			// console.log(i);
			list.text(myData[i].name);
			list.css({backgroundImage:'url(../img/sub_pg/ad/'+ myData[i].link +'.jpg)'})
		}
	}
	loadData(2);
	
	moreBtn.on('click',function(){
		// gallery.append(galleryListcode);
		loadData();
	})
})

	// 'url(../img/sub_pg/ad/'++'.jpg)'

})(jQuery);