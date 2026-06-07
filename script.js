$(window).ready(function(){
	$("nav > p:first-of-type").on("click", function(){
		$(this).siblings().each(function(index){
			
		$(this).slideToggle((index + 1)*300)
		});
	});
});