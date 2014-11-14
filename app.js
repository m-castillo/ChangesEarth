$(document).ready(function() {

	/* Earthquakes */

	$("#box1").click(function(){
		$("#earthquake, #volcano, #earthquake, #tsunami, #landslide, #title").hide();
		$("#eqSp, #eqVideo, #title2").show();
		$("#box1, #box2, #box3").addClass("white");
		$("#box2, #box3, #box4").off("click");
	});

	$(".cover").click(function(){
		$("#eqSp, #eqEn, #eqVideo, #title2").hide();
		$("#volcano, #earthquake, #tsunami, #landslide, #title").show();
		$("#box1, #box2, #box3, .cover").removeClass("white");
		$("#box2, #box3, #box4").on("click");
	});

	$("#eqSp").click(function(){
		$("#eqSp").fadeOut();
		$("#eqEn").fadeIn();
	});

	$("#eqEn").click(function(){
		$("#eqEn").fadeOut();
		$("#eqSp").fadeIn();
	});

	/* Volcanos */

	$("#box2").click(function(){
		$("#earthquake, #volcano, #earthquake, #tsunami, #landslide, #title").hide();
		$("#volSp, #volVideo, #title2").show();
		$("#box1, #box2, #box3").addClass("vol");
		$("#box1, #box3, #box4").off("click");
	});

	$(".cover").click(function(){
		$("#volSp, #volEn, #volPic, #volVideo, #title2").hide();
		$("#volcano, #earthquake, #tsunami, #box4, #landslide, #title").show();
		$("#box1, #box2, #box3, .cover").removeClass("vol");
		$("#box1, #box3, #box4").on("click");
	});

	$("#volSp").click(function(){
		$("#volSp").fadeOut();
		$("#volEn").fadeIn();
	});

	$("#volEn").click(function(){
		$("#volEn").fadeOut();
		$("#volSp").fadeIn();
	});	

	/* Tsunamis */

	$("#box3").click(function(){
		$("#earthquake, #volcano, #earthquake, #tsunami, #landslide, #title").hide();
		$("#tsuSp, #tsuVideo, #title2").show();
		$("#box1, #box2, #box3").addClass("tsu");
		$("#box1, #box2, #box4").off("click");
	});

	$(".cover").click(function(){
		$("#tsuSp, #tsuEn, #tsuPic, #tsuVideo, #title2").hide();
		$("#volcano, #earthquake, #tsunami, #box4, #landslide, #title").show();
		$("#box1, #box2, #box3, .cover").removeClass("tsu");
		$("#box1, #box2, #box4").on("click");
	});

	$("#tsuSp").click(function(){
		$("#tsuSp").fadeOut();
		$("#tsuEn").fadeIn();
	});

	$("#tsuEn").click(function(){
		$("#tsuEn").fadeOut();
		$("#tsuSp").fadeIn();
	});	

	/* Landslide */

	$("#box4").click(function(){
		$("#earthquake, #volcano, #earthquake, #tsunami, #landslide, #title").hide();
		$("#lsSp, #lsVideo, #title2").show();
		$("#box1, #box2, #box3").addClass("ls");
		$("#box1, #box3, #box2").off("click");
	});

	$(".cover").click(function(){
		$("#lsSp, #lsEn, #lsPic, #lsVideo, #title2").hide();
		$("#volcano, #earthquake, #tsunami, #box4, #landslide, #title").show();
		$("#box1, #box2, #box3, .cover").removeClass("ls");
		$("#box1, #box3, #box2").bind("click");
	});

	$("#lsSp").click(function(){
		$("#lsSp").fadeOut();
		$("#lsEn").fadeIn();
	});

	$("#lsEn").click(function(){
		$("#lsEn").fadeOut();
		$("#lsSp").fadeIn();
	});	










});