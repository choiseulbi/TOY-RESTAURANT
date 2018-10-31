
$(function(){

	if( $("#body_container.main_page").length ){
		toy.main.init();
	}
	if( $("#body_container.about_page").length ){
		toy.about.init();
	}

});

var toy = {}

toy = {
	/* 404 error */
	notFound : function(){
		alert('이 페이지는 현재 작업중입니다.');
		return false;
	},
	/* 공통 모션 */
	motion : function(el, motionType){
		el.css({opacity:1}).addClass("animated " + motionType);
	},
	/* tab */
	tab : function(){
		var $wrap = $(".js-tab-wrap");
		var $menuLi = $wrap.find(".js-tab-menu li");
		var $tabCont = $wrap.find(".js-tab-cont");

		// init
		action(0);

		// action
		$menuLi.find("a").on("click", function(){
			var idx = $menuLi.index( $(this).parent() );
			action(idx);
			return false;
		});
		function action(idx){
			$menuLi.removeClass("active");
			$menuLi.eq(idx).addClass("active");
			$tabCont.removeClass("animated scaleUp");
			$tabCont.hide();
			$tabCont.eq(idx).show();
			$tabCont.eq(idx).addClass("animated scaleUp");
		}
	}
}





/*
*	main
*/
toy.main = {
	init : function(){
		this.sns();
	},
	sns : function(){
		$(".sns_section .content_wrap a").on({
			"mouseover": function(){
				$(this).find("img").attr("src", function(){ return $(this).attr("src").replace("_default","_over") });
			},
			"mouseleave" : function(){
				$(this).find("img").attr("src", function(){ return $(this).attr("src").replace("_over","_default") });
			}
		});
	}
}




/*
*	about
*/
toy.about = {
	init : function(){
		this.accordion();
	},
	accordion : function(){
		var $item = $(".content_wrap .item");
		$item.find("a").on("click", function(){
			var idx = $item.index( $(this).parent() );
			var $thisItem = $item.eq(idx);
			var openState = $thisItem.hasClass("active");

			$item.removeClass("active");
			$item.find(".cont").slideUp();

			if( openState ){
				// $item.eq(idx).find(".cont").toggleSlide();
				$item.eq(idx).removeClass("active");
				$item.eq(idx).find(".cont").slideUp();
			} else {
				$item.eq(idx).addClass("active");
				$item.eq(idx).find(".cont").slideDown();
			}
			return false;
		});
	}
}







