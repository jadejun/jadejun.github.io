$(document).ready(function(){
	$(".btn_menu").click(function(){
		$(".mark").fadeIn();
		$(".left_menu_wrap").addClass("on");
	});
	$(".mark").click(function(){
		$(".left_menu_wrap").removeClass("on");
		$(".mark").fadeOut();
	});
	$(".st_list li .mgo").click(function(){
		$(this).parents("li").find(".st_more_box").addClass("on");
	});
	$(".st_list li .mgo_off").click(function(){
		$(this).parents("li").find(".st_more_box").removeClass("on");
	});

	//graph
	$(".graph_line").each(function(index){
		var width = $(".graph_line").eq(index).find("strong").text();
		width = parseInt(width.replace('%', '')) >= 100 ? 100 : parseInt(width) ;
		$(".graph_line").eq(index).animate({width:width+'%'},1000);
	});

	$('.left_menu li a').click(function(){
		$(".mark").trigger('click');
	});
	
});

function hart(e) {
	if ($(e).hasClass("on"))
	{
		$(e).find("img").attr("src","images/ico_hart.png");
		$(e).removeClass("on");
	}
	else
	{
		$(e).find("img").attr("src","images/ico_hart_on.png");
		$(e).addClass("on");
	}
	return false;
}

function share(e) {
	if ($(e).hasClass("on"))
	{
		$(e).find("img").attr("src","images/ico_share.png");
		$(e).removeClass("on");
	}
	else
	{
		$(e).find("img").attr("src","images/ico_share_on.png");
		$(e).addClass("on");
	}
	return false;
}

function hart02(e) {
	if ($(e).hasClass("on"))
	{
		$(e).find("img").attr("src","images/ico_hart02.png");
		$(e).removeClass("on");
	}
	else
	{
		$(e).find("img").attr("src","images/ico_hart02_on.png");
		$(e).addClass("on");
	}
	return false;
}

$(function(){
	//loading event
	$('#load_layer').delay(1000).fadeOut('slow');

});