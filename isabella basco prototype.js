var current_image = 0;
var images = ["Headshot 1", "Headshot 2", "Headshot 3"];
$ (document).ready(function(){
	var slides = $(".mySlides"); 
	slides.hide(); 
	hideImages(); 

	$('#'+images[current_image]).show();

});
var hideImages = function() { 
	for (var index in images) {
		var image_name = images[index];
		$('#'+image_name.hide(); 
   	}
}
var currentSlide = function (image_index){
	hideImages(); 
	$('#'+images[images_index]).show(); 
	current_image = image_index; 
}

var plusSlides = function(arrow){
	hideImages(); 
	var image_index = current_image + arrow; 
	$('#'+images[current_image + arrow]}.show(); 
	console.log(current_image) + arrow); 
	current_image = image_index; 
}