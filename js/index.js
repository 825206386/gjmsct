//引用的插件初始化
new WOW().init();

var scroH = $(window).scrollTop();
var navH = $("#wfqdhl").offset().top;
if(scroH >= navH) {
	$("#wfqdhl").css({
		"position": "fixed",
		"top": 0,
		"z-index": 2999
	});
} else if(scroH < navH) {
	$("#wfqdhl").css({
		"position": "static"
	});
}

//导航条
$(function() {
	//获取要定位元素距离浏览器顶部的距离
	var navH = $("#wfqdhl").offset().top;
	//滚动条事件
	$(window).scroll(function() {
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if(scroH >= navH) {
			$("#wfqdhl").css({
				"position": "fixed",
				"top": 0,
				"z-index": 2999
			});
		} else if(scroH < navH) {
			$("#wfqdhl").css({
				"position": "static"
			});
		}
	})
})

$('.navbar-collapse a').click(function() {
	$(".navbar-collapse").collapse('hide');
});

function add(n) {
	$('.wfqul li').eq(n).addClass('current').siblings().removeClass('current');
}
$(window).scroll(function() {
	if($(window).scrollTop() > $('body>.wfqdiv').eq(6).offset().top - 80) {
		add(6);
	} else if($(window).scrollTop() > $('body>.wfqdiv').eq(5).offset().top - 80) {
		add(5);
	} else if($(window).scrollTop() > $('body>.wfqdiv').eq(4).offset().top - 80) {
		add(4);
	} else if($(window).scrollTop() > $('body>.wfqdiv').eq(3).offset().top - 80) {
		add(3);
	} else if($(window).scrollTop() > $('body>.wfqdiv').eq(2).offset().top - 80) {
		add(2);
	} else if($(window).scrollTop() > $('body>.wfqdiv').eq(1).offset().top - 80) {
		add(1);
	} else {
		add(0);
	}
});
$('.wfqul li').click(function() {
	var num = $('body>.wfqdiv').eq($(this).index()).offset().top;
	$('html,body').animate({
		'scrollTop': num
	}, 1000);
});
$(".wfqhd").click(function() {    
	$("html, body").animate({
		scrollTop: $($(this).attr("href")).offset().top - 79 + "px"
	}, 1000);    
	return false;
});

jQuery(document).ready(function($) {

	if($('.iso-box-wrapper').length > 0) {

		$('.filter-wrapper li a').click(function() {

			var $container = $('.iso-box-wrapper');
			var $this = $(this),
				filterValue = $this.attr('data-filter');

			$container.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});

			if($this.hasClass('selected')) {
				return false;
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

			return false;
		});

	}

});

