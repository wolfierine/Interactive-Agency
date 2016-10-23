$(document).ready(function(){

	smoothScroll();

	//turn on animations for header only 
	if($(window).width() >= 960){
		
		$('.revealOnLoad:not(.animated)').each(function(){
			var $this = $(this);
			$this.css("opacity", 1);
			$this.addClass('animated ' + $this.data('animation'));
			}
		);
	}

	//turn on animations when elements are in viewport
	$(window).on("scroll", function(){

		if($(window).width() >= 960){
			revealOnScroll();
		}
	})






	var left_arrow = $(".left-arrow"),
		right_arrow = $(".right-arrow"),
		current_portfolio = $(".show-me"),
		box_content = $(".box"),
		width = 100,
		click = 1,
		hamburger = $(".hamburger"),
		nav = $("nav"),
		logo = $(".logo"),
		links = $("nav a");

		//arrows for portfolio content
	right_arrow.on("click", function(){
		if(click >= 2){
			current_portfolio.css("transform","translateX("+200+"%)");
		}
		else{
			width+=100;
			click++;
			current_portfolio.css("transform","translateX("+click+"00%)");
			box_content.css("opacity", 0);
			$(".box-"+ click).css("opacity", 1);
		}
	});

	left_arrow.on("click", function(){
		if(click <= 0){
			current_portfolio.css("transform","translateX("+0+"%)");
		}
		else{
			width-=100;
			click--;
		//console.log("width: "+ width + " click: " +click);
		current_portfolio.css("transform","translateX("+click+"00%)");
		box_content.css("opacity", 0);
		$(".box-"+ click).css("opacity", 1);
		}
	});


	hamburger.on("click", function(){
		nav.toggleClass("active");
		logo.toggleClass("active");
	});

	links.on("click", function(){
		nav.removeClass("active");
	});



});





function revealOnScroll(){

var $window = $(window),
	scrolled = $window.scrollTop(), 
	win_height_padded = $window.height() * 1.1;

	$('.revealOnScroll:not(.animated)').each(function(){
		var $this = $(this), offsetTop = $this.offset().top;
		if(scrolled + win_height_padded > offsetTop){
			if($this.data('timeout')){
				window.setTimeout(function(){
					$this.addClass('animated ' + $this.data('animation'));
				}, parseInt($this.data('timeout'), 10));
			}else{
				$this.addClass('animated ' + $this.data('animation'));
			}
		}
	});
	$('.revealOnScroll.animated').each(function(index){
		var $this = $(this), offsetTop = $this.offset().top;
		if(scrolled + win_height_padded < offsetTop){
			$(this).removeClass('animated bounceInLeft bounceInRight pulse fadeIn flipInX');
		}
	})
}	
	

function smoothScroll(){
	$("header a").click(function(e){
		e.preventDefault();
		var target = $(this).data("target");
		
		$("html body").animate({
			scrollTop: $("#" + target).offset().top}, 1000);
	});
}	

