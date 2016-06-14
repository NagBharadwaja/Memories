$(function(){

	/*function a(){
		$('.transitbox').animate({'right': '-10px'}, 1000);
		$('.transitbox').css({
			'-webkit-transform' : 'scale(1.2)'
		});
	}*/
	x=0;
	$('#slide').hover(function(){
	
		console.log("dsfg");
		//$('.transitbox').animate({'right': '5px'}, 100);
			//setInterval(a());
		/*var $post = $('.axis');
		setInterval(function(){
			$post.toggleClass("move-left");
		}, 1000);*/
		$('.transitbox').animate({'right': '-10px'}, 1000);
		$('.transitbox').show("scale", {percent: 150}, 4000);
		$('.transitbox').addClass('scaleBox');
		x=1;
	});
	if(x==1){
		alert("sdgfd");
	}

});