$(document).ready(function(){
	var apiKey = "CEiFJXMBImnhxEcWs4iHN5sUwRPoR6ml";
	var userId = "cyeung168";
	var portfolioUrl = "http://www.behance.net/v2/users/" + userId + "/projects?client_id=" + apiKey + "&callback=?";
	$('.intro-reveal').css("display", "none");
	
// WEBSITE INTRO
(function(){
	$("#viewer-name").on("keydown", function(event) {
		if ($("#viewer-name").val().length >= 2) {
			console.log("value larger than 2");
			$(".input-cmd").text("Is that what you answer to? If yes, press enter.");
		}


		if (event.keyCode===13) {
			$(".intro-prompt").fadeOut(100);
			$(".intro-reveal").fadeIn(1000);
		}

	});

	
})();

// // PORTFOLIO AREA 
// $.getJSON(portfolioUrl, function(projects) {
// 	//console.log(projects);
// 	//console.log(projects.projects[0].covers[230]);
// 	var source = $("#portfolio-template").html();
// 	var template = Handlebars.compile(source);
// 	var html = template({projectData: projects});


// 	$(".portfolio-area").html(html);


// 	$('.project-item').on('click', function (e) {
// 		//console.log("project-item clicked");
// 		var projectId = $(this).data("projectid");
// 		var projectsUrl = "http://www.behance.net/v2/projects/"+ projectId + "?api_key=" + apiKey + "&callback=?";

// 		// PROJECT AREA
// 		$.getJSON(projectsUrl, function(modules) {
// 			console.log(modules);
// 			var source = $("#project-template").html();
// 			var template = Handlebars.compile(source);
// 			var html = template(modules);

// 			$(".modal-content").html(html);
// 			$(".item:first").addClass("active");

// 		});	

// 	});

// });



});