var result = window.matchMedia('(min-width:1200px)');
var result2 = window.matchMedia('(min-width:768px)');
if(result.matches) {
	console.log("大屏幕(>=1200)");
	var num = 0;
	var nu = 0;
	var timer;

	function gogo() {
		timer = setInterval(function() {
			num++;
			if(num > 3) {
				num = 0;
				$('#box').css('left', -num * 458 + 'px');
				num = 1;
			}
			$('#box').animate({
				'left': -num * 458 + 'px'
			}, 500);
			nu++;
			if(nu > 2) nu = 0;
			$('ol li').eq(nu).addClass('current');
			$('ol li').eq(nu).siblings().removeClass('current');
		}, 3000)
	}
	gogo();

	$('#xlbox').hover(function() {
		clearInterval(timer);
	}, function() {
		gogo();
	});

	$('#left').click(function() {
		num--;
		if(num < 0) {
			num = 3;
			$('#box').css('left', -num * 458 + 'px');
			num = 2;
		}
		$('#box').animate({
			'left': -num * 458 + 'px'
		}, 500);
		nu--;
		if(nu < 0) nu = 2;
		$('ol li').eq(nu).addClass('current');
		$('ol li').eq(nu).siblings().removeClass('current');
	});
	$('#right').click(function() {
		num++;
		if(num > 3) {
			num = 0;
			$('#box').css('left', -num * 458 + 'px');
			num = 1;
		}
		$('#box').animate({
			'left': -num * 458 + 'px'
		}, 500);
		nu++;
		if(nu > 2) nu = 0;
		$('ol li').eq(nu).addClass('current');
		$('ol li').eq(nu).siblings().removeClass('current');
	});

	$('ol li').click(function() {
		num = $(this).index();
		$('#box').animate({
			'left': -num * 458 + 'px'
		}, 500);
		nu = $(this).index();
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
	});
} else if(result2.matches) {
	console.log("中等屏幕(>=769&<=1199)");
	var num = 0;
	var nu = 0;
	var timer;

	function gogo() {
		timer = setInterval(function() {
			num++;
			if(num > 3) {
				num = 0;
				$('#box').css('left', -num * 395 + 'px');
				num = 1;
			}
			$('#box').animate({
				'left': -num * 395 + 'px'
			}, 500);
			nu++;
			if(nu > 2) nu = 0;
			$('ol li').eq(nu).addClass('current');
			$('ol li').eq(nu).siblings().removeClass('current');
		}, 3000)
	}
	gogo();

	$('#xlbox').hover(function() {
		clearInterval(timer);
	}, function() {
		gogo();
	});

	$('#left').click(function() {
		num--;
		if(num < 0) {
			num = 3;
			$('#box').css('left', -num * 395 + 'px');
			num = 2;
		}
		$('#box').animate({
			'left': -num * 395 + 'px'
		}, 500);
		nu--;
		if(nu < 0) nu = 2;
		$('ol li').eq(nu).addClass('current');
		$('ol li').eq(nu).siblings().removeClass('current');
	});
	$('#right').click(function() {
		num++;
		if(num > 3) {
			num = 0;
			$('#box').css('left', -num * 395 + 'px');
			num = 1;
		}
		$('#box').animate({
			'left': -num * 395 + 'px'
		}, 500);
		nu++;
		if(nu > 2) nu = 0;
		$('ol li').eq(nu).addClass('current');
		$('ol li').eq(nu).siblings().removeClass('current');
	});

	$('ol li').click(function() {
		num = $(this).index();
		$('#box').animate({
			'left': -num * 395 + 'px'
		}, 500);
		nu = $(this).index();
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
	});
} else {
	console.log("超小屏幕(<=768)");
	var num = 0;
	var nu = 0;
	var timer;

	function gogo() {
		timer = setInterval(function() {
			num++;
			if(num > 3) {
				num = 0;
				$('#box').css('left', -num * 345 + 'px');
				num = 1;
			}
			$('#box').animate({
				'left': -num * 345 + 'px'
			}, 500);
			nu++;
			if(nu > 2) nu = 0;
			$('ol li').eq(nu).addClass('current');
			$('ol li').eq(nu).siblings().removeClass('current');
		}, 3000)
	}
	gogo();

	$('#xlbox').hover(function() {
		clearInterval(timer);
	}, function() {
		gogo();
	});

	$('#left').click(function() {
		num--;
		if(num < 0) {
			num = 3;
			$('#box').css('left', -num * 345 + 'px');
			num = 2;
		}
		$('#box').animate({
			'left': -num * 345 + 'px'
		}, 500);
		nu--;
		if(nu < 0) nu = 2;
		$('ol li').eq(nu).addClass('current');
		$('ol li').eq(nu).siblings().removeClass('current');
	});
	$('#right').click(function() {
		num++;
		if(num > 3) {
			num = 0;
			$('#box').css('left', -num * 345 + 'px');
			num = 1;
		}
		$('#box').animate({
			'left': -num * 345 + 'px'
		}, 500);
		nu++;
		if(nu > 2) nu = 0;
		$('ol li').eq(nu).addClass('current');
		$('ol li').eq(nu).siblings().removeClass('current');
	});

	$('ol li').click(function() {
		num = $(this).index();
		$('#box').animate({
			'left': -num * 345 + 'px'
		}, 500);
		nu = $(this).index();
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
	});
}