/*功能：
		1、图片显示与放大；
		2、翻页
	使用方法：
		1、将需要放大的图片放到a标签内
		2、设置a标签rel属性为YLlightbox(如：<a href="img/11.jpg" rel="YLlightbox">)
		3、a标签连接为大图的连接地址
		4、a标签包裹在class="YLlightbox"的容器内
		5、只查看当前容器内所有图片
*/

/*=====鼠标移入延迟触发事件方法=====*/
$.fn.hoverDelay = function(options) {
	var defaults = {
		hoverDuring: 200,
		outDuring: 200,
		hoverEvent: function() {
			$.noop();
		},
		outEvent: function() {
			$.noop();
		}
	};
	var sets = $.extend(defaults, options || {});
	var hoverTimer, outTimer;
	return $(this).each(function() {
		$(this).hover(function() {
			clearTimeout(outTimer);
			hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
		}, function() {
			clearTimeout(hoverTimer);
			outTimer = setTimeout(sets.outEvent, sets.outDuring);
		});
	});
}

/*=====lightbox方法=====*/
/*1、图片显示与放大；2、翻页*/
var base_w, base_h, a_flag_index;
var imgSrcArray = []; //当前YLlightbox下目标图片的地址集合


//=======显示翻页按钮=======//
$("#YLimgcon").hoverDelay({
	hoverEvent: function() {
		if(imgSrcArray.length > 1) {
			if(a_flag_index <= 0) {
				$('#YLimgcon').children('.prev').hide();
				$('#YLimgcon').children('.next').fadeIn();
			} else if(a_flag_index >= (imgSrcArray.length - 1)) {
				$('#YLimgcon').children('.prev').fadeIn();
				$('#YLimgcon').children('.next').hide();
			} else {
				$('#YLimgcon').children('.prev,.next').fadeIn();
			}
		} else {
			$('#YLimgcon').children('.prev,.next').hide();
		}
	},
	outEvent: function() {
		$('#YLimgcon').children('.prev,.next').fadeOut();
	}
});
//=======关闭=======//
$('#YLimgwrap .YLt_close').click(function() {
	$('#YLimg').attr('src', '').width("").height(""); //清除属性
	$('#YLimgwrap').hide();
});


