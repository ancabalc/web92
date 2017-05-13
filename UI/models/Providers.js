/* global Provider */
/* global $ */
function Providers (){
	this.models = [];
}

Providers.prototype.getTopThree = function() {
	
		var that = this;
		var config = {
			url: "https://web92-auxentiu.c9users.io/api/users/list",
			method: "GET",
			success: function(resp) {
				for (var i=0; i<resp.length; i++) {
					var provider = new Provider (resp[i]);
					that.models.push(provider);
				}
			},
			error: function(){
				console.log("Something went wrong while getting the providers");
			}
		};
		return $.ajax(config);
	};