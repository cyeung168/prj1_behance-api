$(document).ready(function(){
	var apiKey = "CEiFJXMBImnhxEcWs4iHN5sUwRPoR6ml";
	var userId = "cyeung168";
	var url = "http://www.behance.net/v2/users/" + userId + "/projects?client_id=" + apiKey + "&callback=?";

$.getJSON(url, function(projects) {
	console.log(projects);
	console.log(projects.projects[0].covers[230]);
	var source = $("#portfolio-template").html();
	// Is a getter, it's just grabbing the text from the script tag
	var template = Handlebars.compile(source);
	var html = template({projectData: projects});
	// taking the data from the AJAX call and plugging into Handlebars 

	$(".container").html(html);
	// set the HTML of my template, which should have the data that is dynamically added
});

});