var result = window.matchMedia('(min-width:1200px)');
var result2 = window.matchMedia('(min-width:768px)');
if(result.matches) {
	console.log("大屏幕(>=1200)");
	$('.YLlightbox a[rel="YLlightbox"]').click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	//显示图片
	$('#YLimg').attr('src', $(this).attr('href')).css({
		'width': ($(window).width()*0.6)+'px'
	});
	$('#YLimgwrap').show();

	//定位
	var position_top = ($(window).height() - $('#YLimg').height() - 45) / 2;
	var position_left = ($(window).width() - $('#YLimg').width() - 20) / 2;
	$('#YLimgcon').css({
		'top': position_top,
		'left': position_left
	});
	//赋值数组(图片地址)
	imgSrcArray = []; //先清空
	var total_a = $(this).parents('.YLlightbox').find('a[rel="YLlightbox"]');
	for(var i = 0; i < total_a.length; i++) { //开始赋值
		imgSrcArray[i] = total_a.eq(i).attr('href');
	}
	a_flag_index = $(this).parent().parent().index();
	console.log(a_flag_index);
	console.log(imgSrcArray);
});
//=======上一页=======//
$('#YLimgcon .prev').click(function() {
	$('#YLimg').width("").height("").attr('src', imgSrcArray[a_flag_index - 1]).css({
		'width': ($(window).width()*0.6)+'px'
	});

	if(a_flag_index > 1) {
		$('#YLimgcon').children('.prev,.next').show();
	} else {
		$('#YLimgcon').children('.next').show();
		$('#YLimgcon').children('.prev').hide();
	}
	a_flag_index -= 1;
});
//=======下一页=======//
$('#YLimgcon .next').click(function() {
	$('#YLimg').width("").height("").attr('src', imgSrcArray[a_flag_index + 1]).css({
		'width': ($(window).width()*0.6)+'px'
	});
	
	if(a_flag_index < (imgSrcArray.length - 2)) {
		$('#YLimgcon').children('.prev,.next').show();
	} else {
		$('#YLimgcon').children('.next').hide();
		$('#YLimgcon').children('.prev').show();
	}
	a_flag_index += 1;
});
} else if(result2.matches) {
	console.log("中等屏幕(>=769&<=1199)");
	$('.YLlightbox a[rel="YLlightbox"]').click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	//显示图片
	$('#YLimg').attr('src', $(this).attr('href')).css({
		'width': ($(window).width()*0.8)+'px'
	});
	$('#YLimgwrap').show();

	//定位
	var position_top = ($(window).height() - $('#YLimg').height() - 45) / 2;
	var position_left = ($(window).width() - $('#YLimg').width() - 20) / 2;
	$('#YLimgcon').css({
		'top': position_top,
		'left': position_left
	});
	//赋值数组(图片地址)
	imgSrcArray = []; //先清空
	var total_a = $(this).parents('.YLlightbox').find('a[rel="YLlightbox"]');
	for(var i = 0; i < total_a.length; i++) { //开始赋值
		imgSrcArray[i] = total_a.eq(i).attr('href');
	}
	a_flag_index = $(this).parent().parent().index();
	console.log(a_flag_index);
	console.log(imgSrcArray);
});
//=======上一页=======//
$('#YLimgcon .prev').click(function() {
	$('#YLimg').width("").height("").attr('src', imgSrcArray[a_flag_index - 1]).css({
		'width': ($(window).width()*0.8)+'px'
	});

	if(a_flag_index > 1) {
		$('#YLimgcon').children('.prev,.next').show();
	} else {
		$('#YLimgcon').children('.next').show();
		$('#YLimgcon').children('.prev').hide();
	}
	a_flag_index -= 1;
});
//=======下一页=======//
$('#YLimgcon .next').click(function() {
	$('#YLimg').width("").height("").attr('src', imgSrcArray[a_flag_index + 1]).css({
		'width': ($(window).width()*0.8)+'px'
	});
	
	if(a_flag_index < (imgSrcArray.length - 2)) {
		$('#YLimgcon').children('.prev,.next').show();
	} else {
		$('#YLimgcon').children('.next').hide();
		$('#YLimgcon').children('.prev').show();
	}
	a_flag_index += 1;
});
} else {
	console.log("超小屏幕(<=768)");
	$('.YLlightbox a[rel="YLlightbox"]').click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	//显示图片
	$('#YLimg').attr('src', $(this).attr('href')).css({
		'width': ($(window).width()*0.8)+'px'
	});
	$('#YLimgwrap').show();

	//定位
	var position_top = ($(window).height() - $('#YLimg').height() - 45) / 2;
	var position_left = ($(window).width() - $('#YLimg').width() - 20) / 2;
	$('#YLimgcon').css({
		'top': position_top,
		'left': position_left
	});
	//赋值数组(图片地址)
	imgSrcArray = []; //先清空
	var total_a = $(this).parents('.YLlightbox').find('a[rel="YLlightbox"]');
	for(var i = 0; i < total_a.length; i++) { //开始赋值
		imgSrcArray[i] = total_a.eq(i).attr('href');
	}
	a_flag_index = $(this).parent().parent().index();
	console.log(a_flag_index);
	console.log(imgSrcArray);
});
//=======上一页=======//
$('#YLimgcon .prev').click(function() {
	$('#YLimg').width("").height("").attr('src', imgSrcArray[a_flag_index - 1]).css({
		'width': ($(window).width()*0.8)+'px'
	});

	if(a_flag_index > 1) {
		$('#YLimgcon').children('.prev,.next').show();
	} else {
		$('#YLimgcon').children('.next').show();
		$('#YLimgcon').children('.prev').hide();
	}
	a_flag_index -= 1;
});
//=======下一页=======//
$('#YLimgcon .next').click(function() {
	$('#YLimg').width("").height("").attr('src', imgSrcArray[a_flag_index + 1]).css({
		'width': ($(window).width()*0.8)+'px'
	});
	
	if(a_flag_index < (imgSrcArray.length - 2)) {
		$('#YLimgcon').children('.prev,.next').show();
	} else {
		$('#YLimgcon').children('.next').hide();
		$('#YLimgcon').children('.prev').show();
	}
	a_flag_index += 1;
});
}
