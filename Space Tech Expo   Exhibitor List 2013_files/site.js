/**
 * @author Matt.Jonat
 */
$(document).ready(function(){
	
	$('#numbers').countdown({
		until : new Date(2013, 5 - 1, 21, 8),
		timezone : -8,
		layout : '<div class="time days">- {dn}</div><div class="colon">:</div><div class="time hours">{hn}</div><div class="colon">:</div><div class="time minutes">{mn}</div><div class="colon">:</div><div class="time seconds">{sn}</div>'
	});

	$(".ui-tabs").tabs();

	$("#ajaxmenu li").hover(function() {
		$('ul', this).stop(true, true).fadeIn(400);
		//stop()
	}, function() {
		$('ul', this).stop(true, true).fadeOut(300);
	});

	$("#home_tweet").getTweet("spacetechexpo");

	$('#home_scroller').cycle({
		fx : 'fade',
		speed : 4000
	});

	/*no longer using the ajax exhbib logo loader - for now
	 setInterval(function() {

	 $.ajax({url:"http://www.spacetechexpo.com/home-exhib-logos", success:function(result){

	 $("#exhib_scroller").fadeOut('slow', function(){

	 $(this).html(result);
	 $("#exhib_scroller").fadeIn('slow');

	 });

	 }});

	 }, 5000); //5 seconds
	 no longer using the ajax exhbib logo loader - for now */

	$('.mosaic-block').mosaic({
		animation : 'slide', //fade or slide
		speed : 300,
		anchor_y : 'top', //Vertical anchor position
		hover_y : '65px'	//Vertical position on hover
	});

	//Hotel pic slider
	$('.hotel_pics').each(function() {
		var show = $(this);
		show.cycle({
			fx : 'fade',
			speed : 2000
		});
	});
	//Hotel page popup
	$(".google_map").fancybox({
		'width' : '90%',
		'height' : '90%',
		'autoScale' : false,
		'transitionIn' : 'elastic',
		'transitionOut' : 'elastic',
		'type' : 'iframe'
	});

	$(".fancy").fancybox({
		'titleShow' : false,
		'autoDimensions' : true,
		'padding' : 10,
		'margin' : 0
	});

	$(".exhib_expand").toggle(function() {
		$height = $(this).next().height();
		$height = ($height + 10);
		if ($height > 77) {
			$(this).parent().animate({
				height : $height + 'px'
			}, 1000);
			return false;
		}
	}, function() {
		$(this).parent().animate({
			height : '77px'
		}, 1000);
		return false;
	});

	$("a.switch_thumb").toggle(function() {
		$(this).addClass("swap");
		$('#exhib_container').fadeOut('fast', function() {
			$('.exhib_holder').height('77px');
			$(this).addClass("thumb_view").fadeIn("fast");
		});
	}, function() {
		$(this).removeClass("swap");
		$('#exhib_container').fadeOut('fast', function() {
			$(this).removeClass("thumb_view").fadeIn("fast");
		});
	});
	
	//TAB Menu
	$(function() {
    	$( "#about-tabs" ).tabs();
  	});
	
	$(function() {
	$("#exhibitor-carousel").carouFredSel({
		width : 920,
		height : 73,
		auto : {
			items : 7,
			duration : 20000,
			easing : "linear",
			pauseDuration : 0,
			pauseOnHover : false
			}
		});
	});
});
//end doc read
