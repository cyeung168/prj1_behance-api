$(document).ready(function(){
	var apiKey = "CEiFJXMBImnhxEcWs4iHN5sUwRPoR6ml";
	var userId = "cyeung168";
	var portfolioUrl = "http://www.behance.net/v2/users/" + userId + "/projects?client_id=" + apiKey + "&callback=?";
	$(".intro-reveal").hide();
	$(".input-cmd").hide();
	
// INTRO AREA
(function(){
	// Prompt user to press enter when ready
	$("#viewer-name").on("keydown", function(event) {
		var viewerName = $("#viewer-name").val();
		if (viewerName.length >= 1) {
			// console.log("value larger than 2");
			$(".input-cmd").text("Is that what you answer to? If yes, press enter.");
			$(".input-cmd").fadeIn(1000);
		} // -- close .val() if method

	// Listen for enter key press to fade out data storage form prompt
		if (event.keyCode===13) {
			$(".intro-prompt").fadeOut(100);
			$(".intro-reveal").fadeIn(1000);
			sessionStorage.setItem("name", viewerName);
			$(".insert-name").text(sessionStorage.getItem("name"));

		} // -- close keyCode if method
	});	



$("input[placeholder]").each(function () {
        $(this).attr('size', $(this).attr('placeholder').length);
    });

// function resizeInput() {
//     $(this).attr('size', $(this).val().length);
// }

// $('input[type="text"]')
//     // event handler
//     .keyup(resizeInput)
//     // resize on page load
//     .each(resizeInput);




// Listen for button click to fade out entire intro area and grab portfolio area
	$(".show-portfolio").on("click", function(e) {
			$(".intro-area").fadeOut(100);
			$('body').css("background-color", "#FAFAFA");
			//console.log("fade out intro area");

		
		// PORTFOLIO AREA 
		$.getJSON(portfolioUrl, function(projects) {
			//console.log(projects);
			//console.log(projects.projects[0].covers[230]);
			var source = $("#portfolio-template").html();
			var template = Handlebars.compile(source);
			var html = template({projectData: projects});
			$(".portfolio-area").html(html);

			// Listen for click on any project to call modal that shows project details

				$(".portfolio-area li").on ('mouseenter',function(){
	    			$(this).find(".color-overlay").css("visibility", "visible");
	    		});
	    		$(".portfolio-area li").on ('mouseleave', function(){
	    			$(this).find(".color-overlay").css("visibility", "hidden");
	    		});
	    	


			$('.portfolio-area li').on('click', function (e) {
    			// $(this).css("visibility", "hidden");
				console.log("project-item clicked");
				var projectId = $(this).find("img").data("projectid");
				var projectsUrl = "http://www.behance.net/v2/projects/"+ projectId + "?api_key=" + apiKey + "&callback=?";

				console.log("after hover yay!");

				// PROJECT AREA
				$.getJSON(projectsUrl, function(modules) {
					console.log(modules);
					var source = $("#project-template").html();
					var template = Handlebars.compile(source);
					var html = template(modules);

					$(".modal-content").html(html);
					$(".item:first").addClass("active");
				});	// -- close PROJECT AREA json 
			}); // -- close .project-item click event listener


		}); // -- close PORTFOLIO AREA json
	}); // -- close .showportfolio click event listener


})(); // close self-invoking function

}); // close document ready