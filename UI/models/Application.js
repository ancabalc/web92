/*global $*/
/*global Application*/

Application.prototype.getAll = function() {
	
	var that = this;
	var config = {
		url: "https://web92-sebastianx.c9users.io/api/applications",
		method: "GET",
		success: function(resp) {
			for (var i=0; i<resp.length; i++) {
		
				that.models.push(resp[i]);
			}
		},
		error: function(){
			console.log("Something went wrong while getting the articles");
		}
	}
	return $.ajax(config);
}