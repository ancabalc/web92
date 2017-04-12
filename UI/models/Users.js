/* global $*/
/* global Users*/

function Users(options){
	this.models = [];
}
Users.prototype.update = function(userData) {
	

	var formData = new FormData();
	formData.append("name",userData.name);
	formData.append("description", userData.desc);
	formData.append("image", userData.image);
	formData.append("id", "1");

	
	var config = {
		url: "https://web92-farki92.c9users.io/api/users/update",
		method: "POST",
		data: formData,
		processData:false,        // To send DOMDocument or non processed data file it is set to false
		contentType: false,
		success: function(resp) {
			console.log("all good");
		},
		error: function() {
			console.log("user was not updated");
		}
	}
	
	return $.ajax(config);
}