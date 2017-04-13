/* global $*/
/* global Users*/

function Users(options){
	this.models = [];
}
Users.prototype.update = function(userData) {
	
	var formData = new FormData();
	formData.append("name", userData.name);
	formData.append("description", userData.desc);
	formData.append("image", userData.image);
	formData.append("job", userData.job);
	formData.append("id", "1");

	var that = this;
	var config = {
		url: "https://web92-farki92.c9users.io/api/users/update",
		method: "POST",
		data: formData,
		processData:false,        // To send DOMDocument or non processed data file it is set to false
		contentType: false,
		success: function(resp) {
			if (resp) {
            that.isCreated = resp.isCreated || false;
            }
		},
		error:  function(xhr, status, error) {
            alert("error");
		},
		complete: function(){
            console.log("The request is complete");
        }
	}
	
	return $.ajax(config);
}

Users.prototype.getUserById = function(){
	var that = this;
	var config = {
		url: "https://web92-farki92.c9users.io/api/users/getUserById",
		method: "GET",
		success: function(resp) {
			$.each(resp, function(i, user){
				var userById = new Users();
				that.models.push(user);
			});
			
		},
		error: function(){
			console.log("Something went wrong while getting the user");
		}
	};
	return $.ajax(config);
};
