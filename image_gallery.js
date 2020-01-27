$(document).ready(function() {
    $("#image_list a").each(function() {
    	// get the image URL and caption for each image
    	var imageURL = $(this).attr("href");
    	var caption = $(this).attr("title");
    	
    	// preload the image for each link		
		var galleryImage = new Image();
		galleryImage.src = imageURL;
		
		// set up the event handlers for each link
		$(this).click(function(evt) {
			$("#caption, #image").slideUp(2000,
				function() {
					$("#image").attr("src", imageURL);
    				$("#caption").text(caption);
    				$("#caption, #image").slideDown(2000);					
				});
   	 	
    		// cancel the default action of each link
    		evt.preventDefault();
  		}); // end click 
    }); // end each
    // move the focus to the first link
    $("li:first-child a").focus();
}); // end ready