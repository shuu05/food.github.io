$(document).ready(function(){

	
	//toggler btn
	$('.navbar-toggler').click(function(){
		$('.navbar-togglerr').toggleClass('change');
	});
	
	//sticky navbar less padding
	$(window).scroll(function(){
		let position = $(this).scrollTop();
		if(position>=718){
			$('.navbar').addClass('.scrollTop');
		}
		else{
			$('.navbar').removeClass('.scrollTop');
		}
	});
	
	//smoothscroll
	
	$('.nav-item a,.header-link,#back-to-top').click(function(link){
		link.preventDefault();
		
		let target = $(this).attr('href');
		
		$('html,body').stop().animate({
			scrollTop:$(target).offset().top -25
		},3000);
	});
	
	
	
	//back-to-top
	
	$(window).scroll(function(){
		let position = $(this).scrollTop();
		if(position>=718){
			$('#back-to-top').addClass('.navbar-background');
			$('#back-to-top').addClass('.fixed-top');
		}
		else{
			$('#back-to-top').removeClass('.navbar-background');
			$('#back-to-top').removeClass('.fixed-top');
		}
	}); 
	
	
	//ripples
	
	$("#header, .info").ripples({
  dropRadius: 20,
  perturbance: 0.6,
	});	
	
	//maginfic popup
	    $('.parent-container').magnificPopup({
     type: 'image',
     delegate: 'a',
     gallery: {
      enabled : true
     }
    });
	
	
});