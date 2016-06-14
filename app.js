$(function() {
	$('body').css('overflow-x', 'hidden');
	var $body = $(document);
	var first = $('#set li').first().attr('id');
	var ll;
	var slideshowClick = true;

	var imagesArr = ["assets/images/focus2.jpg",
	"assets/images/race1.jpg",
	"assets/images/workout1.jpg",
	"assets/images/lee1.jpg",
	"assets/images/lee2.jpg",
	"assets/images/lee3.jpg",
	"assets/images/live1.jpg",
	"assets/images/body2.jpg"
	];
	
	var setLength = $('#set').width();
	var imageWidth = $('.image').width();
	var imageCount = $('#imageSet li').length;
	var moveBy = ((setLength)/(imageWidth))*(imageCount);
	
	loadImages();
	myFunction();
	liSelected = $('#l0');
	var source1, lid, index;
	lid = 'l0';
	liSelected.addClass('selected');
	
	$("#set li").click(function(){
		source1 = $('img', this).attr('src');
		lid = $(this).attr('id');
		var selectedSrc = $('#'+lid).find('img').prop('src');		
		first = lid;
		updateSlideId(selectedSrc);		
	});
	
	function getLastId(){
		var currentId = $('#imageSet > li').last().prop('id');
		return currentId;
	}
	
	function getFirstId(){
		var currentId = $('#imageSet > li').first().prop('id');
		return currentId;
	}

    $('.transitbox').click(function(){
	//alert("sdf");
		// Define initial position for slideshow
		$('#closeSlideShow').css('top', '-550px');
		$('#slideshow').css('top', '-500px');
		
		$('.background-wrap').css('-webkit-filter', 'brightness(0.5)');
		//$('.background-wrap video').css('opacity', '0.4');
		$('#header').fadeOut('normal');
		$('#container').fadeOut('normal');
		$('#slide').fadeOut('normal');
        
		slideshowClick = false;
		$('#overlay').fadeIn('slow',function(){
			$('#container').hide();
			$('#activator').hide();
			if($(window).width() > 1025){
				$('#slideshow').animate({'top':'100px'}, 400);
				$('#closeSlideShow').animate({'top':'60px'}, 400);
			}
			else{// if($(window).width == 1024){
				
				$('#slideshow').animate({'top':'180px'}, 400);
				$('#closeSlideShow').animate({'top':'140px'}, 400);				
			}
        });
    });
	$('#slideshow').click(false);
	
	// clicking on volume settings do not close the slide show
	$('#intro-wrap').on('click', function(e){
		e.stopPropagation();
	});
	
	$('body').bind('click', function(e){
		
		if(slideshowClick === false){
			slideshowClick = true;
			return;
		}
		else if(slideshowClick === true){
			$('.background-wrap').css('-webkit-filter', 'brightness(1)');
			$('#overlay').fadeIn('slow', function(){
				if($(window).width() > 1025){
					$('#slideshow').animate({'top':'1500px'}, 400);
					$('#closeSlideShow').animate({'top':'1550px'}, 400);
				}
				else{// if($(window).width == 1024){
					$('#slideshow').animate({'top':'1500px'}, 400);
					$('#closeSlideShow').animate({'top':'1550px'}, 400);
				}
				$('#header').fadeIn(1000);
				$('#container').fadeIn(1000);
				$('#activator').fadeIn(1000);
				$('#slide').fadeIn(1000);
				$('body').css('overflow-y', 'hidden');
			});	
		}
	});
	
	$('#content').click(function(){
        $('#slideshow').hide();
	});
	
    $('#boxclose').click(function(){
        $('#box').animate({'top':'-400px'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });
	

	function updateSlideId(src1){
		document.getElementById("slideId").src = src1;
	}
	
	function myFunction(){
		var src = $('ul>li').find('img').prop('src');
		var source = src;
		document.getElementById("slideId").src = source;
	}
	
	function loadImages(){
		imagesArr.forEach(function(value,index) {
			$('#i' + index).attr('src', value);
		});
	}
	
	
	var currentElement = $("li:first");
	
	$('input').click(function(){
		var bid = this.id;
		navigateImage(bid);
	});
	function navigateImage(bid){
	//alert(l1);
		if(bid === 'prevImage'){
			if(first === getFirstId()){
				return;
			}
			else{
				index = first.substring(1, first.length);
				ll = 'l'+(--index);
				updateSlideId($('#'+ll).find('img').prop('src'));
				first  = ll;
				console.log("left"+l1);
			}
		}
		else if(bid == 'nextImage'){
			if(first === getLastId()){
				console.log("KL " + first);
				return;
			}
			else{
				index = first.substring(1, first.length);
				first = 'l'+(++index);
				updateSlideId($('#' + first).find('img').prop('src'));
				currentElement = currentElement.next();
				ll = currentElement.attr('id');
				//alert(currentElement);
				//console.log(index + " right");
			}
		}
	}
	
	$(window).keydown(function(e){
			movement(e);
	});	
	function movement(e){
		if(e.which === 39){
			$body.bind('scroll', function() {
			// "Disable" the horizontal scroll.
			if ($body.scrollLeft() !== 0) {
				$body.scrollLeft(0);
			}
        });
			if(lid === getLastId()){
				
				return;
			}
			else if(lid.substring(1, lid.length)== null){
				alert("qwe");
			}
			else{
				index = lid.substring(1, lid.length);
				lid = 'l'+(++index);
				updateSlideId($('#' + lid).find('img').prop('src'));
				currentElement = currentElement.next();
			}
		}
		if(e.which === 37){
			if(lid === getFirstId()){
				return;
			}
			else{
				index = lid.substring(1, lid.length);
				lid = 'l'+(--index);
				updateSlideId($('#'+lid).find('img').prop('src'));
			}
		}
	}
	
	// Background music
	var bgMusic = document.getElementById('audio-bg-elem');
	
	$('#pausor').click(function(){
		if(bgMusic.paused){
			bgMusic.play();
		}
		else{
			bgMusic.pause();
		}
	});
	
	$('#mutor').click(function(){
		if(bgMusic.muted){
			$('#audio-bg-elem').prop('muted',false);
		}
		else{
			$('#audio-bg-elem').prop('muted', true);
		}
	});
	
	// Swipe functionality
	
	function navigateLeft(){
		if(first === getLastId()){
				console.log("KL " + first);
				return;
			}
			else{
				index = first.substring(1, first.length);
				first = 'l'+(++index);
				updateSlideId($('#' + first).find('img').prop('src'));
				currentElement = currentElement.next();
				ll = currentElement.attr('id');
				//alert(currentElement);
				console.log(first + " right");
			}
	}
	
	function navigateRight(){
		if(first === getFirstId()){
		
				return;
		}
		else{
			index = first.substring(1, first.length);
			ll = 'l'+(--index);
			updateSlideId($('#'+ll).find('img').prop('src'));
			first  = ll;
			console.log("left"+l1);
		}
	}
	
	$(document).on("pagecreate", "#show",function(){
		var currentImageId = $('#slideId').prop('src');
		$("#show img").on("swipeleft", function(){
			//alert("sdf: " + currentImageId);
			navigateLeft();
		});
		$("#show img").on("swiperight", function(){
			//alert("sdf: " + currentImageId);
			navigateRight();
		});
	});
	
	
				
	
});