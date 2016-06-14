$(function(){

if($(window).width() > 1024){
$('.open-intro').click(function(){
	$('#intro-wrap').animate({
		right: '-80',
	}, 500, function(){
		// Animation complete
	});
	$('.open-intro').hide();
	$('.close-intro').show();
});
}

$('.close-intro').click(function(){
	$('#intro-wrap').animate({
		right: '-210',
	}, 500, function(){
			// Animation complete
	});
	$('.open-intro').show();
	$('.close-intro').hide();
});


  /*$('.switch').change(function(){
    $(this).toggleClass('checked');
	$('#pause').hide();
	$('#resume').show();
  });*/
  $('.switch').change(function(){
    $(this).toggleClass('checked');
  });
  var bgMusic = document.getElementById('audio-bg-elem');
  $('.round').click(function(){
	if($('#pause').is(":visible")){
		$('#pause').hide();
		$('#resume').show();
	}
	else if($('#resume').is(":visible")){
		$("#resume").hide();
		$("#pause").show();
	}
	if(bgMusic.paused){
			bgMusic.play();
		}
	else{
			bgMusic.pause();
	}
  });
  
  $('.round1').click(function(){
	if($('#mute').is(":visible")){
		$('#mute').hide();
		$('#unmute').show();
	}
	else if($('#unmute').is(":visible")){
		$("#unmute").hide();
		$("#mute").show();
	}
	if(bgMusic.muted){
			$('#audio-bg-elem').prop('muted',false);
	}
	else{
			$('#audio-bg-elem').prop('muted', true);
	}
	
  });
  
  if($(window).width() == 1024){
	
	$('.open-intro').click(function(){
		$('#intro-wrap').animate({
			right: '-100',
		}, 500, function(){
		// Animation complete
	});
	$('.open-intro').hide();
	$('.close-intro').show();
	});
	
  }

// Adjust volume of the background audio.  
 $('#volumeSlider').change(function(){		
	$('#audio-bg-elem').prop('volume', $('input[type=range]').val());
});

});